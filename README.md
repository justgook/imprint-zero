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

## Private search (people and AI agents)

[QMD](https://github.com/tobi/qmd) is an optional local search tool for the Markdown source, **not** search for visitors to the published site. Install Nix with flakes and [direnv](https://direnv.net/), then from this repository:

```sh
direnv allow                 # once per checkout; loads qmd into your shell
make qmd-update             # creates .qmd/ on first run, then indexes changed files
qmd search 'Blueprint fragments' -c imprint-zero -n 5
qmd get 'qmd://imprint-zero/gameplay/blueprints.md:40:25'
```

If you don't use direnv, run commands with `nix develop -c make qmd-update` and `nix develop -c qmd search 'Blueprint fragments' -n 5`. Entering the dev shell **never** builds or updates the index. Run `make qmd-update` after edits, additions, or deletions; unchanged content is skipped. Keyword search needs no models.

For natural-language questions, opt in to downloading QMD's local models and building vector embeddings (the first run takes longer):

```sh
make qmd-embed              # updates the index first; subsequent unchanged runs skip work
qmd vsearch 'how is research unlocked?' -c imprint-zero -n 5
qmd query 'when do Machine Blueprints unlock Equipment?' \
  --intent 'Imprint Zero game-design rules: distinguish Machine and Output Blueprints' \
  -c imprint-zero -n 5
```

For agents, use `--json -n 5` on searches, inspect returned paths and lines, and retrieve **only** relevant sections with `qmd get 'qmd://imprint-zero/path/to/page.md:LINE:COUNT'`; verify claims against the source. `qmd search` is fast keyword search; `qmd vsearch` uses embeddings; `qmd query` expands the question and reranks results (slower, but better for ambiguous questions). `--intent` disambiguates the question; it does not search on its own. See [AGENTS.md](AGENTS.md) for the agent workflow.

The index, config, and update stamps live in ignored `.qmd/`; model downloads live in your user cache. `make build` and `make serve` do not need QMD. If search fails, run `qmd status` and refresh with `make qmd-update` (or `make qmd-embed` for semantic results).

## Content

The repository root is the wiki content root:

- `_config.md` — title, description, and home page
- `_sidebar.md` — navigation
- `custom.css` and `favicon.svg` — project branding
- Markdown files and directories — design and production documents
- `wiki/` — local wiki-engine usage and authoring reference

## Publishing

Pushing the `release` branch runs `.github/workflows/pages.yml`. The workflow uses `justgook/wiki` to assemble the content and deploy it to GitHub Pages. The engine runtime is downloaded during local development or CI and is not stored in this repository.
