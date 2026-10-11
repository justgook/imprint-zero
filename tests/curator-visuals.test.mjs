import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const boss = read("bosses/bs004.md")
const biome = read("biomes/b03.md")
const registry = read("production/asset-registry.md")

for (const [asset, owner, id, source] of [
    ["images/bosses/bs004-concept.png", boss, "VIS-53", "image-SWE7hW"],
    ["images/biomes/b03-wire-web-concept.png", biome, "VIS-54", "image-JKbCGE"],
    ["images/bosses/bs004-interface-concept.png", boss, "VIS-55", "image-PfTuhs"],
]) {
    test(`${id} has linked PNG pixels, provenance and no embedded text/EXIF`, () => {
        assert.ok(owner.includes(`content/${asset}`))
        const row = registry.split("\n").find((line) => line.startsWith(`| ${id} |`))
        assert.ok(row.includes(`\`${asset}\``))
        assert.ok(row.includes(`source \`${source}\``))
        const data = readFileSync(new URL(`../${asset}`, import.meta.url))
        assert.deepEqual(data.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
        assert.equal(data.subarray(12, 16).toString("ascii"), "IHDR")
        assert.ok(data.readUInt32BE(16) >= 600)
        assert.ok(data.readUInt32BE(20) >= 400)
        const chunks = []
        let offset = 8
        while (offset < data.length) {
            assert.ok(offset + 12 <= data.length)
            const length = data.readUInt32BE(offset)
            assert.ok(offset + length + 12 <= data.length)
            chunks.push(data.subarray(offset + 4, offset + 8).toString("ascii"))
            offset += length + 12
        }
        assert.equal(offset, data.length)
        assert.ok(chunks.includes("IDAT"))
        assert.equal(chunks.at(-1), "IEND")
        for (const kind of ["tEXt", "zTXt", "iTXt", "eXIf"]) assert.ok(!chunks.includes(kind))
    })
}

test("Curator's revised body and working fight direction preserve all-kit and origin boundaries", () => {
    assert.match(boss, /^id: BS004$/m)
    assert.match(boss, /^status: in-progress$/m)
    assert.match(boss, /lightweight engineered anthropomorphic interface/)
    assert.match(boss, /not a retained woman's body or an armoured tank/)
    assert.match(boss, /head below the body and back toward the direction of travel/)
    assert.match(boss, /Eight principal assemblies are the working topology target/)
    assert.match(boss, /Folded limbs conceal the torso through most ordinary movement/)
    assert.match(boss, /RELAY's biological head\/torso and fully biomechanical limbs remain unchanged/)
    assert.match(boss, /shared manufacturing period/)
    assert.match(boss, /No date, serial, matching portrait, explicit dialogue/)
    assert.match(boss, /Superseded broad-body candidate/)
    assert.match(boss, /small unstable projected human visage/)
    assert.match(boss, /one voice and finish in another/)
    assert.match(boss, /descends to repair\/recover its collection/)
    assert.match(boss, /vault infrastructure rather than compulsory erasure of victim memories/)
    assert.match(boss, /not a required player route verb/)
    assert.match(boss, /Prevent softlocks/)
    assert.ok(boss.indexOf("content/images/bosses/bs004-interface-concept.png") < boss.indexOf("content/images/bosses/bs004-concept.png"))
    assert.match(boss, /not approved guns or attacks/)
    assert.match(boss, /does not prove a biological species/)
    assert.match(boss, /objective drift, not a settled conscious rebellion/)
    assert.match(boss, /OPERATOR-associated deployment does not establish/)
    assert.match(boss, /authoring|Authoring/)
    assert.match(boss, /not a boss placement in MA01/)
    assert.match(boss, /no Boss Blueprint bundle/i)
    assert.match(read("missions/ma03.md"), /\[\[Bosses\/BS004/)
    assert.match(read("CONTEXT.md"), /\*\*Curator\*\*:/)
})

test("B03's wire-web revision preserves its earlier reference and keeps Weaver combat unplaced", () => {
    assert.ok(biome.indexOf("content/images/biomes/b03-wire-web-concept.png") < biome.indexOf("content/images/biomes/b03-concept.png"))
    assert.match(biome, /Earlier archive overview — before the wire-web pass/)
    assert.match(registry, /VIS-52[^\n]+\n\| VIS-53[^\n]+\n\| VIS-54/)
    assert.match(biome, /### Weaver role — connection-based defence/)
    assert.match(biome, /uses connected machinery, not laid traps/)
    assert.match(biome, /already-present compatible guard or authored security endpoint/)
    assert.match(biome, /interrupt the exposed connector\/body or evade/)
    assert.match(biome, /not yet an allocated Enemy ID/)
    assert.match(biome, /MA01's existing E011 placements are unchanged/)
    assert.match(biome, /not a network-wide buff, unlimited ally spawning/)
    assert.match(biome, /Hack may supply an authored alternative later, never the only counter/)
    assert.match(biome, /not authored actor counts, attacks or a Boss placement in MA01/)
    assert.match(biome, /not an Act II briefing reveal/)
})
