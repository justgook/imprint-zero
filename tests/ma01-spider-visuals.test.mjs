import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const asset = "images/enemies/ma01-service-spiders-concept.png"

test("MA01's three spiders share a registered comparison sheet without changing placement or maturity", () => {
    const registry = read("production/asset-registry.md")
    const row = registry.split("\n").find((line) => line.startsWith("| VIS-60 |"))
    assert.ok(row.includes(`\`${asset}\``))
    assert.match(row, /source `image-Kw1q74`/)
    assert.match(row, /VIS-59.*VIS-54/)
    assert.match(row, /original AVIF unchanged/)
    assert.match(registry, /VIS-59[^\n]+\n\| VIS-60/)
    for (const path of ["missions/ma01.md", "enemies/e011.md", "enemies/e013.md", "enemies/e015.md"]) {
        const page = read(path)
        assert.ok(page.includes(`content/${asset}`))
        assert.match(page, /^status: stage-1$/m)
        assert.match(page, /E011 Skitter.*E013 Ember.*E015 Arc/)
    }
    assert.match(read("missions/ma01.md"), /44 E011, four E013 and six E015/)
    assert.match(row, /Superseded scale candidate/)
    for (const id of ["e011", "e013", "e015"]) {
        const page = read(`enemies/${id}.md`)
        assert.match(page, /not final sprite art, measured scale, an approved joint count, rig or attack envelope/)
        assert.match(page, /colour-independent readability/)
        assert.match(page, /glows do not allocate HUD weak points, damage or statuses/)
    }
})

test("service-spider PNG has complete chunks and no embedded text or EXIF", () => {
    const data = readFileSync(new URL(`../${asset}`, import.meta.url))
    assert.deepEqual(data.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
    assert.equal(data.subarray(12, 16).toString("ascii"), "IHDR")
    assert.equal(data.readUInt32BE(16), 1774)
    assert.equal(data.readUInt32BE(20), 887)
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
