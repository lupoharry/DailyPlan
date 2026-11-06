---
description: "Use when adding or changing TypeScript in Daylight. TypeScript is not currently used by the app; preserve its browser-first architecture unless a migration is explicitly requested."
applyTo: "**/*.{ts,tsx}"
---
# TypeScript Guidelines

- The current application is vanilla JavaScript and has no TypeScript compiler configuration. Do not convert files or introduce a compiler/toolchain as part of an unrelated change.
- If TypeScript is explicitly introduced, enable strict checking and keep compiler options narrow and intentional; do not suppress errors or weaken checks to make code pass.
- Model actual Daylight data accurately: a journal entry has an ISO `YYYY-MM-DD` date, title, content, a mood `{ name, emoji, score }`, reflection fields (`wentWell`, `couldImprove`, `gratitude`, `learned`), an ID, and ISO timestamp strings.
- Use explicit types for nullable values, browser APIs, event details, and imported JSON. Validate external or persisted data at runtime; static types alone do not validate Local Storage or files.
- Avoid `any`, unsafe assertions, and non-null assertions. Prefer narrow unions, type guards, and small interfaces that reflect the existing data boundary.
- Preserve the current module boundaries and browser API behavior unless the TypeScript migration explicitly changes them.
