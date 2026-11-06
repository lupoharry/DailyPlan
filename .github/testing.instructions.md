---
description: "Use when validating Daylight, adding tests, or changing application behavior. Covers the existing GitHub Actions checks and manual browser scenarios."
applyTo: ["**/*.{test,spec}.{js,ts,tsx}", ".github/workflows/**"]
---
# Testing and Validation Guidelines

## Existing checks

- There is currently no package manifest, test directory, test runner, or npm test command. Do not invent or report commands as existing.
- The repository check is `.github/workflows/validate.yml`. It verifies required files and directories, basic HTML structure, JavaScript syntax with `node -c` when Node.js is available, local script/style/image references, and required documentation files.
- The workflow uses shell pattern checks; passing it does not establish full HTML/CSS validity, accessibility, or application behavior.
- Before running checks, inspect the workflow and the current repository scripts. Report the exact commands run and their actual results.

## Behavior changes

- For entry creation, editing, and deletion, check validation feedback, date uniqueness, timestamps, and updates to the dashboard, journal list, and calendar.
- For storage changes, exercise fresh, valid, malformed, and duplicate-date data as applicable. Verify that invalid imports do not partially overwrite saved entries.
- For import/export changes, verify the exported JSON can be imported, matching dates are handled as documented by the code, malformed input is rejected, and the file input can be used again after an error.
- For navigation and forms, check unsaved-change confirmations, keyboard access, and visible success/error messages.
- For UI changes, check narrow and wide viewport layouts and accessible names/labels using a browser when possible.
- Add automated tests only when a suitable test setup exists or tooling is explicitly in scope. Keep tests focused on observable behavior and avoid tests that depend on the user's actual browser data.
