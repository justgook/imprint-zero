import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const mission = read("missions/m03.md")
const graph = /\x60\x60\x60mermaid\n([\s\S]*?)\x60\x60\x60/.exec(mission)?.[1]

test("M03 draft has correctly indexed communication and content edges", () => {
    assert.ok(graph)
    const edges = graph.split("\n").filter((line) => / -->| -\.- /.test(line))
    for (const match of graph.matchAll(/linkStyle ([\d,]+) .*stroke-width:(\d+)px/g)) {
        for (const index of match[1].split(",").map(Number)) {
            assert.ok(edges[index], `edge ${index} exists`)
            assert.match(edges[index], match[2] === "12" ? /-\.- COM\d+/ : /-\.- C\d+/)
        }
    }
    assert.equal(edges.filter((line) => /-\.- COM\d+/.test(line)).length, 4)
    assert.equal(edges.filter((line) => /-\.- C\d+/.test(line)).length, 4)
    for (const match of graph.matchAll(/href='#\/([^']+)'/g)) {
        assert.ok(existsSync(new URL(`../${match[1]}.md`, import.meta.url)), match[1])
    }
})

test("M03 embeds dedicated spatial and visual handoffs", () => {
    const assets = [...mission.matchAll(/content\/(images\/missions\/m03-[\w-]+\.svg)/g)]
        .map((match) => match[1])
    assert.equal(new Set(assets).size, 3)
    for (const asset of assets) {
        const svg = read(asset)
        assert.match(svg, /<svg\b/)
        assert.match(svg, /PLACEHOLDER/)
        assert.match(svg, /replace with/i)
    }
    assert.match(mission, /^status: stage-1$/m)
    assert.match(read("missions/overview.md"), /M03 — No Survivors Logged.*Stage 1/)
})

test("M03 critical-path planning total matches graph targets", () => {
    const seconds = (value) => {
        const [minutes, seconds] = value.split(":").map(Number)
        return minutes * 60 + seconds
    }
    const targets = [...graph.matchAll(/R0\d\[\"R0\d · [^\n]*? · (\d+:\d+)/g)]
        .map((match) => seconds(match[1]))
    assert.equal(targets.length, 7)
    const total = /\*\*Critical-path total\*\* \| \*\*(\d+:\d+)\*\*/.exec(mission)?.[1]
    assert.ok(total)
    assert.equal(targets.reduce((sum, target) => sum + target, 0), seconds(total))
})

test("M03 gang roster links to provisional actor pages and visual handoffs", () => {
    for (const id of ["e005", "e006", "e007"]) {
        assert.ok(graph.includes(`href='#/enemies/${id}'`), id)
        const actor = read(`enemies/${id}.md`)
        assert.match(actor, /^status: stage-1$/m)
        assert.ok(existsSync(new URL(`../images/enemies/${id}.svg`, import.meta.url)))
        assert.ok(read("enemies/overview.md").includes(`Enemies/${id.toUpperCase()}`))
    }
    assert.match(graph, /href='#\/bosses\/tollkeeper'/)
    assert.match(mission, /Proposed extermination scope/)
    assert.doesNotMatch(graph, /obsolete unit|enemies\/e003|enemies\/e004/)
})

test("Boss owner preserves low-HP healing and the third-attempt right-side entrance", () => {
    const boss = read("bosses/tollkeeper.md")
    assert.match(boss, /below 25%/)
    assert.match(boss, /third healing attempt/)
    assert.match(boss, /bottom-right corner/)
    assert.match(boss, /off-screen right/)
    assert.match(boss, /Accepted — Mandatory introduction guarantee/)
    assert.match(boss, /lethal damage is clamped at \*\*1 HP\*\* until RAM\'s intervention completes/)
    assert.match(boss, /Remove the floor when the healing-access break is committed/)
    assert.match(boss, /there is no early-kill aftermath fallback/)
    assert.match(mission, /Accepted — Faction name/)
    assert.doesNotMatch(mission, /Switchmen|Lineholders|Cutwire Crew/)
    assert.match(mission, /Bosses\/Tollkeeper#healing-and-ram-intervention/)
    assert.match(read("gameplay/rail-network.md"), /Coffins, mail, and goods/)
})
