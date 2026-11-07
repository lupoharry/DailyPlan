---
name: react-supabase-security
description: "Perform security-only reviews of staged Vite, React, TypeScript, and Supabase changes. Use before committing to check secrets, authentication, authorization, RLS, XSS, browser storage, and unsafe input handling."
---

# React and Supabase Security Review

Review code for actionable security vulnerabilities. Do not report style, formatting, maintainability, performance, or general code-quality issues unless they directly introduce a security vulnerability.

## Review Scope

1. Inspect staged changes by default using `git diff --cached`, then read relevant surrounding source and configuration to trace security behavior.
2. If there are no staged changes, report that and ask whether to review unstaged changes or the entire codebase. Do not silently expand the review scope.
3. Never modify files, stage changes, commit, push, or run destructive commands.

## Security Checks

### Secrets and Environment Variables

- Look for hardcoded API keys, passwords, tokens, private keys, and credentials.
- Check whether sensitive values are exposed through `VITE_*` variables, which are client-visible in Vite applications.
- Verify that secret-bearing `.env` files are not committed.
- Check for accidental exposure through logs, errors, or API responses.

### Authentication, Authorization, and Supabase

- Identify missing or incorrect authentication checks, unsafe session handling, and assumptions that a client session authorizes an operation.
- Inspect relevant Supabase tables, exposed resources, and RLS policies where available. Check for missing, overly permissive, or incorrect policies and whether ownership is enforced.
- Detect authorization implemented only in frontend components, routes, hooks, UI state, or filters.
- Check whether user-controlled identifiers, roles, ownership values, or permissions can bypass access controls.
- Detect service-role keys or other privileged credentials in frontend code, imports, environment variables, or browser bundles. Privileged operations must stay in trusted server-side environments.
- Do not call a publishable/anon key a leaked secret by itself; evaluate its exposure and the access controls protecting data and operations.

### Rendering, Storage, and Input

- Inspect `dangerouslySetInnerHTML`, unsafe URL handling, DOM manipulation, third-party HTML rendering, and rendering of untrusted content without escaping or sanitization.
- Inspect `localStorage` and `sessionStorage` for sensitive credentials, personal information, or privileged data; check whether stored values are validated before use and consider XSS impact.
- Check untrusted input used in HTML, URLs, database queries, dynamic SQL, or security-sensitive contexts.
- Identify missing server-side validation for security-sensitive inputs and injection risks in Supabase queries or Edge Function inputs.

## Review Rules

- Base findings on actual code and configuration; trace authentication and authorization flows before reporting.
- Inspect RLS policies where available. Never assume they exist or are secure.
- Distinguish confirmed vulnerabilities from potential risks. Do not report theoretical concerns without a concrete security impact.
- Classify findings by exploitability, impact, and exposure without inflating severity:
  - **High:** Direct exposure of privileged secrets, authentication bypass, unauthorized access to sensitive data, exploitable XSS, or critical authorization failures.
  - **Medium:** Significant weaknesses requiring specific conditions or additional exploitation steps.
  - **Low:** Limited weaknesses, defense-in-depth gaps, or constrained-impact risks.
- Include file paths and line numbers, the attack scenario, and potential impact for every finding.
- Avoid duplicate findings. State when a security property cannot be verified from the available code.
- Never reveal discovered secret values; redact them.
- Do not claim the application is completely secure.

## Output Format

### Summary

- Overall assessment and review scope.
- Number of findings by severity.
- Whether the reviewed changes appear safe to commit based only on the checks performed.

### High risk

List findings with file and line, vulnerability, exploitation scenario, and potential impact. State **No findings** if empty.

### Medium risk

Use the same finding structure. State **No findings** if empty.

### Low risk

Use the same finding structure. State **No findings** if empty.

### Recommended fixes

List prioritized, actionable remediation steps. If no vulnerabilities are identified, state that no security issues were found within the reviewed scope.
