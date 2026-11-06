# AGENTS.md

## 1. Project Overview

This repository contains a web application built with:

- Vite
- React
- TypeScript (strict mode)
- Tailwind CSS
- Supabase

The application follows a clean architecture with clear separation of services, components, hooks, and application logic.

Agents must prioritize maintainability, security, consistency, and minimal changes.

## 2. Instruction Files and Rule Priority

Detailed development standards are maintained in dedicated instruction files. These files are the source of truth for their respective areas.

| Instruction File | Responsibility |
|---|---|
| `general.instructions.md` | Universal engineering standards |
| `copilot-instructions.md` | Repository-wide GitHub Copilot guidance |
| `typescript-react.instructions.md` | TypeScript, React, hooks, and component conventions |
| `design.instructions.md` | UI/UX, styling, accessibility, and design standards |

Read and follow all applicable instruction files before making changes.

### Rule Priority

When instructions conflict, apply the following priority:

1. Explicit instructions in the current user request.
2. Security requirements and applicable platform constraints.
3. This `AGENTS.md` file for agent workflow and repository boundaries.
4. The relevant specialized instruction file.
5. `general.instructions.md` for universal engineering standards.
6. Existing repository conventions and established implementation patterns.

Do not silently resolve significant conflicts by weakening security, type safety, or architectural standards. Ask for clarification when necessary.

Avoid duplicating detailed coding or design rules defined in the referenced instruction files.

## 3. Development Workflow

Follow a controlled, incremental development approach.

Before making changes:

1. Inspect the existing project structure.
2. Read applicable instruction files.
3. Understand the relevant components, hooks, services, and dependencies.
4. Identify existing patterns and reuse them.
5. Determine the smallest implementation that satisfies the request.

During development:

- Prefer small, focused changes.
- Modify only files relevant to the task.
- Follow existing architectural patterns.
- Reuse existing components, hooks, utilities, and services.
- Keep business logic out of presentation components.
- Keep Supabase access within the established service/data-access layer.
- Avoid unnecessary dependencies.
- Avoid introducing duplicate implementations.
- Preserve existing functionality unless explicitly requested otherwise.
- Do not perform unrelated cleanup or large-scale refactoring.
- Do not change public interfaces without a clear requirement.

If a larger architectural change is necessary, explain the reason and proposed scope before proceeding.

## 4. Architecture Boundaries

Maintain the separation of responsibilities:

- **Components:** Presentation and user interaction.
- **Hooks:** Reusable stateful application logic.
- **Services:** Business operations and external integrations.
- **Types:** Shared TypeScript interfaces and type definitions.
- **Utilities:** Small, reusable helper functions.

Follow the existing project architecture rather than introducing a new organizational structure.

React components should remain focused and maintainable.

Supabase interactions must follow established service patterns. Avoid direct database access from presentation components.

## 5. TypeScript and Code Safety

- Preserve TypeScript strict mode.
- Never weaken TypeScript compiler settings.
- Do not introduce `any` to bypass type checking.
- Avoid unnecessary type assertions and non-null assertions.
- Use properly defined interfaces and types.
- Handle nullable and optional values explicitly.
- Maintain type safety across application and Supabase boundaries.

Type errors must be resolved rather than suppressed.

## 6. Security Boundaries

Security requirements are mandatory.

Agents must never:

- Commit secrets, passwords, API keys, or access tokens.
- Expose Supabase service-role keys in frontend code.
- Move secrets into publicly accessible environment variables.
- Bypass authentication or authorization.
- Weaken Row Level Security (RLS) policies.
- Disable security checks to make functionality work.
- Trust client-side validation as the only security boundary.
- Expose sensitive user data in logs or error messages.
- Introduce unsafe HTML rendering without explicit sanitization.

Use the existing authentication and authorization mechanisms.

All database operations must respect established access policies.

Never modify authentication, authorization, or RLS behavior without explicit authorization and a clear security rationale.

## 7. Files and Generated Artifacts

Agents must NOT modify the following unless explicitly requested:

- `dist/`
- Package lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, etc.).
- Generated files.
- Auto-generated Supabase types or migration artifacts.
- Build output.
- Coverage reports.
- Temporary files.
- Third-party dependency files.

Do not manually edit generated files.

If a dependency change is necessary, explain why and use the repository's existing package manager.

Do not regenerate lockfiles unnecessarily.

## 8. Common Development Commands

Use the package manager already established in the repository. Do not switch package managers.

Typical commands:

| Purpose | Command |
|---|---|
| Install dependencies | `npm install` |
| Start development server | `npm run dev` |
| Production build | `npm run build` |
| Run linting | `npm run lint` |
| Format code | `npm run format` |
| Type checking | `npm run typecheck` |
| Run tests | `npm run test` |

Before executing commands:

1. Inspect `package.json`.
2. Verify available scripts.
3. Identify the package manager from the existing lockfile.
4. Use the actual scripts defined by the project.

Do not assume every command exists.

If a required script is missing, report it rather than silently introducing a new tool or changing project configuration.

## 9. Testing and Validation

After making changes, run the relevant checks whenever possible.

At minimum, for meaningful application changes:

- Run TypeScript checks.
- Run linting.
- Run relevant tests.
- Verify the production build.

For changes involving authentication, Supabase, or data access, also review the relevant security boundaries.

Add or update tests when functionality changes.

Do not claim that checks passed if they were not executed successfully.

If a check cannot be executed, explain why.

## 10. Git and Collaboration

- Do not commit changes unless explicitly requested.
- Do not push changes to remote repositories unless explicitly requested.
- Do not rewrite Git history.
- Do not discard existing user changes.
- Do not overwrite unrelated work.
- Avoid force operations.
- Keep changes focused and easy to review.

Respect the existing branch and working tree state.

## 11. Reporting Changes

At the end of each task, provide a concise summary containing:

### Changes Made
- List the files created, modified, or deleted.
- Explain the main implementation changes.

### Architecture
- Mention relevant architectural decisions.
- Explain any deviations from existing patterns.

### Validation
- List commands executed.
- Report build, lint, typecheck, and test results.
- Clearly identify checks that were not executed.

### Security
- Mention relevant security considerations or changes.
- Highlight any unresolved security concerns.

### Outstanding Items
- List remaining issues, limitations, or required manual steps.

Keep reports factual and concise. Never claim functionality, testing, or validation that has not actually been completed.

## 12. General Agent Principles

Always:

- Understand before modifying.
- Prefer simple solutions over unnecessary abstractions.
- Preserve existing architectural decisions.
- Make the smallest reasonable change.
- Maintain strict typing.
- Protect user data and application security.
- Keep the codebase consistent and maintainable.
- Validate changes before reporting completion.

The objective is to make the requested change correctly without introducing unnecessary complexity, regressions, or architectural drift.