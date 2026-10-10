import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const mission = read("missions/m04.md")
const graph = /\x60\x60\x60mermaid\n([\s\S]*?)\x60\x60\x60/.exec(mission)?.[1]
const seconds = (value) => {
    const [minutes, remainder] = value.split(":").map(Number)
    return minutes * 60 + remainder
}

test("M04 is a Stage-1 RAM-only rescue in the new Helix Biome", () => {
    assert.match(mission, /^status: stage-1$/m)
    assert.match(mission, /^biomes: \[B02\]$/m)
    assert.match(mission, /RAM only, fixed from HUB0 deployment through extraction/)
    assert.match(mission, /No playable RELAY switch/)
    assert.match(mission, /Active crew recovery/)
    assert.match(read("missions/overview.md"), /M04 — Production Halt.*RAM-only rescue.*Stage 1/)
    assert.match(read("biomes/b02.md"), /Missions\/M04/)
    assert.match(read("biomes/b02.md"), /Missions\/M05/)
})

test("M04 route and graph connector indices preserve distinct content and communication", () => {
    assert.ok(graph)
    assert.equal(graph.split("\n").filter((line) => / --> R0\d(?:\[|$)/.test(line)).length, 7)
    const edges = graph.split("\n").filter((line) => / -->| -\.- /.test(line))
    assert.equal(edges.filter((line) => /-\.- COM\d+/.test(line)).length, 4)
    assert.equal(edges.filter((line) => /-\.- C\d+/.test(line)).length, 4)
    for (const match of graph.matchAll(/linkStyle ([\d,]+) .*stroke-width:(\d+)px/g)) {
        for (const index of match[1].split(",").map(Number)) {
            assert.ok(edges[index], `edge ${index}`)
            assert.match(edges[index], match[2] === "12" ? /-\.- COM\d+/ : match[2] === "1" ? / -->.*CS\d+/ : /-\.- C\d+/)
        }
    }
    for (const match of graph.matchAll(/href='#\/([^']+)'/g)) {
        assert.ok(existsSync(new URL(`../${match[1]}.md`, import.meta.url)), match[1])
    }
    assert.doesNotMatch(graph, /bosses\/|R0\d[A-Z]/)
})

test("M04 planning targets agree between graph, room schedule and total", () => {
    const targets = [...graph.matchAll(/R0\d\["R0\d · [^\n]*? · (\d+:\d+)/g)]
        .map((match) => seconds(match[1]))
    assert.equal(targets.length, 8)
    const rows = [...mission.matchAll(/^\| R0\d \| (\d+:\d+) \|/gm)]
        .map((match) => seconds(match[1]))
    assert.deepEqual(targets, rows)
    assert.equal(targets.reduce((sum, target) => sum + target, 0), seconds(/\*\*Critical-path total\*\* \| \*\*(\d+:\d+)\*\*/.exec(mission)[1]))
    assert.match(mission, /Room targets exclude paused scene playback/)
})

test("M04 hostile machine owners link to existing research without duplicating starter rewards", () => {
    for (const [enemy, profile] of [["e008", "mp001"], ["e009", "mp002"], ["e010", "mp003"]]) {
        assert.ok(graph.includes(`href='#/enemies/${enemy}'`))
        const actor = read(`enemies/${enemy}.md`)
        assert.match(actor, /^status: stage-1$/m)
        assert.ok(actor.includes(`Machine Profiles/${profile.toUpperCase()}`))
        assert.ok(read(`machine-profiles/${profile}.md`).includes(`Enemies/${enemy.toUpperCase()}`))
        assert.ok(read("enemies/overview.md").includes(`Enemies/${enemy.toUpperCase()}`))
        assert.ok(read("_sidebar.md").includes(`Enemies/${enemy.toUpperCase()}`))
        const svg = read(`images/enemies/${enemy}.svg`)
        assert.match(svg, /PLACEHOLDER/)
        assert.match(svg, /replace with/i)
    }
    assert.match(mission, /not RAM kill quotas|rather than requiring RAM to farm these machines/)
    assert.match(mission, /No enemy-drop Blueprint acquisition or player research interaction/)
})

test("M04 rescue, extraction and reveal boundaries preserve M05", () => {
    assert.match(mission, /does not become a combat follower/)
    assert.match(mission, /scripted only after the hostile corridor is clear/)
    assert.match(mission, /Explicit RAM Coffin entry after RELAY boards/)
    assert.match(mission, /Incomplete rescue never registers RELAY/)
    assert.match(mission, /local evacuation production lane/)
    assert.match(mission, /Keep the recovered system needed by M05 intact/)
    assert.match(mission, /No Overdrive activation\/reveal/)
    assert.match(mission, /no definitive crew serials, named replacement bodies/)
    assert.doesNotMatch(mission, /locale\/[^\s|]+\?entry=/)
})

test("M04 has dedicated spatial and visual handoffs rather than empty image notes", () => {
    const assets = [...mission.matchAll(/content\/(images\/missions\/m04-[\w-]+\.svg)/g)].map((match) => match[1])
    assert.equal(new Set(assets).size, 3)
    for (const asset of assets) {
        const svg = read(asset)
        assert.match(svg, /<svg\b/)
        assert.match(svg, /PLACEHOLDER/)
        assert.match(svg, /replace with/i)
        assert.match(svg, /R01|RAM/)
    }
    assert.match(read("images/biomes/b02.svg"), /PLACEHOLDER/)
})
