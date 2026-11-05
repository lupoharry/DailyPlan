# Contributing to Daylight

Thank you for your interest in contributing to Daylight! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Environment Setup](#development-environment-setup)
- [Project Structure](#project-structure)
- [Coding Conventions](#coding-conventions)
- [Branch Naming Conventions](#branch-naming-conventions)
- [Commit Message Conventions](#commit-message-conventions)
- [Pull Request Process](#pull-request-process)
- [Testing Expectations](#testing-expectations)
- [Bug Reporting](#bug-reporting)
- [Feature Proposals](#feature-proposals)

## Code of Conduct

Please note that this project is governed by the [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/DailyPlan.git
   cd DailyPlan
   ```
3. **Add upstream remote** to stay synchronized:
   ```bash
   git remote add upstream https://github.com/lupoharry/DailyPlan.git
   ```
4. **Create a branch** for your contribution (see [Branch Naming Conventions](#branch-naming-conventions))

## Development Environment Setup

### Requirements

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A code editor (VS Code, Sublime Text, or your preference)
- Git for version control
- VS Code Live Server extension (optional, for local development)

### Setup Steps

1. Open the project directory in your code editor
2. If using VS Code, install the Live Server extension
3. Right-click `index.html` and select "Open with Live Server" to run the application
4. Alternatively, open `index.html` directly in your browser
5. The app uses Local Storage, so data persists across browser sessions

### No Build Tools Required

This project intentionally avoids build tools and dependencies. All JavaScript, CSS, and HTML are vanilla and run directly in the browser.

## Project Structure

```
.
├── index.html              # Main application entry point
├── css/
│   ├── styles.css         # Global and core styles
│   ├── components.css     # Component-specific styles
│   └── responsive.css     # Media queries and responsive design
├── js/
│   ├── app.js            # Application initialization and main logic
│   ├── navigation.js      # Navigation and routing logic
│   ├── storage.js         # Local Storage operations
│   ├── journal.js         # Journal CRUD operations
│   ├── mood.js            # Mood tracking functionality
│   ├── dashboard.js       # Dashboard view logic
│   ├── calendar.js        # Calendar view logic
│   └── utils.js           # Utility functions
├── assets/
│   ├── daylight-home.png  # Screenshot for README
│   └── icons/
│       └── daylight.svg   # Application icon
├── docs/                  # Documentation
├── .github/               # GitHub-specific configuration
└── [configuration files]  # .gitignore, .editorconfig, etc.
```

## Coding Conventions

### JavaScript

- **Use ES6+ syntax** (const/let, arrow functions, destructuring, etc.)
- **Use camelCase** for variables, functions, and parameters
- **Use PascalCase** for constructors and classes
- **Use UPPER_SNAKE_CASE** for constants
- **Use meaningful variable and function names** that clearly describe their purpose
- **Keep functions focused** on a single responsibility
- **Use comments** only for non-obvious logic; the code should be self-documenting
- **Aim for readability** over clever or compact code

Example:
```javascript
// Good
const calculateMoodAverage = (entries) => {
  const total = entries.reduce((sum, entry) => sum + entry.moodScore, 0);
  return total / entries.length;
};

// Avoid
const calc = (e) => e.reduce((s, x) => s + x.m, 0) / e.length;
```

### HTML

- **Use semantic HTML5** elements (article, section, header, footer, nav, etc.)
- **Use meaningful IDs and classes** that reflect purpose, not presentation
- **Avoid inline styles** — use CSS classes instead
- **Use data attributes** for JavaScript-specific DOM selection
- **Keep markup clean** and properly indented
- **Use accessible form elements** with proper labels and ARIA attributes where needed

### CSS

- **Use meaningful class names** that reflect the component or purpose
- **Organize CSS** into logical sections with comments
- **Use CSS variables** for repeated values (colors, spacing, fonts)
- **Avoid deep nesting** and overly specific selectors
- **Use flexbox/grid** for layouts instead of floats
- **Mobile-first approach** for responsive design
- **Two-space indentation** (enforced by .editorconfig)

Example:
```css
/* Component: Card */
.card {
  background: var(--color-background);
  border-radius: var(--radius-default);
  padding: var(--spacing-md);
}

.card__title {
  font-size: var(--font-size-lg);
  font-weight: 600;
}
```

### File and Folder Organization

- **Separate concerns**: Keep HTML, CSS, and JS in their respective folders
- **Use lowercase names** with hyphens for files and folders
- **Group related CSS** into component files
- **Keep modules focused**: Each JS file should handle a specific domain
- **Use index.html** only for the main application entry point

## Branch Naming Conventions

Use the following format for branch names:

```
<type>/<description>
```

**Types:**

- `feature/` — New feature additions
- `bugfix/` — Bug fixes
- `docs/` — Documentation updates
- `refactor/` — Code refactoring without feature changes
- `test/` — Test additions or modifications
- `chore/` — Maintenance, dependency updates, tooling
- `perf/` — Performance improvements

**Examples:**

- `feature/add-search-functionality`
- `bugfix/fix-calendar-navigation-bug`
- `docs/update-user-guide`
- `refactor/simplify-storage-module`
- `perf/optimize-dashboard-rendering`

## Commit Message Conventions

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**

- `feat` — A new feature
- `fix` — A bug fix
- `docs` — Documentation only changes
- `style` — Changes that don't affect code meaning (formatting, missing semicolons, etc.)
- `refactor` — Code change that neither fixes a bug nor adds a feature
- `perf` — Code change that improves performance
- `test` — Adding or updating tests
- `chore` — Changes to build process, dependencies, or tooling

**Rules:**

- Use the imperative mood ("add feature" not "added feature")
- Don't capitalize the subject line
- Don't end the subject line with a period
- Use the body to explain *what* and *why*, not *how*
- Keep subject line under 50 characters
- Keep body lines under 72 characters
- Separate subject from body with a blank line

**Examples:**

```
feat(mood): add ability to change past mood entries

Allow users to click on a previous mood entry to edit it.
This enables users to correct accidental mood selections
without deleting the entire entry.

Closes #42
```

```
fix(calendar): prevent date selection outside entry dates

The calendar was allowing selection of dates beyond the
current day when creating new entries. Now restrict to
today and earlier dates only.
```

## Pull Request Process

1. **Before starting work:**
   - Check existing issues and pull requests to avoid duplicate work
   - Create a feature request issue if there's no existing discussion

2. **During development:**
   - Create a feature branch from `main`
   - Make focused, logical commits with clear messages
   - Keep your branch up to date with upstream:
     ```bash
     git fetch upstream
     git rebase upstream/main
     ```
   - Test your changes thoroughly in multiple browsers

3. **Before submitting a PR:**
   - Verify the application runs without errors
   - Test on desktop, tablet, and mobile views
   - Check that Local Storage operations work correctly
   - Verify no console errors or warnings
   - Update documentation if your changes affect user-facing features

4. **Submitting the PR:**
   - Push your branch to your fork
   - Create a pull request against the upstream `main` branch
   - Use the PR template and provide clear context
   - Link related issues with "Closes #123" in the description
   - Be open to feedback and engage in discussion

5. **PR Requirements:**
   - Clear, descriptive title and description
   - Focused on a single concern or feature
   - All code changes are related to the PR scope
   - Documentation is updated if applicable
   - Commits follow the commit message conventions
   - No merge conflicts with the target branch

## Testing Expectations

### Manual Testing

- Test your changes on at least two modern browsers
- Test responsive layouts at desktop (1920px), tablet (768px), and mobile (375px) widths
- Verify Local Storage operations:
  - Create, edit, and delete entries
  - Export and import data
  - Refresh page and verify data persists
- Test keyboard navigation and focus management
- Verify search, filters, and calendar interactions
- Check error handling and edge cases

### Functionality to Test

- Journal entry creation, editing, deletion
- Mood selection and tracking
- Calendar navigation and interaction
- Search functionality
- Filter combinations (date, month, mood, sort)
- Data export and import
- Responsive layout changes
- Browser back/forward navigation
- Local Storage limits and edge cases

### For Bug Fixes

- Include steps to reproduce the original issue
- Verify the fix actually resolves the problem
- Ensure no regressions in other features

### For New Features

- Thoroughly test the new functionality
- Test edge cases and error conditions
- Verify responsive design
- Check keyboard and screen reader accessibility

## Bug Reporting

Please use the [Bug Report Template](./ISSUE_TEMPLATE/bug_report.md).

**Good bug reports include:**

- Clear, descriptive title
- Detailed description of the unexpected behavior
- Exact steps to reproduce the issue
- Expected behavior vs. actual behavior
- Browser and OS information
- Screenshots or console errors if applicable
- Any relevant Local Storage state

## Feature Proposals

Please use the [Feature Request Template](./ISSUE_TEMPLATE/feature_request.md).

**Good feature proposals include:**

- Clear description of the problem to solve
- Explanation of how users would benefit
- Proposed solution or approach
- Optional screenshots, mockups, or examples
- Any alternative solutions considered

## Questions or Need Help?

- Check the [User Guide](./docs/USER_GUIDE.md) for application usage
- Review the [Architecture Documentation](./docs/ARCHITECTURE.md) for technical details
- Open a discussion issue for questions about contributing

Thank you for contributing to making Daylight better! 🌙
