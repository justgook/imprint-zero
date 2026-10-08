import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const mission = read("missions/m01.md")
const scene = read("cutscenes/cs003.md")
const graph = /\x60\x60\x60mermaid\n([\s\S]*?)\x60\x60\x60/.exec(mission)[1]
const seconds = (value) => {
    const [minutes, remainder] = value.split(":").map(Number)
    return minutes * 60 + remainder
}

test("VECTOR introduction follows M01 without renumbering existing scene identities", () => {
    assert.match(scene, /^id: CS003$/m)
    assert.match(scene, /^type: cutscene$/m)
    assert.match(scene, /After \[\[Missions\/M01/)
    assert.match(scene, /before ordinary Hub preparation and M02 selection/)
    assert.match(read("missions/hub0.md"), /Cutscenes\/CS003/)
    for (const path of ["_sidebar.md", "cutscenes/overview.md"]) {
        const source = read(path)
        assert.ok(source.indexOf("[[Cutscenes/CS003|") < source.indexOf("[[Cutscenes/CS001|"), path)
        assert.ok(source.indexOf("[[Cutscenes/CS001|") < source.indexOf("[[Cutscenes/CS002|"), path)
    }
    assert.match(read("cutscenes/cs001.md"), /^id: CS001$/m)
    assert.match(read("cutscenes/cs002.md"), /^id: CS002$/m)
    const asset = /content\/(images\/[^)]+)/.exec(scene)[1]
    assert.ok(existsSync(new URL(`../${decodeURIComponent(asset)}`, import.meta.url)))
})

test("M01 cutscene graph styling and timing remain separate from room traversal", () => {
    assert.match(graph, /R07 -->\|After extraction\| CS003\[\[/)
    assert.match(graph, /click CS003 href "#\/cutscenes\/cs003"/)
    const edges = graph.split("\n").filter((line) => / -->| -\.- /.test(line))
    for (const match of graph.matchAll(/linkStyle ([\d,]+) .*stroke-width:(\d+)px/g)) {
        const expected = match[2] === "1" ? / -->.*CS003/ : match[2] === "12" ? /-\.- COM\d+/ : /-\.- R\d+EN/
        for (const index of match[1].split(",").map(Number)) assert.match(edges[index], expected)
    }
    const target = Number(/^duration_target_seconds: (\d+)$/m.exec(scene)[1])
    assert.equal(seconds(/CS003\[\[[^\n]*?\+(\d+:\d+) target/.exec(graph)[1]), target)
    assert.equal(seconds(/Cutscenes\/CS003\|CS003\]\] first-Hub introduction \| \+(\d+:\d+)/.exec(mission)[1]), target)
    const active = seconds(/\*\*Critical-path total\*\* \| \*\*(\d+:\d+)/.exec(mission)[1])
    const sequence = seconds(/\*\*M01 sequence including post-Mission scene\*\* \| \*\*(\d+:\d+)/.exec(mission)[1])
    assert.equal(sequence, active + target)
})
