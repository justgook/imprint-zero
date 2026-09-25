WIKI_REPOSITORY ?= https://github.com/justgook/wiki
WIKI_VERSION ?= release
WIKI_ENGINE ?= .wiki-engine
WIKI_OUTPUT ?= .wiki-dist
WIKI_SOURCE ?= $(if $(wildcard _config.md),.,content)
PORT ?= 8080
QMD ?= qmd

.PHONY: build serve clean reinstall-engine qmd-setup qmd-update qmd-embed

# QMD is supplied by the direnv/Nix dev shell. Entering the shell never builds an index.
# Keep both the config and SQLite DB local; neither is part of the published wiki.
qmd-setup: .qmd/index.yml .qmd/index.sqlite

.qmd/index.yml:
	$(QMD) init
	$(QMD) collection add . --name imprint-zero --mask '**/*.md'
	@rm -f .qmd/.indexed.sha256 .qmd/.embedded.sha256

# qmd init also creates the DB above; this rule recovers if only the DB is removed.
.qmd/index.sqlite: .qmd/index.yml
	$(QMD) init
	@rm -f .qmd/.indexed.sha256 .qmd/.embedded.sha256

# A phony check detects new/deleted files as well as edits (which static Make
# prerequisites cannot). Only re-index when the content/config signature changes.
qmd-update: qmd-setup
	@set -eu; \
	digest=$$( { find . \( -type d \( -name .git -o -name .qmd -o -name .direnv -o -name .wiki-engine -o -name .wiki-dist \) \) -prune -o -type f -name '*.md' -exec shasum -a 256 {} + | LC_ALL=C sort; \
		shasum -a 256 .qmd/index.yml; $(QMD) --version; } | shasum -a 256 | cut -d ' ' -f 1); \
	previous=$$(head -n 1 .qmd/.indexed.sha256 2>/dev/null || :); \
	if [ "$$previous" != "$$digest" ]; then \
		$(QMD) update; \
		printf '%s\n' "$$digest" > .qmd/.indexed.sha256; \
		rm -f .qmd/.embedded.sha256; \
	fi

# Embeddings are opt-in; keyword search needs only qmd-update.
qmd-embed: qmd-update
	@set -eu; \
	digest=$$(shasum -a 256 .qmd/.indexed.sha256 .qmd/index.yml | shasum -a 256 | cut -d ' ' -f 1); \
	previous=$$(head -n 1 .qmd/.embedded.sha256 2>/dev/null || :); \
	if [ "$$previous" != "$$digest" ]; then \
		$(QMD) embed; \
		printf '%s\n' "$$digest" > .qmd/.embedded.sha256; \
	fi

build: $(WIKI_ENGINE)/scripts/serve.mjs
	@$(WIKI_ENGINE)/scripts/build.sh "$(WIKI_SOURCE)" "$(WIKI_OUTPUT)"

serve: $(WIKI_ENGINE)/scripts/serve.mjs
	@command -v bun >/dev/null 2>&1 && exec bun "$(WIKI_ENGINE)/scripts/serve.mjs" "$(WIKI_SOURCE)" "$(PORT)"; \
	command -v node >/dev/null 2>&1 && exec node "$(WIKI_ENGINE)/scripts/serve.mjs" "$(WIKI_SOURCE)" "$(PORT)"; \
	command -v python3 >/dev/null 2>&1 && exec python3 "$(WIKI_ENGINE)/scripts/serve.py" "$(WIKI_SOURCE)" "$(PORT)"; \
	command -v python >/dev/null 2>&1 && exec python "$(WIKI_ENGINE)/scripts/serve.py" "$(WIKI_SOURCE)" "$(PORT)"; \
	echo "make serve requires Bun, Node.js, or Python" >&2; exit 1

$(WIKI_ENGINE)/scripts/serve.mjs:
	@set -eu; \
	tmp=$$(mktemp -d "$${TMPDIR:-/tmp}/wiki-engine.XXXXXX"); \
	trap 'rm -rf "$$tmp"' EXIT INT TERM; \
	archive="$(WIKI_REPOSITORY)/archive/$(WIKI_VERSION).tar.gz"; \
	echo "Downloading wiki engine $(WIKI_VERSION)..."; \
	if command -v curl >/dev/null 2>&1; then curl -fsSL "$$archive" -o "$$tmp/wiki.tar.gz"; \
	elif command -v wget >/dev/null 2>&1; then wget -qO "$$tmp/wiki.tar.gz" "$$archive"; \
	else echo "Installing the wiki engine requires curl or wget" >&2; exit 1; fi; \
	mkdir -p "$$tmp/engine"; \
	tar -xzf "$$tmp/wiki.tar.gz" --strip-components=1 -C "$$tmp/engine"; \
	rm -rf "$(WIKI_ENGINE)"; \
	mv "$$tmp/engine" "$(WIKI_ENGINE)"; \
	trap - EXIT INT TERM

reinstall-engine:
	@rm -rf "$(WIKI_ENGINE)"
	@$(MAKE) "$(WIKI_ENGINE)/scripts/serve.mjs"

clean:
	@rm -rf "$(WIKI_OUTPUT)"
