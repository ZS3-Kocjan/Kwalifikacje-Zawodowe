---
name: exam-questions
description: Write and repair the multiple-choice questions of the Kwalifikacje Zawodowe quiz, kept in packages/web-site/src/data/data.js. Use whenever questions are added to a qualification (INF.03, INF.04), a new qualification is added, or existing questions are reviewed, corrected, deduplicated or improved - wording, distractors, answer keys, code formatting. Use for requests such as "dodaj pytania", "dodaj 50 pytań do INF.04", "popraw pytania", "popraw jakość pytań", "sprawdź pytania", "dodaj kwalifikację", "add questions", "improve the questions", and before any edit of question text or answers in data.js.
---

# Exam questions

Students use this bank to prepare for a real exam, so a wrong answer key or a question that can be guessed does harm. Prefer fewer, verified questions over many doubtful ones.

## Checker

Run from the repository root:

```bash
node .claude/skills/exam-questions/scripts/check-questions.mjs                  # errors and quality numbers for every qualification
node .claude/skills/exam-questions/scripts/check-questions.mjs INF.04           # also lists the questions behind each number
node .claude/skills/exam-questions/scripts/check-questions.mjs INF.04 200       # the same, for questions with id >= 200 only
node .claude/skills/exam-questions/scripts/check-questions.mjs --titles INF.04  # id, title and correct answer of every question
node packages/web-site/scripts/check-code-marks.js                              # unbalanced backticks
```

- Errors are format rules. There must be none.
- Quality numbers are not rules for a single question. They show which way a qualification or a batch leans and where to look.
- Lists give `data.js:<line>`. Read those lines instead of the whole file, which has about 3,600 lines.
- `--titles` prints over 30 KB for INF.03. Redirect it to a temporary file outside the repository and read that, or pipe it through `grep`.

## Format

````js
            {
                id: 401,
                title: "Co zwróci poniższe zapytanie SQL?\n\n```\nSELECT COUNT(*)\nFROM uczniowie\nWHERE klasa = '3A';\n```",
                answers: [{ id: 0, text: "Nazwiska uczniów klasy 3A" }, { id: 1, text: "Liczbę wszystkich uczniów" }, { id: 2, text: "Liczbę uczniów klasy 3A" }, { id: 3, text: "Liczbę klas w szkole" }],
                goodAnswer: 2
            }
````

- Write six lines per question, as above: one line per field, double-quoted strings, `\n` for a line break, `\"` for a quote. Never use template literals, because backticks are code marks.
- `id` continues the qualification's own sequence, which starts at 0. Give exactly four answers with `id` 0 to 3 in order. `goodAnswer` is the index of the correct one.
- Append new questions at the end of the qualification's `questions` array. Do not reorder or renumber existing questions. To drop a question, replace it in place with a new one, so ids stay sequential.
- Change only the lines of the questions being worked on. For many questions, build the lines with a script (`JSON.stringify` for the strings) and insert them by exact string replacement. Never regenerate the file. Keep its line endings.
- Mark code. Single backticks are for names, keywords, tags, operators and short expressions. A fence, written as in the title above, is for whole statements, CSS declarations and multi-line snippets, with `\n\n` between it and the prose. A title never starts with a fence. The full rules are in CLAUDE.md under "Code marks in question text".

## What a good question looks like

1. **One verifiable fact.** Exactly one answer is correct and the other three are certainly wrong. Stay within the qualification's exam syllabus (podstawa programowa) and at exam level: no trivia, and nothing that depends on a tool version unless the title names the version.
2. **A title that stands alone.** Write a full Polish sentence that names the language or technology and can be answered before reading the options. End it with `?` for a question, or with `:` for a sentence that the answer completes. Write a negation in capitals: "Która rola NIE występuje w metodyce Scrum?".
3. **Distractors of the same kind.** Each distractor is a real thing a student could confuse with the answer, in the same category and grammatical form as the answer: four properties, four functions or four definitions. No joke options, no "wszystkie powyższe" and no "żadna z powyższych".
4. **Nothing gives the answer away.** The correct answer is not the longest or the most detailed option, so write the distractors as long and as specific as it is. No word from the title appears only in the correct answer. If code marks would single out the correct answer, leave all four answers unmarked. The app shows answers in data order, so vary the position of the correct answer without a pattern.
5. **Consistent answers.** Keep each answer under about 80 characters, with no final period. After a title ending in `:`, answers start with a lowercase letter and complete the sentence grammatically. After a title ending in `?`, they start with a capital letter, unless they are code.
6. **Code that fits a phone.** Questions are text only, with no images or tables. Keep a snippet to about 12 lines of at most 45 characters, indented with 4 spaces. A fence takes no language label, so name the language in the title.
7. **No repeats.** Do not test a fact that an existing question in the same qualification already tests, even in other words.

A weak question from the bank:

```text
title:   "W CSS `vh` to:"
answers: "Viewport height" (correct), "Font", "Border", "DPI"
```

The title is not a sentence, the distractors are not units, and the correct answer is the longest and the only plausible one. The same fact, written well:

```text
title:   "Czemu odpowiada wartość `1vh` w CSS?"
answers: "1% wysokości okna przeglądarki" (correct), "1% szerokości okna przeglądarki",
         "1% wysokości elementu nadrzędnego", "Wysokości jednego wiersza tekstu"
```

Most of INF.03 predates these rules, so do not copy its style. INF.04 is the better model for wording. In both, the correct answer is the longest far too often.

## Adding questions

1. Settle the qualification, the number of questions and the topics. If the user named no topics, choose them. Read the `--titles` list to see what is covered, prefer thin areas, and mix recall questions with applied ones: reading code, predicting output, choosing the right construct.
2. Write original questions that follow the rules above. If the user supplies source material, keep its content and adapt only the format.
3. Verify every answer key. For a code snippet, run it when its runtime is installed (`node`, `python`, `php`, `g++`, `java`) and take the answer from the run. Otherwise trace it by hand. Drop a question whose key cannot be confirmed. Do not guess.
4. Append the questions, then run both check commands, passing the first new id to `check-questions.mjs`. Fix until there are no errors, no position holds more than about a third of the batch's correct answers, and "correct answer is the longest" is near 25%.

## Improving existing questions

1. Run the checker for the qualification. If the user set no scope, propose one from the numbers, such as an id range or one defect across the qualification. Work in batches of about 40 questions and run the checker after each batch.
2. Fix what the rules above call for: rewrite the title, replace weak distractors, even out answer lengths, correct the code marks. Keep the fact that the question tests.
3. Check the answer key of every question touched. If the keyed answer is wrong, or two options are correct, fix it and name the question in the report.
4. After reordering answers, renumber their `id`s to 0 to 3 and update `goodAnswer`.
5. When two questions test the same fact, keep the better one and replace the other in place with a new question on a thin topic.
6. Leave questions outside the scope untouched.

## Adding a qualification

Append `{ name, fullName, questions, available }` to the array in `data.js`, where `name` is the code, such as `"INF.02"`, and `fullName` is the official title. Keep `available: false` until the qualification has at least 40 questions, because a quiz draws 40. If its syllabus is unfamiliar, ask the user for it or for source material.

## Report

Finish with a short report:

- Added: the number of questions, the qualification, the id range and the topics.
- Changed: the ids, grouped by kind of fix. List every corrected answer key separately, with the old and the new answer.
- Checker: the result, with "correct answer is the longest" before and after for the scope.
- Not verified: anything taken on trust, such as snippet output traced by hand.
