import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import test from "node:test"

const source = readFileSync(new URL("../missions/m05.md", import.meta.url), "utf8")
const graph = /```mermaid\n([\s\S]*?)```/.exec(source)[1]
const edges = graph.split("\n").filter((line) => / -->| -\.-/.test(line))

test("M05 attaches ten authored COM families without inventing gettext entries or duplicating memory dialogue", () => {
    const ids = [...graph.matchAll(/(COM\d{2})\(\["/g)].map((match) => match[1])
    assert.deepEqual(ids, Array.from({ length: 10 }, (_, i) => `COM${String(i + 1).padStart(2, "0")}`))
    for (const id of ids) {
        assert.match(source, new RegExp(`\\| ${id} \\|`), `${id} has trigger/intent prose`)
    }
    for (const room of ["R04", "R06", "R08", "R09"]) {
        assert.match(graph, new RegExp(`${room} -\\.- COM10`))
    }
    assert.match(source, /first convergence in any order introduces Overdrive/)
    assert.match(source, /Essential instructions remain available after scene skip/)
    assert.match(source, /not additional paused Cutscenes or duplicate memory dialogue/)
    assert.match(source, /after the explicit core commit/)
    assert.doesNotMatch(graph, /locale\/[^\s]+\?entry=/)
})

test("M05 owns finite phase-separated Helix encounters in trial rooms only", () => {
    const content = [...graph.matchAll(/\b(C\d{2})\["([\s\S]*?)"\]/g)]
    assert.deepEqual(content.map((match) => match[1]), ["C04", "C06", "C08", "C10"])
    const counts = { E008: 0, E009: 0, E010: 0 }
    for (const [, id, label] of content) {
        const room = id.replace("C", "R")
        assert.match(graph, new RegExp(`${room} -\\.- ${id}`))
        assert.match(label, /Finish:/)
        if (room === "R10") assert.doesNotMatch(label, /Opening:/)
        else assert.match(label, /Opening:.*<br\/>Finish:/)
        for (const [, count, page, enemy] of label.matchAll(/\((\d+)\)<a href='#\/enemies\/(e\d{3})'>(E\d{3})<\/a>/g)) {
            assert.equal(page.toUpperCase(), enemy)
            assert.ok(Object.hasOwn(counts, enemy), "Reuse authored Helix archetypes")
            assert.ok(existsSync(new URL(`../enemies/${page}.md`, import.meta.url)))
            counts[enemy] += Number(count)
        }
    }
    assert.deepEqual(counts, { E008: 4, E009: 4, E010: 6 })
    assert.match(source, /authored starting tuning values, not concurrent-threat quotas/)
    assert.match(source, /Finish placements remain dormant until the watched\/skipped memory handoff/)
    assert.match(source, /Safe receiver pockets cannot be attacked/)
    assert.match(source, /cleared actors do not respawn/)
    assert.match(source, /killing opening enemies alone never validates a profile/)
    assert.match(source, /already-owned Arc Cutter, Runner Legs and Sensor Array before arrival/)
    assert.match(source, /not a change to her general starter loadout/)
    assert.match(source, /No Boss, endless wave, fragile escort or timed defence/)
})

test("M05 reserves four shared biome archetypes through unlinked Specialization-Mission placeholders", () => {
    const branches = {
        C04: ["rook-heavy", "rook-assault"],
        C06: ["vector-phase", "vector-hunter"],
        C08: ["ram-siege", "ram-onslaught"],
        C10: ["relay-network", "relay-null"],
    }
    const biomeUses = new Map()
    for (const [id, imprints] of Object.entries(branches)) {
        const label = new RegExp(`\\b${id}\\["([^"\\n]+)"\\]`).exec(graph)?.[1]
        assert.ok(label, `${id} content block exists`)
        const placeholders = [...label.matchAll(/Exx\[(M[ABCD]\d{2})\]/g)].map((match) => match[1])
        const expected = imprints.map((name) => {
            const imprint = readFileSync(new URL(`../imprints/${name}.md`, import.meta.url), "utf8")
            return /Acquisition placement \| \[\[Missions\/(M[ABCD]\d{2})#/.exec(imprint)[1]
        })
        assert.deepEqual(placeholders, expected, "Sources follow the recipient's owning Imprint pages")
        assert.match(label, /Additional finish enemies: Exx/)
        assert.doesNotMatch(label, /<a[^>]*>[^<]*Exx|\(\d+\)Exx/)
        const branchBiomes = placeholders.map((mission) => {
            const page = readFileSync(new URL(`../missions/${mission.toLowerCase()}.md`, import.meta.url), "utf8")
            assert.match(page, /^act: 2$/m)
            const biome = /^biomes: \[(B\d{2})\]$/m.exec(page)[1]
            biomeUses.set(biome, (biomeUses.get(biome) ?? 0) + 1)
            return biome
        })
        assert.equal(new Set(branchBiomes).size, 2, "No repeated biome within a trial")
    }
    assert.deepEqual([...biomeUses].sort(), [["B03", 2], ["B04", 2], ["B05", 2], ["B06", 2]])
    assert.equal([...graph.matchAll(/Exx\[/g)].length, 8, "Eight placements reference four shared archetypes")
    assert.match(source, /four additional archetypes total, one per Act II biome/)
    assert.match(source, /Exx` is not an allocated Enemy ID/)
    assert.match(source, /no links, quantities, stats or authored attacks yet/)
    assert.match(source, /same reusable archetype, not separate bots/)
    assert.match(source, /only the defined Helix placements, not the unquantified Exx additions/)
    assert.match(source, /without granting the associated Specializations/)
})

test("M05 styles scene, COM and room-content connectors by their actual edge order", () => {
    const styles = [...graph.matchAll(/linkStyle ([\d,]+) ([^\n]+)/g)]
    assert.equal(edges.length, 36)
    assert.equal(styles.length, 3)
    const expected = [
        { target: / -->.*CS\d+/, style: /stroke-width:1px;/, count: 4 },
        { target: / -\.- COM\d+/, style: /stroke-width:12px,stroke-dasharray:1 22,stroke-linecap:round/, count: 13 },
        { target: / -\.- C\d+/, style: /stroke-width:2px,stroke-dasharray:7 5/, count: 4 },
    ]
    styles.forEach(([, indices, style], i) => {
        const selected = indices.split(",").map(Number)
        assert.equal(selected.length, expected[i].count)
        assert.match(style, expected[i].style)
        for (const index of selected) assert.match(edges[index], expected[i].target)
    })
})
