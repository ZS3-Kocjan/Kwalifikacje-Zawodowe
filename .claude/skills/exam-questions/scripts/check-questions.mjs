#!/usr/bin/env node
// Checks packages/web-site/src/data/data.js. Works from any directory:
//   node check-questions.mjs                   errors and quality numbers for every qualification
//   node check-questions.mjs INF.04            also lists the questions behind each number
//   node check-questions.mjs INF.04 200        the same, for questions with id >= 200 only
//   node check-questions.mjs --titles INF.04   id, title and correct answer of every question
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const DATA = new URL('../../../../packages/web-site/src/data/data.js', import.meta.url)
const { default: data } = await import(DATA.href)

const args = process.argv.slice(2)
const titlesOnly = args[0] === '--titles'
if (titlesOnly) args.shift()
const [only, firstId = '0'] = args
const names = data.map(set => set.name)
if ((only && !names.includes(only)) || (titlesOnly && !only) || !/^\d+$/.test(firstId)) {
    console.error(`Usage: check-questions.mjs [--titles] [${names.join('|')}] [first id]`)
    process.exit(2)
}
const from = Number(firstId)

if (titlesOnly) {
    for (const q of data.find(set => set.name === only).questions) {
        console.log(`${q.id}\t${JSON.stringify(q.title)}\t=> ${q.answers?.[q.goodAnswer]?.text}`)
    }
    process.exit(0)
}

// Line of every question that follows the house layout: one line per field, double-quoted strings.
const lines = fs.readFileSync(fileURLToPath(DATA), 'utf8').split(/\r?\n/)
const lineOf = new Map()
let section
lines.forEach((line, i) => {
    section = line.match(/^\s+name: "(.*)",$/)?.[1] ?? section
    const id = line.match(/^\s+id: (\d+),$/)?.[1]
    const oneLineFields = /^\s+title: ".*",$/.test(lines[i + 1]) && /^\s+answers: \[.*\],$/.test(lines[i + 2]) && /^\s+goodAnswer: \d$/.test(lines[i + 3])
    if (id && oneLineFields) lineOf.set(`${section}#${id}`, i + 1)
})

const plain = text => text.replace(/`/g, '').trim()
const titleKey = title => plain(title).toLowerCase().replace(/[^\p{L}\p{N}]/gu, '')
const isText = value => typeof value === 'string' && value !== '' && value === value.trim()

function questionErrors(q, index) {
    const errors = []
    if (q.id !== index) errors.push(`id should be ${index}`)
    if (!isText(q.title)) return [...errors, 'title must be a non-empty, trimmed string']
    if (!/[?:]$/.test(q.title) && !/\?\n\n```[\s\S]+```$/.test(q.title)) errors.push('title must end with ? or : (a code block may follow the ?)')
    if (q.title.startsWith('```')) errors.push('title must not start with a code block')
    if (!Array.isArray(q.answers) || q.answers.length !== 4 || !q.answers.every((a, i) => a?.id === i && isText(a.text))) {
        return [...errors, 'answers must be 4 objects { id, text }, with id 0-3 in order and non-empty, trimmed text']
    }
    if (![0, 1, 2, 3].includes(q.goodAnswer)) return [...errors, 'goodAnswer must be 0, 1, 2 or 3']
    if (new Set(q.answers.map(a => plain(a.text).toLowerCase())).size < 4) errors.push('two answers are the same')
    if (q.answers.some(a => /\p{L}\.$/u.test(a.text))) errors.push('answers must not end with a period')
    const marked = q.answers.map(a => a.text.includes('`'))
    const markedCount = marked.filter(Boolean).length
    if ((markedCount === 1 && marked[q.goodAnswer]) || (markedCount === 3 && !marked[q.goodAnswer])) {
        errors.push('code marks single out the correct answer: unmark all four answers')
    }
    return errors
}

let errorCount = 0
for (const [index, set] of data.entries()) {
    const errors = []
    if (!isText(set.name) || names.indexOf(set.name) !== index) errors.push('name must be a unique, non-empty string')
    if (!isText(set.fullName)) errors.push('fullName must be a non-empty string')
    if (typeof set.available !== 'boolean') errors.push('available must be true or false')
    const questions = Array.isArray(set.questions) ? set.questions : []
    if (!Array.isArray(set.questions)) errors.push('questions must be an array')
    if (set.available === true && questions.length < 40) errors.push('available: true needs at least 40 questions, because a quiz draws 40')
    questions.forEach((q, i) => {
        const found = questionErrors(q, i)
        if (!found.length && !lineOf.has(`${set.name}#${q.id}`)) found.push('keep id, title, answers and goodAnswer on one line each, with double-quoted strings')
        for (const error of found) errors.push(`#${i}: ${error}`)
    })

    errorCount += errors.length
    if (errors.length) {
        console.log(`\n${set.name}: ${errors.length} errors. Fix them before reading the quality numbers.`)
        for (const error of errors) console.log(`  ${error}`)
        continue
    }
    if (only && only !== set.name) continue

    const scope = questions.filter(q => q.id >= from)
    if (!scope.length) {
        console.log(`\n${set.name}: no questions with id >= ${from}`)
        continue
    }
    const ref = q => `#${q.id} data.js:${lineOf.get(`${set.name}#${q.id}`)}`
    const lengths = q => q.answers.map(a => plain(a.text).length)
    const otherMax = q => Math.max(...lengths(q).filter((_, i) => i !== q.goodAnswer))
    const longest = scope.filter(q => lengths(q)[q.goodAnswer] > otherMax(q))
        .sort((a, b) => lengths(b)[b.goodAnswer] / otherMax(b) - lengths(a)[a.goodAnswer] / otherMax(a))
    const short = scope.filter(q => plain(q.title).length < 30)
    const groups = new Map()
    for (const q of questions) groups.set(titleKey(q.title), [...(groups.get(titleKey(q.title)) ?? []), q])
    const repeated = [...groups.values()].filter(group => group.length > 1 && group.some(q => q.id >= from))
    const list = rows => { if (only) for (const row of rows) console.log(`      ${row}`) }

    console.log(`\n${set.name}: ${scope.length} questions${from ? ` with id >= ${from}` : ''}, no errors`)
    console.log(`  correct answer at position 0/1/2/3: ${[0, 1, 2, 3].map(i => scope.filter(q => q.goodAnswer === i).length).join('/')} (aim for an even spread)`)
    console.log(`  correct answer is the longest: ${longest.length}, ${Math.round(longest.length / scope.length * 100)}% (aim for about 25%, worst first)`)
    list(longest.map(q => `${ref(q)}  correct ${lengths(q)[q.goodAnswer]} characters, others at most ${otherMax(q)}`))
    console.log(`  repeated titles: ${repeated.length}`)
    list(repeated.map(group => group.map(ref).join(' = ')))
    console.log(`  titles under 30 characters: ${short.length} (check that each is a full question)`)
    list(short.map(q => `${ref(q)}  ${plain(q.title).replace(/\s+/g, ' ')}`))
}

console.log(errorCount ? `\n${errorCount} errors` : '\nNo errors')
process.exit(errorCount ? 1 : 0)
