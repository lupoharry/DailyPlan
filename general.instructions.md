# General Engineering Guidelines

## Project reality

- Daylight is a static, client-side application built with HTML, CSS, and vanilla JavaScript. It has no package manifest, build step, framework, server, or remote database.
- The application entry point is `index.html`. It loads the ordered browser-global modules in `js/` and the stylesheets in `css/`.
- Keep changes compatible with opening the app directly in a modern browser or serving it as static files. Do not introduce a framework, package manager, or build system without an explicit requirement.
- Treat the implementation as the source of truth. Some existing documentation may describe a different or older data model; verify claims against the current code before repeating them.

## Architecture and code style

- Keep HTML, JavaScript, CSS, assets, and documentation in their existing directories.
- Keep each `js/` file focused on its domain. Modules expose a `window.Daylight*` object using an IIFE; preserve script load order and existing public methods when editing them.
- Follow the existing two-space indentation, semicolon, double-quoted JavaScript string, and camelCase conventions. Use `const` by default and `let` only when reassignment is needed.
- Prefer small, focused functions and changes that preserve existing user-facing behavior.
- Keep markup semantic and accessible. Keep styling in the existing CSS files, use their custom properties and established class patterns, and maintain responsive layouts.
- Avoid adding dependencies or generated artifacts. Do not modify unrelated files or existing user changes.

## Privacy and safety

- Journal content is personal data stored in the user's browser. Do not add network transmission, analytics, or third-party persistence for journal entries without explicit authorization.
- Treat imported JSON and all user-provided text as untrusted. Validate data at the storage boundary and escape text before inserting it into HTML.
- Preserve clear confirmations for destructive actions and visible error feedback for failed operations.
- Never add credentials, secrets, or sensitive user data to source code or logs.

## Validation and collaboration

- Check the actual files and available project scripts before choosing validation commands. There is currently no `package.json`, test runner, TypeScript configuration, or build script.
- The GitHub Actions workflow at `.github/workflows/validate.yml` checks required project files, basic HTML structure, JavaScript syntax when Node.js is available, file references, and documentation presence.
- For behavior changes, validate the affected flow in a browser when possible, including browser storage and responsive behavior where relevant. Report checks that were not run; do not imply that static checks are comprehensive tests.
- Do not commit or push unless explicitly requested. Preserve user changes and keep the final summary factual.
