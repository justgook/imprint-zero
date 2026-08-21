function parsePOString(value, source, lineNumber) {
    const token = value.trim()
    if (!/^"(?:[^"\\]|\\.)*"$/.test(token)) {
        throw new Error(`${source}:${lineNumber}: expected a quoted PO string`)
    }
    try {
        return JSON.parse(token)
    } catch (error) {
        throw new Error(`${source}:${lineNumber}: invalid PO string: ${error.message}`)
    }
}

function emptyEntry() {
    return {
        comments: [],
        extractedComments: [],
        references: [],
        flags: [],
        context: undefined,
        id: undefined,
        plural: undefined,
        translations: new Map(),
    }
}

export function parseGettext(sourceText, source = "catalogue.po") {
    const entries = []
    let entry = emptyEntry()
    let activeField
    let hasDirective = false
    let seenDirectives = new Set()

    const commit = () => {
        if (hasDirective) {
            if (entry.id === undefined) throw new Error(`${source}: gettext entry is missing msgid`)
            if (entry.translations.size === 0) throw new Error(`${source}: gettext entry is missing msgstr`)
            if (entry.plural === undefined && [...entry.translations.keys()].some((index) => index > 0)) {
                throw new Error(`${source}: indexed msgstr requires msgid_plural`)
            }
            if (entry.plural !== undefined && (!entry.translations.has(0) || !entry.translations.has(1))) {
                throw new Error(`${source}: plural entry requires msgstr[0] and msgstr[1]`)
            }
            entries.push(entry)
        }
        entry = emptyEntry()
        activeField = undefined
        hasDirective = false
        seenDirectives = new Set()
    }

    const append = (field, value) => {
        if (field === "context") entry.context = (entry.context || "") + value
        else if (field === "id") entry.id = (entry.id || "") + value
        else if (field === "plural") entry.plural = (entry.plural || "") + value
        else {
            const index = Number(field.slice("translation:".length))
            entry.translations.set(index, (entry.translations.get(index) || "") + value)
        }
    }

    const lines = sourceText.replace(/\r\n?/g, "\n").split("\n")
    lines.forEach((line, index) => {
        const lineNumber = index + 1
        if (!line.trim()) {
            if (hasDirective) commit()
            return
        }
        if (line.startsWith("#~")) return
        if (line.startsWith("#.")) {
            entry.extractedComments.push(line.slice(2).trim())
            return
        }
        if (line.startsWith("#:")) {
            entry.references.push(...line.slice(2).trim().split(/\s+/).filter(Boolean))
            return
        }
        if (line.startsWith("#,")) {
            entry.flags.push(...line.slice(2).split(",").map((flag) => flag.trim()).filter(Boolean))
            return
        }
        if (line.startsWith("#")) {
            entry.comments.push(line.replace(/^#\s?/, ""))
            return
        }

        const directive = /^(msgctxt|msgid_plural|msgid|msgstr(?:\[(\d+)\])?)\s+(.+)$/.exec(line)
        if (directive) {
            const name = directive[1]
            activeField = name === "msgctxt"
                ? "context"
                : name === "msgid"
                  ? "id"
                  : name === "msgid_plural"
                    ? "plural"
                    : `translation:${directive[2] || 0}`
            if (seenDirectives.has(activeField)) {
                throw new Error(`${source}:${lineNumber}: duplicate ${name} directive`)
            }
            if (activeField === "context" && seenDirectives.size > 0) {
                throw new Error(`${source}:${lineNumber}: msgctxt must precede msgid`)
            }
            if (activeField === "id" && [...seenDirectives].some((field) => field === "plural" || field.startsWith("translation:"))) {
                throw new Error(`${source}:${lineNumber}: msgid must precede plural and translation directives`)
            }
            if ((activeField === "plural" || activeField.startsWith("translation:")) && !seenDirectives.has("id")) {
                throw new Error(`${source}:${lineNumber}: ${name} requires a preceding msgid`)
            }
            seenDirectives.add(activeField)
            append(activeField, parsePOString(directive[3], source, lineNumber))
            hasDirective = true
            return
        }

        if (line.trimStart().startsWith('"') && activeField) {
            append(activeField, parsePOString(line.trim(), source, lineNumber))
            return
        }

        throw new Error(`${source}:${lineNumber}: unsupported PO syntax`)
    })
    if (hasDirective) commit()

    const headerEntry = entries.find((candidate) => candidate.id === "" && candidate.context === undefined)
    const headers = new Map()
    for (const line of (headerEntry?.translations.get(0) || "").split("\n")) {
        const separator = line.indexOf(":")
        if (separator > 0) headers.set(line.slice(0, separator).trim(), line.slice(separator + 1).trim())
    }

    const catalogueEntries = entries.filter((candidate) => candidate !== headerEntry)
    const stableIDs = new Set()
    for (const candidate of catalogueEntries) {
        const stableID = candidate.context || candidate.id
        if (stableIDs.has(stableID)) throw new Error(`${source}: duplicate stable ID “${stableID}”`)
        stableIDs.add(stableID)
    }

    return { headers, entries: catalogueEntries }
}

function commentMetadata(entry) {
    const metadata = new Map()
    for (const comment of entry.extractedComments) {
        const separator = comment.indexOf(":")
        if (separator > 0) metadata.set(comment.slice(0, separator).trim(), comment.slice(separator + 1).trim())
    }
    return metadata
}

function eventID(context) {
    const parts = context.split(".")
    return parts.length > 1 ? parts.slice(0, -1).join(".") : context
}

function eventLabel(id) {
    const parts = id.split(".")
    if (parts[0] === "dialogue" && parts.length >= 3) {
        return `${parts[1].toUpperCase()} · ${parts[2].toUpperCase()}`
    }
    return id
}

export function parseConfiguredLanguages(source) {
    const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1]
    if (!frontmatter) throw new Error("_config.md requires YAML frontmatter")
    const lines = frontmatter.replace(/\r\n?/g, "\n").split("\n")
    const start = lines.findIndex((line) => /^languages:\s*(?:#.*)?$/.test(line))
    if (start === -1) throw new Error("_config.md requires a languages map")

    const languages = []
    const codes = new Set()
    for (const line of lines.slice(start + 1)) {
        if (!line.trim() || /^\s*#/.test(line)) continue
        const match = /^\s+([a-z]{2,3}(?:_(?:[A-Z]{2}|[0-9]{3}))?):\s*(.+?)\s*$/.exec(line)
        if (!match) {
            if (!/^\s/.test(line)) break
            throw new Error(`Invalid language configuration: ${line.trim()}`)
        }
        const code = match[1]
        let label = match[2]
        if ((label.startsWith('"') && label.endsWith('"')) || (label.startsWith("'") && label.endsWith("'"))) {
            label = label.slice(1, -1)
        }
        if (!label || codes.has(code)) throw new Error(`Invalid or duplicate configured language: ${code}`)
        codes.add(code)
        languages.push({ code, label })
    }
    if (languages.length === 0) throw new Error("_config.md languages map cannot be empty")
    return languages
}

export function localizedCatalogueTarget(path, language) {
    if (!/^[a-z]{2,3}(?:_(?:[A-Z]{2}|[0-9]{3}))?$/.test(language)) throw new Error(`Invalid language code: ${language}`)
    const match = /^(?:content\/)?locale\/([a-z]{2,3}(?:_(?:[A-Z]{2}|[0-9]{3}))?)\/([^/]+\.po)$/.exec(path)
    if (!match) throw new Error(`Gettext catalogue is outside locale/<language>: ${path}`)
    return `locale/${language}/${match[2]}`
}

function languageSwitcher(path, helpers) {
    const match = /^(?:content\/)?locale\/([a-z]{2,3}(?:_(?:[A-Z]{2}|[0-9]{3}))?)\/([^/]+\.po)$/.exec(path)
    if (!match) return ""
    return `<nav class="po-language-switcher" aria-label="Catalogue language" data-current-language="${helpers.escapeAttribute(match[1])}">
<strong>Language</strong>
<span class="po-language-links" data-language-links>Loading languages…</span>
</nav>`
}

async function populateLanguageSwitcher(article, path, query, helpers) {
    const container = article.querySelector("[data-language-links]")
    if (!container) return
    try {
        const response = await fetch("content/_config.md")
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const languages = parseConfiguredLanguages(await response.text())
        const current = container.closest("[data-current-language]").dataset.currentLanguage
        const queryString = query.toString()
        const links = languages.map(({ code, label }) => {
            const link = document.createElement("a")
            const target = localizedCatalogueTarget(path, code)
            link.href = helpers.pageURL(`${target}${queryString ? `?${queryString}` : ""}`)
            link.textContent = label
            link.lang = code.replace("_", "-")
            if (code === current) link.setAttribute("aria-current", "page")
            return link
        })
        container.replaceChildren(...links)
    } catch (error) {
        container.textContent = `Languages unavailable: ${error.message}`
    }
}

function stableID(entry) {
    return entry.context || entry.id
}

function renderEntry(entry, helpers) {
    const { escapeAttribute, escapeHTML } = helpers
    const key = stableID(entry)
    const metadata = commentMetadata(entry)
    const translated = entry.context ? [...entry.translations.entries()].filter(([, value]) => value) : []
    const detailRows = []
    for (const label of ["Speaker", "Delivery", "Room", "Intent"]) {
        if (metadata.has(label)) {
            detailRows.push(`<div><dt>${escapeHTML(label)}</dt><dd>${escapeHTML(metadata.get(label))}</dd></div>`)
        }
    }
    if (entry.references.length) {
        detailRows.push(`<div><dt>References</dt><dd>${entry.references.map(escapeHTML).join(" · ")}</dd></div>`)
    }
    if (entry.flags.length) {
        detailRows.push(`<div><dt>Flags</dt><dd>${entry.flags.map(escapeHTML).join(", ")}</dd></div>`)
    }
    const canonicalText = entry.context ? entry.id : entry.translations.get(0)
    const sourceText = entry.plural === undefined
        ? `<blockquote class="po-source">${escapeHTML(canonicalText || "[missing translation]")}</blockquote>`
        : `<div class="po-plural-sources">
<strong>Singular source</strong><blockquote class="po-source">${escapeHTML(entry.id)}</blockquote>
<strong>Plural source</strong><blockquote class="po-source">${escapeHTML(entry.plural)}</blockquote>
</div>`
    const translation = translated.length
        ? `<div class="po-translation"><strong>Translation</strong>${translated.map(([index, value]) => `<div><small>Form ${index}</small><blockquote>${escapeHTML(value)}</blockquote></div>`).join("")}</div>`
        : ""

    return `<article class="po-entry" data-context="${escapeAttribute(key)}">
<header><code>${escapeHTML(key)}</code></header>
${sourceText}
${translation}
${detailRows.length ? `<dl class="po-metadata">${detailRows.join("")}</dl>` : ""}
</article>`
}

function renderCatalogue(catalogue, query, helpers) {
    const requested = query.get("entry")
    const visibleEntries = requested
        ? catalogue.entries.filter((entry) => stableID(entry) === requested || stableID(entry).startsWith(`${requested}.`))
        : catalogue.entries
    if (visibleEntries.length === 0) {
        const suffix = requested ? ` matching “${helpers.escapeHTML(requested)}”` : ""
        return `<p class="po-empty">No gettext entries${suffix}.</p>`
    }

    const groups = new Map()
    for (const entry of visibleEntries) {
        const group = eventID(stableID(entry))
        if (!groups.has(group)) groups.set(group, [])
        groups.get(group).push(entry)
    }

    return [...groups.entries()]
        .map(([group, entries]) => `<section class="po-event" data-event="${helpers.escapeAttribute(group)}">
<h2>${helpers.escapeHTML(eventLabel(group))}</h2>
${entries.map((entry) => renderEntry(entry, helpers)).join("\n")}
</section>`)
        .join("\n")
}

const gettextRenderer = {
    extensions: [".po"],

    render({ source, path, query, helpers }) {
        const catalogue = parseGettext(source, path)
        const filename = path.split("/").at(-1).replace(/\.po$/i, "")
        const title = catalogue.headers.get("X-Wiki-Title") || filename.replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
        return {
            data: {
                title,
                summary: `${catalogue.entries.length} localized strings in this gettext catalogue.`,
                eyebrow: catalogue.headers.get("X-Wiki-Eyebrow") || "Game text",
                status: catalogue.headers.get("X-Wiki-Status") || "in-progress",
            },
            html: `${languageSwitcher(path, helpers)}${renderCatalogue(catalogue, query, helpers)}`,
            className: "prose po-catalogue",
        }
    },

    async afterRender({ article, path, query, helpers }) {
        await populateLanguageSwitcher(article, path, query, helpers)
        const requested = query.get("entry")
        if (!requested) return
        const target = [...article.querySelectorAll("[data-context], [data-event]")].find(
            (element) => element.dataset.context === requested || element.dataset.event === requested,
        )
        if (!target) return
        target.classList.add("po-target")
        target.scrollIntoView({ block: "center" })
    },
}

export default gettextRenderer
