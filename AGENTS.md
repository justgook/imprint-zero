---
title: Agent search workflow
summary: Local QMD commands for finding and verifying Imprint Zero design rules.
status: reference
---

# Searching this repository

The Markdown files are the source of truth. Use QMD as a *discovery tool*, then read the relevant source lines before making claims or editing. The index is local to each checkout (`.qmd/`, gitignored), not published or committed.

1. If `qmd` is not on PATH, use `nix develop -c <command>`; the Nix/direnv shell supplies QMD but does not create an index on entry.
2. Before relying on search, run `make qmd-update` (or `nix develop -c make qmd-update`). It creates the index if missing and refreshes changed, added, or deleted Markdown; repeated unchanged runs are cheap.
3. Start with a small, scoped keyword search: `qmd search 'Machine Blueprint' -c imprint-zero --json -n 5`. For concepts that lack exact terminology, run `make qmd-embed` once, then `qmd vsearch 'how is machine research unlocked?' -c imprint-zero --json -n 5`. For ambiguous questions, use `qmd query 'when is equipment unlocked?' --intent 'Imprint Zero game rules: machine vs output blueprints' -c imprint-zero --json -n 5`. Query expansion/reranking is slower than keyword search.
4. Read only promising passages: `qmd get 'qmd://imprint-zero/gameplay/blueprints.md:40:25'`. Follow linked pages where ownership is delegated. Cite the actual file and section, not the search snippet; `CONTEXT.md` is a useful terminology map, not a substitute for the owning page.
5. After modifying Markdown, run `make qmd-update` again. Use `make qmd-embed` if you need semantic results refreshed. Do not trigger model downloads or embeddings just to perform a keyword lookup.

Search result scores are relevance estimates, **not** evidence that a rule is accepted or current. Check each page's status and accepted decisions, and cross-check conflicting results. If QMD is unavailable, use normal file search (`rg`) and direct reads rather than blocking work.

# Commits during wiki cleanup

Commit each coherent, validated write pass when it is ready to stand on its own. Use `emoji(context): what was done` (for example, `📝(imprints): define Act II biome memories`). Stage only files belonging to that pass; leave unrelated working-tree changes untouched. Keep `CONTEXT.md` for domain language and relationships, not repository workflow instructions.
