---
description: "Use when changing Daylight persistence, Local Storage, journal data validation, or JSON import/export. The app has no server-side database."
applyTo: ["js/storage.js", "docs/DATA_MODEL.md"]
---
# Data and Persistence Guidelines

- Daylight has no SQL database, backend, authentication service, or remote sync. Persist journal entries only through the existing `window.DaylightStorage` module unless an explicitly approved architecture change says otherwise.
- The storage key is `dailyJournalEntries`; its value is a JSON array of entries, not an object containing that array.
- Preserve the current entry shape: `id`, `date` (`YYYY-MM-DD`), `title`, `mood` (`name`, `emoji`, and `score`), `content`, `reflections` (`wentWell`, `couldImprove`, `gratitude`, `learned`), `createdAt`, and `updatedAt`.
- Enforce valid calendar dates, non-empty titles and content, recognized moods with matching emoji/score, and at most one entry per date. Preserve creation timestamps and IDs on updates; refresh `updatedAt`.
- Keep persistence and normalization in `js/storage.js`; UI modules should use its methods rather than accessing `localStorage` directly.
- Continue validating imported data before writing it. Imports are limited to 10,000 entries, reject duplicate dates within the import, and merge by date while retaining an existing entry's ID and creation timestamp.
- Handle corrupt saved data or storage failures deliberately and visibly where the UI performs writes. Do not silently replace a user's data with an empty dataset.
- Entries remain local to the browser. Do not add telemetry, remote storage, or secret-bearing configuration for journal content without explicit authorization.
- Keep data documentation consistent with the implementation. Verify the current code before documenting fields, constraints, or migration behavior.
