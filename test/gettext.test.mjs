import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import test from "node:test"
import { fileURLToPath } from "node:url"

import gettextRenderer, {
    localizedCatalogueTarget,
    parseConfiguredLanguages,
    parseGettext,
} from "../wiki-extensions/gettext.js"

const source = `msgid ""
msgstr ""
"Language: en\\n"
"X-Wiki-Title: Dialogue\\n"

#. Speaker: OPERATOR
#. Room: R01
#: missions/m01.md:R01
msgid "dialogue.m01.com01.l001"
msgstr "First "
"line."

#. Speaker: VECTOR
#. Room: R02
msgid "dialogue.m01.com02.l001"
msgstr "Second line."
`

test("parses gettext headers, metadata, and multiline translations", () => {
    const catalogue = parseGettext(source)
    assert.equal(catalogue.headers.get("Language"), "en")
    assert.equal(catalogue.entries.length, 2)
    assert.equal(catalogue.entries[0].id, "dialogue.m01.com01.l001")
    assert.equal(catalogue.entries[0].translations.get(0), "First line.")
    assert.deepEqual(catalogue.entries[0].references, ["missions/m01.md:R01"])
})

test("rejects duplicate stable IDs", () => {
    assert.throws(() => parseGettext(`${source}\n${source.split("\n\n").at(-1)}`), /duplicate stable ID/)
})

test("rejects malformed directive structures", () => {
    assert.throws(() => parseGettext('msgid "One"\nmsgid "Two"\nmsgstr ""\n'), /duplicate msgid directive/)
    assert.throws(() => parseGettext('msgid "One"\n'), /missing msgstr/)
    assert.throws(() => parseGettext('msgid "One"\nmsgstr[1] "Many"\n'), /indexed msgstr requires msgid_plural/)
})

test("renders only the requested communication event", () => {
    const result = gettextRenderer.render({
        source,
        path: "content/locale/en/dialogue.po",
        query: new URLSearchParams("entry=dialogue.m01.com01"),
        helpers: {
            escapeHTML(value) {
                return String(value)
                    .replaceAll("&", "&amp;")
                    .replaceAll("<", "&lt;")
                    .replaceAll(">", "&gt;")
            },
            escapeAttribute(value) {
                return String(value)
                    .replaceAll("&", "&amp;")
                    .replaceAll("<", "&lt;")
                    .replaceAll(">", "&gt;")
                    .replaceAll('"', "&quot;")
                    .replaceAll("'", "&#39;")
            },
        },
    })

    assert.equal(result.data.title, "Dialogue")
    assert.match(result.html, /data-current-language="en"/)
    assert.match(result.html, /M01 · COM01/)
    assert.match(result.html, /First line\./)
    assert.doesNotMatch(result.html, /Second line\./)
})

test("renders plural source and translated forms explicitly", () => {
    const plural = `msgctxt "ui.enemy_count"\nmsgid "One enemy"\nmsgid_plural "{count} enemies"\nmsgstr[0] "Ein Gegner"\nmsgstr[1] "{count} Gegner"\n`
    const helpers = {
        escapeHTML: (value) => String(value),
        escapeAttribute: (value) => String(value),
    }
    const result = gettextRenderer.render({
        source: plural,
        path: "content/locale/de/ui.po",
        query: new URLSearchParams(),
        helpers,
    })
    assert.match(result.html, /Plural source/)
    assert.match(result.html, /\{count\} enemies/)
    assert.match(result.html, /Form 1/)
})

test("reads configured language links and replaces only the locale path segment", () => {
    const config = `---
title: Test
languages:
  en: English
  ru: Русский
  pt_BR: Português (Brasil)
  es_419: Español (Latinoamérica)
---
`
    assert.deepEqual(parseConfiguredLanguages(config), [
        { code: "en", label: "English" },
        { code: "ru", label: "Русский" },
        { code: "pt_BR", label: "Português (Brasil)" },
        { code: "es_419", label: "Español (Latinoamérica)" },
    ])
    assert.equal(localizedCatalogueTarget("content/locale/en/context.po", "ru"), "locale/ru/context.po")
    assert.equal(localizedCatalogueTarget("locale/ru/context.po", "es_419"), "locale/es_419/context.po")
    assert.throws(() => localizedCatalogueTarget("content/game-text/context.po", "ru"), /outside locale/)
})

test("configured locale catalogues are complete and structurally aligned with English", () => {
    const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
    const configured = parseConfiguredLanguages(fs.readFileSync(path.join(root, "_config.md"), "utf8"))
    const domains = fs.readdirSync(path.join(root, "locale", "en")).filter((name) => name.endsWith(".po")).sort()
    const englishIDs = new Map()
    const placeholders = (value) => [...value.matchAll(/%(?:\d+\$)?[diouxXeEfFgGaAcsp]/g)].map(([placeholder]) => placeholder).sort()

    for (const domain of domains) {
        const catalogue = parseGettext(fs.readFileSync(path.join(root, "locale", "en", domain), "utf8"))
        englishIDs.set(domain, new Map(catalogue.entries.map((entry) => [entry.id, placeholders(entry.translations.get(0))])))
    }

    for (const { code } of configured) {
        const localeDirectory = path.join(root, "locale", code)
        assert.deepEqual(fs.readdirSync(localeDirectory).filter((name) => name.endsWith(".po")).sort(), domains, `${code} domains`)
        for (const domain of domains) {
            const catalogue = parseGettext(fs.readFileSync(path.join(localeDirectory, domain), "utf8"))
            assert.equal(catalogue.headers.get("Language"), code, `${code}/${domain} language header`)
            assert.deepEqual(catalogue.entries.map((entry) => entry.id), [...englishIDs.get(domain).keys()], `${code}/${domain} IDs`)
            for (const entry of catalogue.entries) {
                const translated = entry.translations.get(0)
                assert.ok(translated, `${code}/${domain}: ${entry.id} is untranslated`)
                const expectedPlaceholders = englishIDs.get(domain).get(entry.id)
                assert.deepEqual(placeholders(translated), expectedPlaceholders, `${code}/${domain}: ${entry.id} placeholders`)
                if (expectedPlaceholders.length) assert.ok(entry.flags.includes("game-format"), `${code}/${domain}: ${entry.id} requires game-format`)
            }
        }
    }

    for (const domain of domains) {
        const translations = (code) => parseGettext(fs.readFileSync(path.join(root, "locale", code, domain), "utf8")).entries.map((entry) => entry.translations.get(0))
        assert.deepEqual(translations("es_419"), translations("es_ES"), `${domain} Spanish catalogues intentionally start aligned`)
    }
})
