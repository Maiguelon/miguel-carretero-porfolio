# Miguel Ángel Carretero — portfolio

Personal portfolio focused on product decisions, operations and AI-assisted tools.

**Live site:** https://miguel-carretero-portfolio.miguel-carretero.workers.dev

The first release is in English and features two projects: **Gestor Aramis**, an adopted internal tool, and **Editorial Cockpit**, a functional AI workflow project. Spanish content and additional cases can be added later. Personal photography will follow the first release.

## Working plan

See [the implementation plan](docs/PLAN.md) for chunks, acceptance checks and progress, and [content sources](docs/CONTENT_SOURCES.md) for the evidence behind project claims.

Each meaningful completed chunk is verified and committed locally. Publication is tracked separately from a successful local build.

## Local development

Requires Node.js 22.12 or later. Tested with Node.js 24.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4321/. `npm run verify` checks types/content and produces the static site in `dist/`. `npm run preview` serves that build locally.

## Content

Profile links are in `src/data/profile.ts`. Cases are Markdown files under `src/content/projects/`; only entries with `published: true` appear in the site. Add real content and assets, then use the existing case structure for future projects.

Fonts are served locally. The first release needs no API keys, live AI calls or third-party contact form.

## Cloudflare hosting

The site is served as static assets on Cloudflare Workers. Configuration is in `wrangler.jsonc`; the server does not execute application code. The default origin in `astro.config.mjs` is the live `workers.dev` URL. Set `SITE_URL` when switching to a custom domain, then rebuild to update canonical URLs, the social preview, robots and sitemap.

```sh
npm run deploy
```

Deployment requires the existing Cloudflare login. This command validates and builds before publishing. Never add tokens or local credential files to the repository.

After deploying, run `npm run check:live` to validate public page status, canonical metadata, downloadable assets, sitemap and the custom 404 response. The checks use the current live origin or a `SITE_URL` override.

The downloadable English CV is Miguel's approved version from 2026-10-14, supplied as `../1Miguel_Carretero_CV_EN.pdf`. The shared résumé link includes a version derived from the PDF's content hash so updated links request the current file.
