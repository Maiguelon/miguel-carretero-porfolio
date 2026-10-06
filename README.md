# Miguel Ángel Carretero — portfolio

Personal portfolio focused on product decisions, operations and AI-assisted tools.

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
