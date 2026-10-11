import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const mission = read("missions/ma01.md")
const registry = read("production/asset-registry.md")
const assets = [
    {
        "vis": 61,
        "path": "images/missions/ma01-overview-concept.png",
        "source": "image-k1CoLQ",
        "width": 1942,
        "height": 809
    },
    {
        "vis": 62,
        "path": "images/missions/ma01-arrival-concept.png",
        "source": "image-4Wjfrb",
        "width": 1774,
        "height": 887
    },
    {
        "vis": 63,
        "path": "images/missions/ma01-isolator-concept.png",
        "source": "image-DmBYPF",
        "width": 1774,
        "height": 887
    },
    {
        "vis": 64,
        "path": "images/missions/ma01-vault-concept.png",
        "source": "image-jEdGJx",
        "width": 1774,
        "height": 887
    },
    {
        "vis": 65,
        "path": "images/missions/ma01-null-alcove-concept.png",
        "source": "image-SSu7zC",
        "width": 1774,
        "height": 887
    },
    {
        "vis": 66,
        "path": "images/missions/ma01-transit-detour-concept.png",
        "source": "image-OIASko",
        "width": 1942,
        "height": 809
    },
    {
        "vis": 67,
        "path": "images/missions/ma01-interlock-concept.png",
        "source": "image-97C42f",
        "width": 1774,
        "height": 887
    }
]

for (const { vis, path, source, width, height } of assets) {
    test(`MA01 VIS-${vis} is linked, registered and has clean complete PNG chunks`, () => {
        assert.ok(mission.includes(`content/${path}`))
        const row = registry.split("\n").find((line) => line.startsWith(`| VIS-${vis} |`))
        assert.ok(row.includes(`\`${path}\``))
        assert.ok(row.includes(`source \`${source}\``))
        assert.match(row, /VIS-54.*VIS-60/)
        assert.ok(registry.includes(`| VIS-${vis - 1} |`))
        const data = readFileSync(new URL(`../${path}`, import.meta.url))
        assert.deepEqual(data.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
        assert.equal(data.subarray(12, 16).toString("ascii"), "IHDR")
        assert.equal(data.readUInt32BE(16), width)
        assert.equal(data.readUInt32BE(20), height)
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
}

test("MA01 environment captions keep first/restored state, detour and extraction boundaries without replacing SVGs", () => {
    assert.match(mission, /^status: stage-1$/m)
    assert.ok(mission.indexOf("content/images/missions/ma01-overview-concept.png") < mission.indexOf("## Purpose"))
    for (const suffix of ["minimap", "layout", "concept"]) assert.ok(mission.includes(`content/images/missions/ma01-${suffix}.svg`))
    assert.match(mission, /not gameplay captures, approved collision layouts, attack ranges, hazard timing/)
    assert.match(mission, /Characters and protected civilian presentation are omitted here/)
    assert.match(mission, /Physical junction hubs\/background cables are equipment, not extra enemies/)
    assert.match(mission, /source storage and ordinary facility power retained/)
    assert.match(mission, /permission to restart the harmful broadcast on later visits/)
    assert.match(mission, /damaged unpowered cable and offline recorder/)
    assert.match(mission, /not another exit or a Verdant Null reveal/)
    assert.match(mission, /does not provide stairs directly to the far control/)
    assert.match(mission, /Right: safe R08 with one Coffin and no hostile/)
    assert.match(mission, /six E011, one E013 and one E015/)
    assert.match(registry, /initial source `image-eMhQv1` revised/)
})
