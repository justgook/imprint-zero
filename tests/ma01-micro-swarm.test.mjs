import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const mission = read("missions/ma01.md")
const biome = read("biomes/b03.md")
const boss = read("bosses/bs004.md")
const registry = read("production/asset-registry.md")
const assets = [
    [68, "images/enemies/ma01-micro-swarm-concept.png", "image-zpEksN", 1774, 887, mission],
    [69, "images/missions/ma01-gallery-gameplay-concept.png", "image-bacz53", 1672, 941, mission],
    [70, "images/missions/ma01-replay-gallery-gameplay-concept.png", "image-ZpgExu", 1672, 941, mission],
    [71, "images/enemies/service-spider-curator-integration-concept.png", "image-7quK1O", 1774, 887, biome],
]
const crcTable = Uint32Array.from({ length: 256 }, (_, index) => {
    let value = index
    for (let i = 0; i < 8; i++) value = (value >>> 1) ^ (value & 1 ? 0xedb88320 : 0)
    return value >>> 0
})
const crc32 = (data) => {
    let crc = 0xffffffff
    for (const byte of data) crc = (crc >>> 8) ^ crcTable[(crc ^ byte) & 255]
    return (crc ^ 0xffffffff) >>> 0
}

for (const [id, asset, source, width, height, owner] of assets) {
    test(`VIS-${id} preserves registered, linked, complete PNG pixels without metadata`, () => {
        assert.ok(owner.includes(`content/${asset}`))
        const row = registry.split("\n").find((line) => line.startsWith(`| VIS-${id} |`))
        assert.ok(row.includes(`\`${asset}\``))
        assert.ok(row.includes(`source \`${source}\``))
        const data = readFileSync(new URL(`../${asset}`, import.meta.url))
        assert.deepEqual(data.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
        assert.equal(data.readUInt32BE(16), width)
        assert.equal(data.readUInt32BE(20), height)
        const chunks = []
        let offset = 8
        while (offset < data.length) {
            assert.ok(offset + 12 <= data.length)
            const size = data.readUInt32BE(offset)
            const end = offset + size + 12
            assert.ok(end <= data.length)
            const type = data.subarray(offset + 4, offset + 8).toString("ascii")
            chunks.push(type)
            assert.equal(crc32(data.subarray(offset + 4, end - 4)), data.readUInt32BE(end - 4))
            offset = end
        }
        assert.equal(offset, data.length)
        assert.equal(chunks[0], "IHDR")
        assert.equal(chunks.at(-1), "IEND")
        assert.ok(chunks.includes("IDAT"))
        for (const type of ["tEXt", "zTXt", "iTXt", "eXIf"]) assert.ok(!chunks.includes(type))
    })
}

test("all seven tiny roles use mass and reachable whole-body engagement rather than a heavy solo-machine reading", () => {
    assert.match(biome, /30–50 cm across the complete helper footprint/)
    assert.match(biome, /including spread legs/)
    assert.match(biome, /The threat is \*\*mass\*\*/)
    assert.match(biome, /floors, walls, ceiling undersides and empty seams between shelves/)
    assert.match(biome, /Entries are visible\/in-frame before damaging commitment/)
    assert.match(biome, /no surviving ceiling-only straggler may softlock/)
    for (let id = 11; id <= 17; id++) {
        const page = read(`enemies/e0${id}.md`)
        assert.match(page, /Tiny swarm worker/)
        assert.match(page, /B03#micro-swarm-scale-and-surface-movement/)
        assert.match(page, /low-body hit intersections and descending approaches/)
        assert.match(page, /physically integrate its complete small body/)
        assert.doesNotMatch(page, /Stagger pairs;|introduce it singly|mixes one with two Skitters/)
    }
    assert.match(mission, /54 tiny spider placements: 44 E011, four E013 and six E015/)
    assert.match(mission, /starting tuning values, not a simultaneous-threat quota/)
    assert.match(mission, /up to twelve engaged workers/)
    assert.match(mission, /finite authored room reserves/)
})

test("physical integration preserves Curator host scale and the unchanged user-provided primary reference", () => {
    assert.match(boss, /working frame height is \*\*2–2.5 m\*\*/)
    assert.match(boss, /one complete 30–50 cm helper folds\/docks/)
    assert.match(boss, /not by swapping a similarly sized part/)
    assert.match(boss, /VIS-59 remains the primary Curator body reference/)
    assert.match(biome, /folds its own legs and docks its complete small body/)
    assert.match(biome, /not a biological incision/)
    assert.match(biome, /not\*\* a validated chest-up, back-leading walking pose/)
    assert.match(registry, /source `image-7quK1O`/)
    assert.match(read("missions/ma03.md"), /physically integrate its complete body/)
})

test("gameplay-frame references and editable layer handoff supersede panoramic camera/scale evidence", () => {
    const primary = mission.indexOf("content/images/missions/ma01-gallery-gameplay-concept.png")
    assert.ok(primary > 0 && primary < mission.indexOf("## Purpose"))
    assert.match(mission, /local 2D run-and-gun viewport/)
    assert.match(mission, /AI-generated mock screenshot, not a playable build/)
    assert.match(mission, /up to twelve engaged workers/)
    assert.match(mission, /exact concurrency, entry delays and group transitions require all-kit density tests/)
    assert.match(mission, /earlier panoramas below remain architectural mood references only/i)
    for (const layer of ["Far depth", "Recessed archive", "Action/collision plane", "Nearest foreground"]) assert.ok(mission.includes(layer))
    assert.match(mission, /Gameplay\/Mechanics#camera/)
    assert.match(mission, /do not zoom out to fit the whole vault/)
    const diagram = read("images/missions/ma01-parallax-layout.svg")
    assert.ok(mission.includes("content/images/missions/ma01-parallax-layout.svg"))
    assert.match(diagram, /not the full height of the Basilica/)
    assert.match(diagram, /No numeric scroll factors are approved here/)
    assert.match(read("design/art-direction.md"), /MA01's corrected gameplay-frame studies/)
    for (let id = 61; id <= 67; id++) {
        const row = registry.split("\n").find((line) => line.startsWith(`| VIS-${id} |`))
        assert.match(row, /Historical mood\/prop reference/)
    }
})
