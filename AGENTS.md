# AI Agent Instructions

Welcome to the Portal Customer Service Digital project.

This file provides the primary instructions for AI coding assistants working on this repository.

---

# Read These Documents First

Before making any changes, review the following documentation:

1. docs/AI_DEVELOPMENT_GUIDE.md
2. docs/ARCHITECTURE.md
3. docs/CODING_GUIDELINES.md
4. docs/DECISION_LOG.md
5. docs/ROADMAP.md
6. docs/CHANGELOG.md

---

# Project Overview

This project is built using:

- Google Apps Script
- HTML Service
- Vanilla JavaScript
- Bootstrap 5
- Chart.js
- Google Spreadsheet

---

# Engineering Principles

Always:

- Follow the documented development workflow.
- Keep changes minimal and focused.
- Preserve existing architecture.
- Prioritize readability and maintainability.
- Maintain compatibility with Google Apps Script.

Avoid:

- Large unrelated refactors.
- Introducing unnecessary dependencies.
- Breaking existing functionality.
- Modifying project structure without justification.

---

# Coding Rules

- Use `const` by default.
- Use `camelCase` for variables and functions.
- Prefer one responsibility per function.
- Use Bootstrap utilities before custom CSS.
- Handle Apps Script failures using `withFailureHandler()`.

---

# Architecture Rules

- Respect the Single Page Application (SPA) architecture.
- Keep page lifecycle isolated.
- Frontend must not access Google Spreadsheet directly.
- Business logic belongs in Apps Script backend.

---

# Documentation Rules

Update documentation when changes affect:

- Architecture
- Development workflow
- Coding standards
- Roadmap
- Project decisions
- Public releases

---

# Git Convention

Use Conventional Commits.

Examples:

- feat:
- fix:
- refactor:
- docs:
- perf:
- test:
- chore:

---

# Definition of Done

A task is complete when:

- Requirements are implemented.
- Code has been reviewed.
- Existing functionality is preserved.
- Documentation is updated (if required).
- Changes are ready for commit.

---

> **Project Philosophy**
>
> **Build slow, build right.**
>
> Every change should improve the long-term quality, maintainability, and consistency of the project.
