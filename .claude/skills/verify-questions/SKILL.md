---
name: verify-questions
description: Check and improve the existing multiple-choice questions of the Kwalifikacje Zawodowe quiz bank in packages/web-site/src/data/data.js - wrong or ambiguous answer keys, weak wording, guessable answers, poor distractors, duplicates, code formatting. Use whenever existing questions are verified, reviewed, corrected, deduplicated or rewritten, and to validate data.js after an edit. Use for requests such as "sprawdź pytania", "zweryfikuj pytania", "popraw pytania", "popraw jakość pytań", "znajdź błędy w pytaniach", "usuń duplikaty pytań", "verify the questions", "improve the questions". To write new questions, use the add-questions skill instead.
---

# Verify questions

Before judging or changing a question, read [references/question-rules.md](references/question-rules.md). It holds the format of a question and the rules a good one follows, and is shared with the `add-questions` skill.

## Checker

Run from the repository root:

```bash
node .claude/skills/verify-questions/scripts/check-questions.mjs                  # errors and quality numbers for every qualification
node .claude/skills/verify-questions/scripts/check-questions.mjs INF.04           # also lists the questions behind each number
node .claude/skills/verify-questions/scripts/check-questions.mjs INF.04 200       # the same, for questions with id >= 200 only
node .claude/skills/verify-questions/scripts/check-questions.mjs --titles INF.04  # id, title and correct answer of every question
node packages/web-site/scripts/check-code-marks.js                                # unbalanced backticks
```

- Errors are format rules. There must be none.
- Quality numbers are not rules for a single question. They show which way a qualification or a batch leans and where to look.
- Lists give `data.js:<line>`. Read those lines instead of the whole file, which has about 3,600 lines.
- `--titles` prints over 30 KB for INF.03. Redirect it to a temporary file outside the repository and read that, or pipe it through `grep`.

## Verifying questions

1. Run the checker for the qualification. If the user set no scope, propose one from the numbers, such as an id range or one defect across the qualification. Work in batches of about 40 questions and run the checker after each batch.
2. Confirm the answer key of every question in scope, as rule 1 describes. If the keyed answer is wrong, or two options are correct, fix it and name the question in the report.
3. Fix what the other rules call for: rewrite the title, replace weak distractors, even out answer lengths, correct the code marks. Keep the fact that the question tests.
4. After reordering answers, renumber their `id`s to 0 to 3 and update `goodAnswer`.
5. When two questions test the same fact, keep the better one and replace the other in place with a new question on a thin topic.
6. Leave questions outside the scope untouched.

If the user asked only for a check, change nothing. Report the wrong keys and the broken rules by question id.

## Report

Finish with a short report:

- Changed: the ids, grouped by kind of fix. List every corrected answer key separately, with the old and the new answer.
- Checker: the result, with "correct answer is the longest" before and after for the scope.
- Not verified: anything taken on trust, such as snippet output traced by hand.
