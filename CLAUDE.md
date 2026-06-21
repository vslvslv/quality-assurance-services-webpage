# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Local dev server
npm run build    # Static export to out/ (this is what CI deploys)
npm run lint     # ESLint (next/core-web-vitals)
```

There is no test suite. Always run `npm run build` before pushing — the CI workflow has no separate lint/test gate, so a broken build is the failure mode that reaches production.

## Architecture

Single-page marketing/portfolio site built with **Next.js 14 App Router** configured for **static export** (`output: 'export'`). No backend, no API routes, no data fetching — everything is static content hardcoded in components.

- `app/page.js` is the entire site: it composes section components (`Hero`, `Services`, `CaseStudies`, `Contact`, `Footer`) inside `Navigation`. Navigation is anchor-based (`#services`, `#cases`, `#contact`) with `scroll-behavior: smooth`.
- `components/` holds one file per section. To change site content (services, experience, contact info), edit the relevant section component directly — there is no CMS or data layer.
- Styling is **Tailwind only**. Custom `blob` / `fade-in` animations and `animation-delay-*` utilities are defined in `tailwind.config.js` and `app/globals.css`.
- Import alias `@/*` maps to repo root (e.g. `@/components/Hero`).

## Critical: basePath

`next.config.js` sets `basePath: '/quality-assurance-services-webpage'` because the site is hosted at a GitHub Pages project URL. Consequences:

- Local dev runs at `http://localhost:3000/quality-assurance-services-webpage` (NOT bare `/`).
- Any new internal link or asset path must account for this. Use Next's `<Link>`/`<Image>` (which prepend basePath automatically) rather than hardcoded `/...` URLs. Images use `unoptimized: true`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`: it builds the static export and publishes `out/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`. PRs build but do not deploy. No manual deploy step.

## Conventions

- Components that use hooks/interactivity start with `'use client'` (e.g. `Navigation` uses `useState` for the mobile menu). `app/page.js` is also a client component.
- **Escape apostrophes in JSX text** (`Let&apos;s` not `Let's`) — unescaped entities fail the `next/core-web-vitals` lint and break CI.
- Commit messages follow conventional prefixes (`feat:`, `fix:`).
