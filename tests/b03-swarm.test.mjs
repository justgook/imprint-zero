import assert from "node:assert/strict"
import { existsSync, readdirSync, readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const biome = read("biomes/b03.md")
const boss = read("bosses/bs004.md")
const roster = [["E011", "Skitter"], ["E012", "Gripper"], ["E013", "Ember"], ["E014", "Rime"], ["E015", "Arc"], ["E016", "Weaver"], ["E017", "Reclaimer"]]

test("B03 indexes seven task spiders consecutively without the removed guard or research outputs", () => {
    for (const [id, name] of roster) {
        const enemy = read(`enemies/${id.toLowerCase()}.md`)
        assert.match(enemy, new RegExp(`^id: ${id}$`, "m"))
        assert.match(enemy, new RegExp(`^title: ${name}$`, "m"))
        assert.match(enemy, /^type: enemy$/m)
        for (const path of ["biomes/b03.md", "enemies/overview.md", "_sidebar.md"]) assert.ok(read(path).includes(`Enemies/${id}|`))
        assert.match(enemy, /First|first|MA01/)
        assert.match(enemy, /Finite batches/)
        assert.match(enemy, /standing-height targets/)
        assert.match(enemy, /Colour is a secondary cue/)
        assert.match(enemy, /No Machine Profile, Blueprint drop table, Controlled Unit, Wire Integration or Program grant is allocated/)
        assert.match(enemy, /Any helper archetype can supply the replacement Curator controller/)
    }
    assert.deepEqual(readdirSync(new URL("../enemies/", import.meta.url)).filter((name) => /^e\d{3}\.md$/.test(name)).sort(), Array.from({ length: 17 }, (_, i) => `e${String(i + 1).padStart(3, "0")}.md`))
    assert.equal(existsSync(new URL("../images/enemies/e011.svg", import.meta.url)), false)
    assert.doesNotMatch(read("enemies/overview.md"), /Archive Sentry/)
    assert.match(biome, /not an automatic resistance\/status system/)
    assert.match(read("missions/m05.md"), /one shared preview body, not the entire seven-spider roster/)
    assert.doesNotMatch(read("cutscenes/cs012.md"), /\[\[Enemies\/E\d{3}/)
})

test("Curator succession is universal controller eligibility but Reclaimer reconstruction, never an immediate rematch", () => {
    assert.match(boss, /chest-up, like a person lying on their back/)
    assert.match(boss, /movement leads with the back/)
    assert.match(boss, /Any of the seven helper archetypes can become the next controller/)
    assert.match(boss, /Reclaimers.*perform reconstruction/)
    assert.match(boss, /not another hostile wave or an immediate second fight/)
    assert.match(boss, /Killing every authored combat spider cannot block succession/)
    assert.match(boss, /not the isolated editing engine or the original crisis/)
    assert.match(boss, /without awarding duplicate Guardian credit/)
    assert.match(boss, /watch\/skip-equivalent resume/)
    assert.match(read("missions/ma03.md"), /Local security may reset; engine isolation remains committed/)
    assert.match(read("CONTEXT.md"), /Any \*\*Service Spider\*\* archetype can supply the next \*\*Curator\*\* controller/)
})

test("restored B03 visits retain repairs and story results while allowing local intrusion combat and optional discovery", () => {
    const mission = read("missions/ma01.md")
    assert.match(mission, /Broadcast isolation and package containment stay committed/)
    assert.match(mission, /Later failure never reverses already committed isolation\/containment/)
    assert.match(mission, /R04 visibly remains isolated and R06 holds a secured review copy/)
    assert.match(mission, /R07's current-visit clear and ordinary return-rail release/)
    assert.match(mission, /Uncollected Null and undiscovered MS01 access remain available/)
    assert.match(mission, /no duplicate completion\/evidence grants/)
    assert.match(read("cutscenes/cs011.md"), /optional review changes presentation-view history, not story evidence grants/)
    assert.match(read("missions/ma02.md"), /captives are not reset to extraction/)
    assert.match(read("gameplay/progression.md"), /biome-specific restoration does not rewrite other Missions' retry rules/)
})
