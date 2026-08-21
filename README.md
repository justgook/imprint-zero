# Imprint Zero Wiki

Living game-design document and production knowledge base for **Imprint Zero**, authored as plain Markdown and published with the [Wiki engine](https://github.com/justgook/wiki).

## Local development

```sh
make serve
```

Open <http://localhost:8080>. Refresh the browser to see Markdown, image, configuration, or CSS changes without rebuilding or restarting the server.

To assemble the publishable static site locally:

```sh
make build
```

The result is written to `.wiki-dist/`.

## Content

The repository root is the wiki content root:

- `_config.md` — title, description, and home page
- `_sidebar.md` — navigation
- `custom.css` and `favicon.svg` — project branding
- Markdown files and directories — design and production documents
- `wiki/` — local wiki-engine usage and authoring reference

## Publishing

Pushing the `release` branch runs `.github/workflows/pages.yml`. The workflow uses `justgook/wiki` to assemble the content and deploy it to GitHub Pages. The engine runtime is downloaded during local development or CI and is not stored in this repository.
