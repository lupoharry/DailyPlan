---
description: "Use when writing or updating Daylight Markdown documentation, including the README, guides, architecture notes, data model, and contribution instructions."
applyTo: "**/*.md"
---
# Documentation Guidelines

- Describe the application as it exists: static HTML, CSS, and vanilla JavaScript, with browser Local Storage and no required build tools or runtime dependencies.
- Verify commands, file paths, feature behavior, data fields, and limits against source code and `.github/workflows/validate.yml`. Do not copy stale claims from another document without checking them.
- Keep user-facing guidance aligned with the UI: daily journal entries, ten defined moods, four optional reflection prompts, calendar, search/filter, and JSON import/export.
- When documenting the data model, use the actual `dailyJournalEntries` array and the entry shape and validation rules implemented in `js/storage.js`.
- Prefer concise headings, actionable steps, and relative links that work from the document's location. Keep existing document structure and contribution guidance when editing those files.
- Avoid claiming data is secure solely because it is local, or promising features, limits, tests, and compatibility not guaranteed by the implementation.
- Do not add new documentation files or restructure existing guides unless the task calls for it.
