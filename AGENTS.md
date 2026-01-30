# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js app router routes and pages (e.g., `about-us`, `pricing`, `case-studies`), `layout.tsx`, global styles in `globals.css`, SEO helpers (`sitemap.ts`, `robots.ts`).
- `components/`: Reusable UI primitives and composite blocks; prefer PascalCase filenames that mirror component names.
- `lib/`, `constants/`, `data/`: Domain helpers, shared configuration, and structured content sources; keep cross-cutting logic here instead of duplicating inside routes.
- `public/`: Static assets exposed as-is; keep exported images referenced with relative `/` paths.
- `docs/`, `mdx-components.tsx`: Documentation and MDX bindings; keep MDX-specific components scoped here.

## Build, Test, and Development Commands
- `pnpm dev` (or `npm run dev`): Start local Next.js dev server with Turbopack; updates reflect changes in `app/` and shared modules.
- `pnpm build`: Production build; run before tagging a release or deploying.
- `pnpm start`: Serve the production build locally for smoke-testing.
- `pnpm lint`: ESLint via Next; catches TypeScript/React issues and basic accessibility concerns.
- `pnpm format`: Prettier over the repo; run before opening PRs to avoid churn.

## Coding Style & Naming Conventions
- TypeScript-first; use functional React components and hooks. Co-locate component-specific styles or utility functions with the component when reasonable.
- Formatting: Prettier defaults (2-space indent, semicolons off by default); do not hand-tune spacing that conflicts with the formatter.
- Styling: TailwindCSS for layout/spacing; use `clsx`/`tailwind-merge` for conditional classes; keep utility class order logical (layout → spacing → color).
- Naming: Components and exported hooks in `PascalCase`/`camelCase`; route segments and asset files in `kebab-case` to match existing folders.
- Types: Prefer explicit prop types and narrow unions; avoid `any` unless necessary and documented.

## Testing Guidelines
- No automated test runner is currently wired. For new features, add targeted coverage (e.g., component tests or integration smoke tests) and document the command you introduce (e.g., `pnpm test`).
- Until a suite exists, rely on `pnpm lint`, manual QA in `pnpm dev`, and `pnpm start` against production builds for regressions.
- Name test files alongside sources with `.test.ts(x)` if you add a runner; keep fixtures small and deterministic.

## Commit & Pull Request Guidelines
- Commit history favors short, tagged summaries like `update: docs` or concise imperatives; match that style (`<verb>: <scope>`), keep bodies focused on rationale and side effects.
- PRs should describe scope, risks, and how to validate (commands run, screens checked). Link issues when applicable and attach screenshots for visual changes.
- Keep changesets scoped: one feature/fix per PR. Update docs or configuration in the same PR when behavior changes.

## Security & Configuration Tips
- Avoid committing secrets; prefer environment variables loaded via `.env.local` (untracked). Document required vars in PRs when new ones are introduced.
- Static assets should be optimized before landing; large media belongs in a CDN, referenced from `public/` only when small.
