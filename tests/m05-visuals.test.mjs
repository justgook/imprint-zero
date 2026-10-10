import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const candidates = [
    ["images/missions/m05-overview-concept.png", "missions/m05.md", "VIS-39"],
    ["images/missions/m05-dive-overlap-concept.png", "missions/m05.md", "VIS-40"],
    ["images/missions/m05-rook-trial-concept.png", "missions/m05.md", "VIS-41"],
    ["images/missions/m05-vector-trial-concept.png", "missions/m05.md", "VIS-42"],
    ["images/missions/m05-ram-trial-concept.png", "missions/m05.md", "VIS-43"],
    ["images/missions/m05-relay-trial-concept.png", "missions/m05.md", "VIS-44"],
    ["images/missions/m05-validation-core-concept.png", "missions/m05.md", "VIS-45"],
    ["images/cutscenes/cs006-concept.png", "cutscenes/cs006.md", "VIS-46"],
]

test("M05's eight generated references are linked real PNGs with provenance and no text/EXIF chunks", () => {
    const registry = read("production/asset-registry.md")
    for (const [asset, owner, id] of candidates) {
        assert.ok(read(owner).includes(`content/${asset}`), `${asset}: owning page`)
        const row = registry.split("\n").find((line) => line.startsWith(`| ${id} |`))
        assert.ok(row?.includes(`\`${asset}\``), `${id}: matching provenance`)
        assert.match(row, /source `image-/)
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
    assert.match(registry, /VIS-38[^\n]+\n\| VIS-39/, "New rows remain in the existing Markdown table")
})

test("M05 art captions preserve incomplete enemy designs, control/reveal boundaries and existing kits", () => {
    const mission = read("missions/m05.md")
    assert.match(mission, /generated mock screenshots, not build captures/)
    assert.match(mission, /Exx designs remain undefined/)
    assert.match(mission, /partial samples, not the complete trial roster/)
    assert.match(mission, /played sequentially, not simultaneous split-screen controls/)
    assert.match(mission, /board is not an authored solution/)
    assert.match(mission, /Kunai and Climbing Claws, not Phase's Katana or teleportation/)
    assert.match(mission, /Gauntlet follow-up occurs after the charge, not during it/)
    assert.match(mission, /not a harvested Chassis, new module award or Network-controlled squad/)
    assert.match(mission, /not free Character switching or companion AI/)
    assert.match(mission, /exact displayed text belongs to gettext/)
    for (const source of ["Exx[MA02]", "Exx[MB01]", "Exx[MC02]", "Exx[MD02]", "Exx[MD01]", "Exx[MB02]", "Exx[MC01]", "Exx[MA01]"]) {
        assert.ok(mission.includes(source))
    }
    const briefing = read("cutscenes/cs006.md")
    assert.match(briefing, /four Capsules in four stations, with no empty dock/)
    assert.match(briefing, /concealed-system consoles remain dormant/)
    assert.match(briefing, /Exact CS006 dialogue is not authored yet/)
    assert.match(briefing, /No Overdrive, Imprint, Blueprint or Research Terminal reveal is pictured/)
})

test("M05 generated art retains editable mission and memory schematics", () => {
    const mission = read("missions/m05.md")
    for (const name of ["concept", "layout", "minimap"]) {
        const asset = `images/missions/m05-${name}.svg`
        assert.ok(mission.includes(`content/${asset}`))
        assert.ok(existsSync(new URL(`../${asset}`, import.meta.url)))
    }
    assert.ok(read("cutscenes/cs006.md").includes("content/images/cutscenes/cs006-storyboard.svg"))
    for (const [scene, character] of [["cs007", "rook"], ["cs008", "vector"], ["cs009", "ram"], ["cs010", "relay"]]) {
        const asset = `images/imprints/overdrive-${character}-storyboard.svg`
        assert.ok(read(`cutscenes/${scene}.md`).includes(`content/${asset}`))
        assert.ok(existsSync(new URL(`../${asset}`, import.meta.url)))
    }
})
