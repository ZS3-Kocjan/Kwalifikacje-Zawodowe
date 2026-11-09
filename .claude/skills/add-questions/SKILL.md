---
name: add-questions
description: Add new multiple-choice questions, or a whole new qualification, to the Kwalifikacje Zawodowe quiz bank in packages/web-site/src/data/data.js. Use whenever new questions are written or imported for a qualification (INF.03, INF.04) or a qualification is added. Use for requests such as "dodaj pytania", "dodaj 50 pytań do INF.04", "napisz nowe pytania", "dodaj kwalifikację", "add questions", "add a qualification". To check or improve questions that already exist, use the verify-questions skill instead.
---

# Add questions

Before writing anything, read `.claude/skills/verify-questions/references/question-rules.md`. It holds the format of a question and the rules a good one follows, and is shared with the `verify-questions` skill.

## Commands

Run from the repository root:

```bash
node .claude/skills/verify-questions/scripts/check-questions.mjs --titles INF.04  # id, title and correct answer of every question
node .claude/skills/verify-questions/scripts/check-questions.mjs INF.04 200       # errors, and quality numbers for questions with id >= 200
node packages/web-site/scripts/check-code-marks.js                                # unbalanced backticks
```

`--titles` prints over 30 KB for INF.03. Redirect it to a temporary file outside the repository and read that, or pipe it through `grep`.

## Adding questions

1. Settle the qualification, the number of questions and the topics. If the user named no topics, choose them. Read the `--titles` list to see what is covered, prefer thin areas, and mix recall questions with applied ones: reading code, predicting output, choosing the right construct.
2. Write original questions that follow the rules. If the user supplies source material, keep its content and adapt only the format.
3. Confirm every answer key, as rule 1 describes. Drop a question whose key cannot be confirmed.
4. Append the questions at the end of the qualification's `questions` array, with ids that continue its sequence.
5. Run the checker with the first new id, then `check-code-marks.js`. Fix until there are no errors, no position holds more than about a third of the batch's correct answers, and "correct answer is the longest" is near 25%.

## Adding a qualification

Append `{ name, fullName, questions, available }` to the array in `data.js`, where `name` is the code, such as `"INF.02"`, and `fullName` is the official title. Keep `available: false` until the qualification has at least 40 questions, because a quiz draws 40. If its syllabus is unfamiliar, ask the user for it or for source material.

## Report

Finish with a short report:

- Added: the number of questions, the qualification, the id range and the topics.
- Checker: the result for the new ids.
- Not verified: anything taken on trust, such as snippet output traced by hand.
