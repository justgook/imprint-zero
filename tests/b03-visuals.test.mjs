import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const biome = read("biomes/b03.md")

test("B03 has a prominent linked biome panorama with source provenance and no PNG text/EXIF", () => {
    const path = "images/biomes/b03-concept.png"
    assert.ok(biome.indexOf(`content/${path}`) < biome.indexOf("## Purpose"))
    const registry = read("production/asset-registry.md")
    const row = registry.split("\n").find((line) => line.startsWith("| VIS-52 |"))
    assert.ok(row.includes(`\`${path}\``))
    assert.match(row, /source `image-qFUvq6`/)
    assert.match(row, /VIS-32/)
    assert.match(registry, /VIS-51[^\n]+\n\| VIS-52/)
    const data = readFileSync(new URL(`../${path}`, import.meta.url))
    assert.deepEqual(data.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
    assert.equal(data.subarray(12, 16).toString("ascii"), "IHDR")
    assert.ok(data.readUInt32BE(16) >= 600)
    assert.ok(data.readUInt32BE(20) >= 400)
    const chunks = []
    let offset = 8
    while (offset < data.length) {
        assert.ok(offset + 12 <= data.length)
        const size = data.readUInt32BE(offset)
        assert.ok(offset + size + 12 <= data.length)
        chunks.push(data.subarray(offset + 4, offset + 8).toString("ascii"))
        offset += size + 12
    }
    assert.equal(offset, data.length)
    assert.ok(chunks.includes("IDAT"))
    assert.equal(chunks.at(-1), "IEND")
    for (const metadata of ["tEXt", "zTXt", "iTXt", "eXIf"]) assert.ok(!chunks.includes(metadata))
})

test("B03 art captions preserve all-kit, narrative and production boundaries without promoting maturity", () => {
    assert.match(biome, /^status: todo$/m)
    assert.match(biome, /not its factory layout or biotechnology/)
    assert.match(biome, /not evidence of a religious faction/)
    assert.match(biome, /not a build capture, final palette, measured floor plan or authored Mission route/)
    assert.match(biome, /do not impose high-jump or Character-specific critical-path traversal/)
    assert.match(biome, /no puzzle solutions, rewards, donor identities or proof/)
    assert.match(biome, /Exact displayed text belongs to gettext/)
    assert.match(biome, /does not author their animation or damaging hazards/)
    assert.match(biome, /CS012.*explicitly owns that scene's storyboards/)
    assert.match(biome, /literal spider-web-like arrangements of wires/)
    assert.match(biome, /operating infrastructure, not evidence that the Basilica is abandoned/)
    assert.match(biome, /E016 — Weaver/)
    assert.match(biome, /seven-body roster/)
    assert.match(biome, /predates this explicit web direction/)
    assert.match(biome, /ordinary cables are not automatically damaging, cuttable/)
    assert.match(biome, /all-kit escape margins/)
})
