import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const hub = read("missions/hub1.md")

test("HUB1 starts with a generated visual reference whose PNG and provenance are valid", () => {
    const asset = "images/missions/hub1-staging-concept.png"
    assert.ok(hub.indexOf(`content/${asset}`) < hub.indexOf("## Purpose"))
    const registry = read("production/asset-registry.md")
    const row = registry.split("\n").find((line) => line.startsWith("| VIS-51 |"))
    assert.ok(row.includes(`\`${asset}\``))
    assert.match(row, /source `image-ECjOLj`/)
    assert.match(registry, /VIS-50[^\n]+\n\| VIS-51/, "Provenance remains in the existing table")
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
    for (const metadata of ["tEXt", "zTXt", "iTXt", "eXIf"]) assert.ok(!chunks.includes(metadata))
})

test("HUB1 remains the same four-Coffin continuous space, with social seating rather than beds", () => {
    assert.match(hub, /same physical space used by HUB0/)
    assert.match(hub, /without relocating the crew or changing the architecture and floor plan/)
    assert.match(hub, /continuous side-scrolling space with no loading transitions/)
    assert.match(hub, /Four Coffins occupy four stations/)
    assert.match(hub, /no beds, bunks or sleeping mats/)
    assert.match(hub, /crew sleep and restore in their personal Coffins/)
    assert.match(hub, /conversation table is ordinary furniture, not another terminal/)
    assert.match(hub, /Character's Coffin can remain docked while that person is active elsewhere/)
    assert.match(hub, /noncombat ambient behaviours, not deployed companion AI/)
    assert.match(hub, /cannot make story dialogue missable or force a wait/)
    assert.match(hub, /without duplicating either body/)
    assert.match(hub, /Enabled infrastructure does not mean every Blueprint, Specialization or destination is unlocked/)
    assert.match(hub, /concept art, not a build capture/)
})

test("HUB1 physical/menu access and temporary RELAY operation preserve the same progression boundaries", () => {
    assert.match(hub, /use a Hub menu shortcut to open the same function without walking there/)
    assert.match(hub, /share availability, selections, progress, rewards and confirmations/)
    assert.match(hub, /entirely through shortcuts/)
    assert.match(hub, /never confirms departure, collects a reward again or bypasses an unlock/)
    assert.match(hub, /route terminal remains the single deployment owner/)
    assert.match(hub, /corresponding crew-menu shortcut transfers ordinary Hub control/)
    assert.match(hub, /does not permit mid-Mission switching outside M05's authored exception/)
    assert.match(hub, /browsing alone does not silently switch/)
    assert.match(hub, /starting the board temporarily hands execution to RELAY/)
    assert.match(hub, /returns control to the initiating Character without changing the selected Hub Character, Specialization or deployment loadout/)
    assert.match(hub, /not selection of RELAY for the next Mission/)
    assert.match(read("gameplay/blueprints.md"), /without changing the player's selected Hub Character or deployment configuration/)
    assert.match(hub, /no biome Memory Imprint `x\/4` counter/)
    assert.match(hub, /no automatic Act II departure/)
})
