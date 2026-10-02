import assert from "node:assert/strict"
import { readFileSync, readdirSync } from "node:fs"
import test from "node:test"

import { parseGettext } from "../wiki-extensions/gettext.js"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const mission = read("missions/m02.md")
const m02Entries = (language) => parseGettext(read(`locale/${language}/dialogue.po`)).entries
    .filter((entry) => entry.id.startsWith("dialogue.m02."))

test("M02 game text has matching unique IDs in all configured catalogues", () => {
    const english = m02Entries("en")
    const expected = english.map((entry) => entry.id).sort()
    assert.equal(expected.length, 16)
    assert.equal(new Set(expected).size, expected.length)
    for (const entry of english) assert.ok(entry.translations.get(0), entry.id)

    for (const language of readdirSync(new URL("../locale/", import.meta.url))) {
        const entries = m02Entries(language)
        assert.deepEqual(entries.map((entry) => entry.id).sort(), expected, language)
        if (language !== "en") {
            for (const entry of entries) assert.notEqual(entry.translations.get(0), entry.id, `${language}: untranslated text must not masquerade as an ID-valued translation`)
        }
    }
})

test("M02 text deep links resolve to catalogue entry prefixes", () => {
    const entries = m02Entries("en")
    const prefixes = [...mission.matchAll(/(?:\?entry=)(dialogue\.m02[\w.]*)/g)].map((match) => match[1])
    assert.ok(prefixes.length >= 9)
    for (const prefix of prefixes) assert.ok(entries.some((entry) => entry.id.startsWith(prefix)), prefix)
})

test("M02 graph records linked Enemy counts with distinct content and communication styling", () => {
    assert.match(mission, /R02 -\.- C02\["\(1\)<a href='#\/enemies\/e003'>E003<\/a>"\]/)
    assert.match(mission, /R03 -\.- C03\["\(1\)<a href='#\/enemies\/e004'>E004<\/a>"\]/)
    assert.match(mission, /R04 -\.- C04\["\(1\)<a href='#\/enemies\/e003'>E003<\/a> · \(1\)<a href='#\/enemies\/e004'>E004<\/a>"\]/)
    assert.match(mission, /linkStyle 9,10 .*stroke-width:12px/)
    assert.match(mission, /linkStyle 11,12,13 .*stroke-width:2px/)
    for (const id of ["e003", "e004"]) assert.match(read(`enemies/${id}.md`), /^status: stage-1$/m)
    assert.match(mission, /^status: stage-1$/m)
})
