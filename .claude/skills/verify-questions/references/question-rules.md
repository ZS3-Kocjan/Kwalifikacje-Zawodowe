# Question rules

Students use this bank to prepare for a real exam, so a wrong answer key or a question that can be guessed does harm. Prefer fewer, verified questions over many doubtful ones.

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

1. **One verifiable fact.** Exactly one answer is correct and the other three are certainly wrong. Confirm the key before trusting it: run a code snippet when its runtime is installed (`node`, `python`, `php`, `g++`, `java`) and take the answer from the run, otherwise trace it by hand. Never guess. Stay within the qualification's exam syllabus (podstawa programowa) and at exam level: no trivia, and nothing that depends on a tool version unless the title names the version.
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
