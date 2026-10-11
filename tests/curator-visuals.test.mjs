import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { createHash } from "node:crypto"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const boss = read("bosses/bs004.md")
const biome = read("biomes/b03.md")
const registry = read("production/asset-registry.md")

for (const [asset, owner, id, source] of [
    ["images/biomes/b03-wire-web-concept.png", biome, "VIS-54", "image-JKbCGE"],
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

test("VIS-59 links the unchanged user-provided AVIF with source provenance", () => {
    const asset = "images/bosses/bs004-user-reference.avif"
    assert.ok(boss.includes(`content/${asset}`))
    const row = registry.split("\n").find((line) => line.startsWith("| VIS-59 |"))
    assert.ok(row.includes(`\`${asset}\``))
    assert.ok(row.includes("source `curator_2984x2379.avif`"))
    const data = readFileSync(new URL(`../${asset}`, import.meta.url))
    assert.equal(data.subarray(4, 8).toString("ascii"), "ftyp")
    assert.equal(data.subarray(8, 12).toString("ascii"), "avif")
    assert.equal(createHash("sha256").update(data).digest("hex"), "f15fa839339428e81532fc358bb2a2c973e3ae9cb6157c04a6cc7028b41e7b7a")
    assert.ok(!boss.includes("content/images/bosses/bs004-user-reference.png"))
})

test("Curator's revised body and working fight direction preserve all-kit and origin boundaries", () => {
    assert.match(boss, /^id: BS004$/m)
    assert.match(boss, /^status: in-progress$/m)
    assert.match(boss, /manufactured biological woman's torso and actual human head\/brain/)
    assert.match(boss, /not a retained woman's corpse or RELAY's own body/)
    assert.match(boss, /reusing an established human-production process/i)
    assert.match(boss, /in front of the physical face/)
    assert.match(boss, /the real head remains visible behind it/i)
    assert.match(boss, /head below the body and back toward the direction of travel/)
    assert.match(boss, /Eight principal assemblies are the working topology target/)
    assert.match(boss, /two shoulder roots, two hip roots and four dorsal roots in two paired rows/)
    assert.match(boss, /shoulders sit low beside the neck\/head and hips sit high/)
    assert.match(boss, /not proof that every generated root-to-tip path is anatomically correct/)
    assert.match(boss, /follow RELAY-like natural breast\/chest contours/)
    assert.match(boss, /anatomical volume remains covered/)
    assert.match(boss, /Overlapping old cloth scraps\/bandage-like strips/)
    assert.match(boss, /No circular nipple caps, rivets at breast tips/)
    assert.match(boss, /extra reach and length come from hardware, not an elongated abdomen/)
    assert.match(boss, /Hip roots use the closed pelvic cradle/)
    assert.match(boss, /original task body has no clothing requirement/)
    assert.match(boss, /awkwardly copies that practice with old retained scraps/)
    assert.match(boss, /Current primary visual reference/)
    assert.match(boss, /not new movement rules, final joint taxonomy or approved in-game\/localized text/)
    assert.match(boss, /no dedicated cups, sculpted breast armour or clean tailored costume/)
    assert.match(boss, /grime, frayed edges and rough repairs match the scratched/)
    assert.match(boss, /Folded limbs conceal the torso through most ordinary movement/)
    assert.match(boss, /RELAY's biological head\/torso and fully biomechanical limbs remain unchanged/)
    assert.match(boss, /shared manufacturing period/)
    assert.match(boss, /No date, serial, matching portrait, explicit dialogue/)
    assert.match(boss, /local-only archives, not versioned documentation assets/)
    assert.doesNotMatch(boss, /content\/images\/bosses\/bs004-[^\s)]+\.png/)
    for (const id of ["VIS-53", "VIS-55", "VIS-56", "VIS-57", "VIS-58"]) {
        const row = registry.split("\n").find((line) => line.startsWith(`| ${id} |`))
        assert.ok(row.includes("local-only archive"))
        assert.ok(row.includes("(not versioned)"))
    }
    assert.match(boss, /small unstable projected human visage/)
    assert.match(boss, /one voice and finish in another/)
    assert.match(boss, /descends to repair\/recover its collection/)
    assert.match(boss, /vault infrastructure rather than compulsory erasure of victim memories/)
    assert.match(boss, /not a required player route verb/)
    assert.match(boss, /Prevent softlocks/)
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
