import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const source = read("missions/ma01.md")
const graph = /```mermaid\n([\s\S]*?)```/.exec(source)[1]
const edges = graph.split("\n").filter((line) => / -->| -\.-/.test(line))
const seconds = (value) => value.split(":").map(Number).reduce((minutes, part) => minutes * 60 + part, 0)

test("MA01 Stage-1 defines an all-kit Act II route and finite Enemy-owned placements", () => {
    assert.match(source, /^status: stage-1$/m)
    assert.match(source, /^act: 2$/m)
    assert.match(source, /not a mandatory first choice/)
    assert.match(source, /Every unlocked configuration can complete the required route/)
    assert.match(source, /no compulsory Hack, Breach, Wall Climb, Slide, Overdrive or companion/)
    const rooms = [...graph.matchAll(/\b(R\d{2})\["\1 ·/g)].map((match) => match[1])
    assert.deepEqual(rooms, Array.from({ length: 8 }, (_, i) => `R0${i + 1}`))
    const placements = [...graph.matchAll(/\((\d+)\)<a href='#\/enemies\/(e\d{3})'>(E\d{3})<\/a>/g)]
    assert.deepEqual(placements.map((match) => Number(match[1])), [1, 2, 2, 3])
    assert.equal(placements.reduce((sum, match) => sum + Number(match[1]), 0), 8)
    for (const [, , file, id] of placements) {
        assert.equal(file.toUpperCase(), id)
        assert.ok(existsSync(new URL(`../enemies/${file}.md`, import.meta.url)))
    }
    assert.match(source, /starting tuning values, not a simultaneous-threat quota/)
    assert.match(source, /Cleared actors do not respawn/)
    assert.match(source, /No Boss, endless defence, timer, escort bar/)
    assert.match(source, /E011 has no allocated Blueprint drop table yet/)
    assert.match(read("enemies/e011.md"), /one shared B03 archetype/)
    assert.match(read("enemies/e011.md"), /not blanket invulnerability or a rear-only puzzle/)
    assert.match(read("missions/m05.md"), /E011 — Archive Sentry/)
    assert.match(read("missions/m05.md"), /rather than importing MA01's room counts/)
})

test("MA01's Null recorder and hidden transit control are independent universal optional discoveries", () => {
    assert.match(graph, /R04 --> O01/)
    assert.match(graph, /O01 --> R04/)
    assert.match(graph, /R05 --> O02/)
    assert.match(graph, /O02 --> O03/)
    assert.match(graph, /O03 --> O02/)
    assert.match(graph, /O02 --> R05/)
    assert.match(graph, /O01 -\.- CO1\["\(1\)<a href='#\/imprints\/relay-null'>/)
    assert.match(source, /requires neither RELAY nor combat Access/)
    assert.match(source, /without a marker/)
    assert.match(source, /Collecting directly registers Null/)
    assert.match(source, /It does not switch the deployed Character/)
    assert.match(source, /Already registered rewards survive death/)
    assert.match(source, /collecting Null does not set it/)
    assert.match(source, /failed MA01 run discards this uncommitted local condition/)
    assert.match(source, /explicit successful extraction commits it/)
    assert.match(source, /later failure cannot relock MS01/)
    assert.match(source, /Optional path — Verdant Null/)
    assert.match(source, /B03 biome Memory Imprint is on/)
    assert.match(source, /not a second MA01 collectible/)
    assert.match(source, /low-jump RAM and all default configurations/)
})

test("MA01's scenes separate perspective evidence from an optional Specialization grant", () => {
    const catalogue = read("cutscenes/overview.md")
    const sidebar = read("_sidebar.md")
    for (const [id, duration, room] of [["CS011", 40, "R06"], ["CS012", 30, "O01"]]) {
        const scene = read(`cutscenes/${id.toLowerCase()}.md`)
        assert.match(scene, new RegExp(`^id: ${id}$`, "m"))
        assert.match(scene, /^type: cutscene$/m)
        assert.match(scene, /^status: stage-1$/m)
        assert.match(scene, new RegExp(`^duration_target_seconds: ${duration}$`, "m"))
        assert.match(graph, new RegExp(`${room} --> ${id}\\[\\[`))
        assert.ok(graph.includes(`click ${id} href "#/cutscenes/${id.toLowerCase()}"`))
        assert.ok(catalogue.includes(`Cutscenes/${id}|${id}`))
        assert.ok(sidebar.includes(`Cutscenes/${id}|${id}`))
        assert.doesNotMatch(scene, /locale\/[^\s]+\?entry=/)
    }
    const childhood = read("cutscenes/cs011.md")
    for (const name of ["ROOK", "VECTOR", "RAM", "RELAY"]) assert.match(childhood, new RegExp(`\\| ${name} \\|`))
    assert.match(childhood, /Specialization does not change the scene/)
    assert.match(childhood, /One variant plays per run/)
    assert.match(childhood, /whether the scene is completed or skipped/)
    assert.match(childhood, /no perspective is labeled original|without identifying an original owner/)
    assert.match(childhood, /not assigned historical bodies/)
    const imprint = read("imprints/relay-null.md")
    assert.match(imprint, /CS012 — RELAY Null Memory/)
    assert.doesNotMatch(imprint, /!\[/, "Scene page owns presentation, Imprint retains payload")
    assert.match(imprint, /RELAY deliberately infects a connected recording sentry/)
    assert.match(read("cutscenes/cs012.md"), /Watched and skipped playback commit the same acquisition/)
    assert.match(read("cutscenes/cs012.md"), /no change|same deployed Character, Specialization and loadout/)
    assert.match(source, /Viewing history from a prior campaign never substitutes/)
})

test("MA01 accounts required, optional and paused timing without measuring targets as facts", () => {
    const graphTimes = [...graph.matchAll(/\b(R\d{2})\["\1 ·[^\n]*? · (\d+:\d{2})<br\/>/g)]
    assert.equal(graphTimes.length, 8)
    const times = [...source.matchAll(/^\| (R\d{2}) \| (\d+:\d{2}) \| — \| — \|$/gm)]
    assert.deepEqual(times.map((m) => [m[1], m[2]]), graphTimes.map((m) => [m[1], m[2]]))
    assert.equal(times.reduce((sum, m) => sum + seconds(m[2]), 0), 720)
    assert.match(source, /Required route including unskipped scene\*\* \| \*\*12:40/)
    assert.equal(720 + 40 + 45 + 30 + 120, seconds("15:55"))
    assert.match(source, /whole-run medians|Whole-run medians/)
    assert.match(source, /No post-extraction Cutscene is allocated/)
    assert.match(source, /Direct continuation preserves Character, Specialization and Equipment/)
    assert.match(source, /No automatic departure or full-campaign Mission list/)
    assert.match(source, /previous evidence or Imprint ownership never substitutes for current-run required controls/)
})

test("MA01 graph uses actual edge-order styles for scenes, COM and per-room content", () => {
    assert.equal(edges.length, 24)
    const styles = [...graph.matchAll(/linkStyle ([\d,]+) ([^\n]+)/g)]
    assert.equal(styles.length, 3)
    const expected = [
        [/ --> CS\d+/, /stroke-width:1px;/, 2],
        [/ -\.- COM\d+/, /stroke-width:12px,stroke-dasharray:1 22/, 4],
        [/ -\.- C(?:\d+|O1)/, /stroke-width:2px,stroke-dasharray:7 5/, 5],
    ]
    styles.forEach(([, indices, style], i) => {
        const chosen = indices.split(",").map(Number)
        assert.equal(chosen.length, expected[i][2])
        assert.match(style, expected[i][1])
        for (const index of chosen) assert.match(edges[index], expected[i][0])
    })
})

test("MA01 has dedicated spatial, composition, Enemy and scene handoff images", () => {
    const paths = [
        ["missions/ma01.md", "images/missions/ma01-minimap.svg"],
        ["missions/ma01.md", "images/missions/ma01-layout.svg"],
        ["missions/ma01.md", "images/missions/ma01-concept.svg"],
        ["enemies/e011.md", "images/enemies/e011.svg"],
        ["cutscenes/cs011.md", "images/cutscenes/cs011-storyboard.svg"],
        ["cutscenes/cs012.md", "images/imprints/relay-null-storyboard.svg"],
    ]
    const registry = read("production/asset-registry.md")
    for (const [owner, asset] of paths) {
        assert.ok(read(owner).includes(`content/${asset}`))
        assert.match(read(asset), /<svg\b/)
        if (asset.endsWith("relay-null-storyboard.svg")) assert.match(read(asset), /RELAY · NULL IMPRINT · STORYBOARD PLACEHOLDER/)
        else assert.match(read(asset), /<title>/)
        assert.ok(registry.includes(asset.split("/").at(-1)))
    }
})
