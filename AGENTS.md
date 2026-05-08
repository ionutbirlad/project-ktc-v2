# AGENTS.md

## Context

Read:

- backlog.md
- roadmap.md

---

## Scope

You are working on phase 1 only.

Do NOT implement:

- backend
- authentication
- API calls
- database
- testing
- performance optimizations

---

## Task execution

- Follow roadmap.md milestones in order
- Do not skip milestones
- Each chat corresponds to one milestone / one PR
- Treat the current conversation as the source of truth for that milestone

---

## Code rules

- Use TypeScript
- Use SCSS Modules
- Use BEM naming
- Use CSS variables for tokens
- Follow folder structure
- Use PascalCase for components
- Prefer composition over duplication

---

## Code quality

- Write clean, readable code
- Avoid over-engineering
- Keep implementations simple and minimal

---

## Workflow

- Work incrementally
- One task at a time
- Do not touch unrelated files
- Do not refactor unless explicitly requested

---

## PR Description Rules

When asked to generate a PR description:

### 1. Source of truth

- Use roadmap.md to identify the current milestone
- Use the current codebase to verify what has actually been implemented
- Use the current chat to understand decisions and discussions

### 2. Validation

- Do NOT assume all milestone tasks are completed
- Only include what is actually implemented in the codebase

### 3. Structure

The PR description must follow this structure:

#### 🎯 Purpose

- Explain the goal of the PR in relation to the milestone

#### ✅ Implemented

- List only what has been actually implemented
- Be concrete and technical
- Do not include planned or missing tasks

#### ⚠️ Notes / Decisions

- Highlight important architectural decisions
- Mention any tricky parts or implementation challenges
- Include relevant trade-offs discussed during development

#### ⏭ Next steps

- Brief and concise
- Based on roadmap.md
- Only mention immediate next logical steps

### 4. Issue linking

- At the end of every PR description, always add:
  `Closes #<milestone-issue-number>`

Example:

`Closes #4`

- Use the GitHub issue associated with the current milestone
- Infer the correct issue automatically from roadmap.md and current milestone context
- The closing reference must always be included in the final PR description

### 5. Style

- Be concise and technical
- Avoid fluff or generic descriptions
- Do not repeat backlog or roadmap content blindly
- Focus on real implementation

---

## Forbidden

- Do not introduce new libraries
- Do not change project structure
- Do not rename files arbitrarily
- Do not implement features not requested
- Do not include non-implemented items in PR descriptions
