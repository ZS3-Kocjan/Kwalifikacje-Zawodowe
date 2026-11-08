// Run from packages/web-site: node scripts/check-code-marks.js
import assert from 'node:assert/strict'
import data from '../src/data/data.js'
import { splitCode } from '../src/scripts/splitCode.js'

assert.deepEqual(splitCode('bez kodu'), ['bez kodu'])
assert.deepEqual(splitCode('a `b` c `d`'), ['a ', '`b`', ' c ', '`d`', ''])
assert.deepEqual(splitCode('a\n```\nb `c`\n\nd\n```\ne'), ['a\n', '```\nb `c`\n\nd\n```', '\ne'])
assert.deepEqual(splitCode('`<img>` & <b>'), ['', '`<img>`', ' & <b>'])

// A stray backtick in a question would silently show up as plain text.
for (const { name, questions } of data) {
    for (const { id, title, answers } of questions) {
        for (const text of [title, ...answers.map(answer => answer.text)]) {
            const plainParts = splitCode(text).filter((_, i) => i % 2 === 0)
            assert.ok(!plainParts.some(part => part.includes('`')), `${name} #${id}: unbalanced backticks in "${text}"`)
        }
    }
}

console.log('Code marks OK')
