import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const candidates = [
    ["images/enemies/e008.png", "enemies/e008.md"],
    ["images/enemies/e009.png", "enemies/e009.md"],
    ["images/enemies/e010.png", "enemies/e010.md"],
    ["images/biomes/b02-concept.png", "biomes/b02.md"],
    ["images/missions/m04-assembly-intake-concept.png", "missions/m04.md"],
    ["images/missions/m04-body-gallery-concept.png", "missions/m04.md"],
    ["images/missions/m04-evacuation-line-concept.png", "missions/m04.md"],
    ["images/missions/m04-extraction-concept.png", "missions/m04.md"],
    ["images/cutscenes/cs004-concept.png", "cutscenes/cs004.md"],
    ["images/cutscenes/cs005-concept.png", "cutscenes/cs005.md"],
]

test("M04 generated candidates are real PNGs with owner links, registry provenance and no embedded text/EXIF", () => {
    const registry = read("production/asset-registry.md")
    for (const [asset, owner] of candidates) {
        assert.ok(read(owner).includes(`content/${asset}`), `${asset}: owning page`)
        assert.ok(registry.includes(`\`${asset}\``), `${asset}: provenance`)
        const data = readFileSync(new URL(`../${asset}`, import.meta.url))
        assert.deepEqual(data.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
        assert.equal(data.subarray(12, 16).toString("ascii"), "IHDR")
        assert.ok(data.readUInt32BE(16) >= 600, `${asset}: width`)
        assert.ok(data.readUInt32BE(20) >= 400, `${asset}: height`)
        const chunks = []
        let offset = 8
        while (offset < data.length) {
            assert.ok(offset + 12 <= data.length, `${asset}: chunk header`)
            const length = data.readUInt32BE(offset)
            assert.ok(offset + length + 12 <= data.length, `${asset}: chunk body`)
            chunks.push(data.subarray(offset + 4, offset + 8).toString("ascii"))
            offset += length + 12
        }
        assert.equal(offset, data.length)
        assert.ok(chunks.includes("IDAT"))
        assert.equal(chunks.at(-1), "IEND")
        for (const metadata of ["tEXt", "zTXt", "iTXt", "eXIf"]) assert.ok(!chunks.includes(metadata), `${asset}: ${metadata}`)
    }
})

test("M04 machine profiles consume the same source-body images without replacing behaviour owners", () => {
    for (const [profile, enemy] of [["mp001", "e008"], ["mp002", "e009"], ["mp003", "e010"]]) {
        const source = read(`machine-profiles/${profile}.md`)
        assert.ok(source.includes(`content/images/enemies/${enemy}.png`))
        assert.match(source, /Enemy page owns hostile-state presentation/)
        assert.ok(source.includes(`content/images/machine-profiles/${profile}.svg`))
        assert.ok(read(`enemies/${enemy}.md`).includes(`content/images/enemies/${enemy}.svg`))
    }
})

test("M04 generated scenes remain candidates and retain unapproved dialogue and gameplay boundaries", () => {
    const mission = read("missions/m04.md")
    assert.match(mission, /generated mock screenshots, not build captures/)
    assert.match(mission, /introductory shield\/gauntlet kit/)
    assert.match(mission, /No Boss, endless wave/)
    assert.match(read("cutscenes/cs004.md"), /No exact CS004 dialogue is approved yet/)
    assert.match(read("cutscenes/cs005.md"), /No exact CS005 dialogue is approved yet/)
    assert.match(read("cutscenes/cs005.md"), /four Capsules in four stations, with no empty dock/)
    assert.match(mission, /Exactly two Capsules are shown/)
})
