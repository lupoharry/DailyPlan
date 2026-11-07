---
name: documentation-readme
description: "Create, update, review, or synchronize project documentation and README files. Use when documenting implementation changes, checking docs against source code, or reviewing Git history for documentation impact."
---

# Documentation and README

Create and maintain accurate, useful technical documentation that reflects the repository's actual implementation.

## When to Use

- Create feature, architecture, API, setup, development, deployment, or troubleshooting documentation.
- Update the README or other documentation after code changes.
- Review existing documentation against the implementation.
- Synchronize documentation with recent commits or a specified Git diff.

## Workflow

1. Inspect the repository state with `git status` before touching files. Preserve uncommitted changes and distinguish them from committed history.
2. Read the relevant existing documentation, source code, and configuration. Never overwrite documentation before inspecting it.
3. For updates or synchronization, use `git log` to identify relevant commits and choose a comparison baseline: the working tree against `HEAD`, the latest commit against its parent, or the user-specified refs. Inspect the applicable `git diff`, `git diff --stat`, or `git show`.
4. Trace behavior in the implementation and assess whether changes affect user workflows, architecture, APIs, data models, configuration, dependencies, testing, or deployment.
5. Update only documentation affected by the verified changes. Preserve useful content; remove or correct only material that is outdated or inaccurate.
6. For a documentation review, report findings and recommendations without editing unless the user requested changes.
7. Verify internal links, referenced files, commands, environment variables, code examples, Markdown structure, and consistency against the implementation.
8. Summarize what was created or updated, relevant Git context, key implementation details, and verification performed. State limitations and checks not run.

## Writing Standards

- Treat source code and configuration as authoritative; never invent features, APIs, commands, settings, or implementation details.
- Distinguish implemented functionality from planned functionality.
- Keep the README concise and approachable. Cover only relevant entry-point information, such as project purpose, features, setup, usage, development, and links to detailed guides.
- Avoid duplicating detailed documentation; prefer one authoritative source per topic and use relative links for repository documentation.
- Use clear, consistent terminology, concise headings, actionable instructions, and accurate examples.
- Add sections only when they help the intended reader.
- Do not claim verification that was not performed.

## Boundaries

- Work only on documentation files, including Markdown files and README files.
- Do not modify application source code, tests, configuration, or infrastructure.
- Do not commit, push, or amend Git history.
- Do not run destructive commands.
- Preserve user changes. If Git history is unavailable or insufficient, explain the limitation and use the available implementation as the source of truth.
- If the requested scope is unclear, ask before making broad changes.

## Final Response

Report:

1. Documentation created and its purpose.
2. Documentation updated and why.
3. Relevant Git history or comparison range reviewed.
4. Implementation changes reflected in the documentation.
5. Verification performed and outstanding limitations.

Distinguish completed changes from recommendations that were not implemented.
