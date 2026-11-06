---
description: "Use when introducing or changing React components in Daylight. React is not currently part of the application; do not migrate to it unless explicitly requested."
applyTo: "**/*.{jsx,tsx}"
---
# React Guidelines

- The current UI is semantic HTML in `index.html`, with direct DOM updates from focused browser-global modules. There are no React components, hooks, or framework dependencies.
- Do not introduce React or migrate existing pages as an incidental refactor. If a React migration is explicitly requested, keep the current dashboard, journal editor/list/detail, calendar, settings, and responsive behavior intact.
- Keep presentation, state transitions, and persistence responsibilities distinct. Components should not directly own Local Storage schema or duplicate validation from the storage boundary.
- Use stable entry IDs for list keys and accessible native controls, labels, keyboard interactions, and status/error announcements.
- Render journal text as text, not executable markup. If rich HTML is ever required, use an explicitly reviewed sanitization approach; do not bypass the existing escaping safeguards.
- Avoid unnecessary global state or effects. Keep event subscriptions and browser API interactions scoped and clean them up when the component lifecycle ends.
