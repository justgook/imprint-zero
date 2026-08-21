import assert from "node:assert/strict"
import test from "node:test"

import gettextRenderer, { parseGettext } from "../wiki-extensions/gettext.js"

const source = `msgid ""
msgstr ""
"Language: en\\n"
"X-Wiki-Title: Dialogue\\n"

#. Speaker: OPERATOR
#. Room: R01
#: missions/m01.md:R01
msgctxt "dialogue.m01.com01.l001"
msgid "First "
"line."
msgstr ""

#. Speaker: VECTOR
#. Room: R02
msgctxt "dialogue.m01.com02.l001"
msgid "Second line."
msgstr ""
`

test("parses gettext headers, metadata, and multiline source strings", () => {
    const catalogue = parseGettext(source)
    assert.equal(catalogue.headers.get("Language"), "en")
    assert.equal(catalogue.entries.length, 2)
    assert.equal(catalogue.entries[0].context, "dialogue.m01.com01.l001")
    assert.equal(catalogue.entries[0].id, "First line.")
    assert.deepEqual(catalogue.entries[0].references, ["missions/m01.md:R01"])
})

test("rejects duplicate stable contexts", () => {
    assert.throws(() => parseGettext(`${source}\n${source.split("\n\n").at(-1)}`), /duplicate msgctxt/)
})

test("rejects malformed directive structures", () => {
    assert.throws(() => parseGettext('msgid "One"\nmsgid "Two"\nmsgstr ""\n'), /duplicate msgid directive/)
    assert.throws(() => parseGettext('msgid "One"\n'), /missing msgstr/)
    assert.throws(() => parseGettext('msgid "One"\nmsgstr[1] "Many"\n'), /indexed msgstr requires msgid_plural/)
})

test("renders only the requested communication event", () => {
    const result = gettextRenderer.render({
        source,
        path: "content/game-text/dialogue.po",
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
        path: "content/game-text/ui.po",
        query: new URLSearchParams(),
        helpers,
    })
    assert.match(result.html, /Plural source/)
    assert.match(result.html, /\{count\} enemies/)
    assert.match(result.html, /Form 1/)
})
