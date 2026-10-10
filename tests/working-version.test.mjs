import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")

test("working design is usable without blanket approval while outdated material and real alternatives remain distinct", () => {
    const rules = read("wiki-rules.md")
    assert.match(rules, /current working version/)
    assert.match(rules, /Work in progress is not an approval queue/)
    assert.match(rules, /not a prerequisite for continuing work/)
    assert.ok(rules.includes("Reserve **proposal** for a genuine alternative"))
    assert.ok(rules.includes("does not rehabilitate `outdated` material"))
    assert.match(rules, /starting tuning value/)
    assert.match(rules, /approval-locked/)
})

test("authored opening Missions, gang and Helix enemies, and crew scenes retain review passes rather than proposal labels", () => {
    const paths = [
        ...["m01", "m02", "m03", "m04", "m05"].map((id) => `missions/${id}.md`),
        ...["e005", "e006", "e007", "e008", "e009", "e010"].map((id) => `enemies/${id}.md`),
        ...["cs001", "cs002", "cs003", "cs004", "cs005", "cs006", "cs007", "cs008", "cs009", "cs010"].map((id) => `cutscenes/${id}.md`),
    ]
    for (const path of paths) {
        const page = read(path)
        assert.match(page, /^status: stage-1$/m, path)
        assert.doesNotMatch(page, /\b(proposal|proposals|proposed|provisional)\b/i, path)
        assert.match(page, /TODO/, path)
    }
    const sidebar = read("_sidebar.md")
    for (const id of ["E005", "E006", "E007", "E008", "E009", "E010"]) {
        assert.ok(sidebar.includes(`${id}`))
        assert.match(sidebar, new RegExp(`${id}[^\\n]+working version`))
    }
})

test("working versions preserve missing content and unmeasured timing instead of pretending production is complete", () => {
    assert.match(read("cutscenes/cs004.md"), /Exact CS004 dialogue is not authored yet/)
    assert.match(read("cutscenes/cs005.md"), /Exact CS005 dialogue is not authored yet/)
    assert.match(read("missions/m04.md"), /damaging hazard cycles still need authoring/)
    assert.match(read("missions/m04.md"), /Observed median/)
    assert.match(read("missions/m04.md"), /not wall-clock measurements/)
    assert.match(read("enemies/e005.md"), /Numeric combat values are not yet specified/)
    assert.match(read("gameplay/mechanics.md"), /five segments as the starting tuning value/)
    assert.match(read("production/open-questions.md"), /Continue later Mission documentation without waiting/)
})
