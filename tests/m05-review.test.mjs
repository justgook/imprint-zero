import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const mission = read("missions/m05.md")
const graph = /\x60\x60\x60mermaid\n([\s\S]*?)\x60\x60\x60/.exec(mission)[1]
const ids = ["CS007", "CS008", "CS009", "CS010"]
const recipients = ["rook", "vector", "ram", "relay"]
const seconds = (value) => {
    const [minutes, remainder] = value.split(":").map(Number)
    return minutes * 60 + remainder
}

test("M05 is a Stage-1 physical full-crew exception with RELAY primary and no free switching or companion simulation", () => {
    assert.match(mission, /^status: stage-1$/m)
    assert.match(mission, /All four crew members physically deploy in their own Coffins/)
    assert.match(mission, /RELAY \/ Wire is the primary controlled Character/)
    assert.match(mission, /No free Character switching, companion AI/)
    assert.match(mission, /not virtual avatars, possession or playable reconstructions/)
    assert.match(mission, /No off-screen combat simulation/)
    assert.match(read("missions/overview.md"), /M05 — The Four Trials.*Physical full-crew trials.*Stage 1/)
    assert.match(read("gameplay/mechanics.md"), /physical whole-crew deployment/)
    assert.match(read("CONTEXT.md"), /\*\*Overdrive Imprint\*\*/)
    assert.match(read("CONTEXT.md"), /\*\*Compatibility Trial\*\*/)
})

test("M05 has four order-flexible physical branches and a four-validation core gate", () => {
    for (let number = 1; number <= 12; number++) {
        const id = `R${String(number).padStart(2, "0")}`
        assert.equal([...graph.matchAll(new RegExp(`${id}\\["${id} ·`, "g"))].length, 1, id)
    }
    for (const access of ["R03", "R05", "R07", "R09"]) {
        assert.ok(graph.includes(`R02 --> ${access}`), access)
    }
    for (const trial of ["R04", "R06", "R08", "R10"]) {
        assert.match(graph, new RegExp(`${trial} -->\\|Validation complete[^\\n]+ R02`))
    }
    assert.match(graph, /R02 -->\|All four profiles validated\| R11/)
    assert.match(mission, /not carryable keys, Blueprint tracks/)
    assert.match(mission, /not.*later Mnemonic Voiceprint password/)
    assert.match(mission, /watching four memories or solving four boards is insufficient/)
    assert.match(mission, /none needs another recipient's Overdrive/)
    const edges = graph.split("\n").filter((line) => / -->/.test(line))
    for (const index of /linkStyle ([\d,]+) /.exec(graph)[1].split(",").map(Number)) {
        assert.match(edges[index], / -->.*CS\d+/)
    }
})

test("M05 presents overlapping action sequentially and recovers the memory only at convergence", () => {
    assert.match(mission, /earlier start of that same interval/)
    assert.match(mission, /World simulation pauses during the board and Cutscene/)
    assert.match(mission, /Routed endpoint \+ physical receiver converge/)
    assert.match(mission, /ordinary-kit opening ends at a physical receiver/)
    assert.match(mission, /RELAY's own branch has no parallel Character segment/)
    assert.match(mission, /route the endpoint, present CS010, resume as Wire/)
    assert.match(mission, /Their shared announcement must not masquerade as the live trial synchronization cue/)
    assert.doesNotMatch(mission, /Successful access presents.*before transferring control/)
    assert.match(read("gameplay/overdrive.md"), /not throughout the whole trial/)
})

test("M05 separates trial-only activation, validation and collective progression, including failure and skip", () => {
    assert.match(mission, /unlimited trial Overdrive availability/)
    assert.match(mission, /Branch completion removes this local grant/)
    assert.match(mission, /global unlock is still pending/)
    assert.match(mission, /R11 is a safe validation room/)
    assert.match(mission, /commits Mission completion and progression together/)
    assert.match(mission, /Defeat of the currently controlled physical Character.*fails the whole Mission/)
    assert.match(mission, /All four Coffins return to HUB0/)
    assert.match(mission, /retry starts at R01 as RELAY, with no midpoint checkpoint/)
    assert.match(mission, /Watching or skipping a memory commits the same local activation and resume state/)
    assert.match(mission, /No memory scene silently completes its Overdrive challenge/)
    assert.match(mission, /no ordinary Blueprint loot/)
    assert.match(mission, /No combat Access buildup, Data Fragment nodes, Blueprint rewards, Null Hack Modules or Program Execution apply/)
    assert.match(mission, /unlimited short-reset retries/)
    assert.match(read("gameplay/overdrive.md"), /does not enable Overdrive in HUB0 after a failed run/)
})

test("CS006 gives the Hub lead without activating concealed systems or launching M05", () => {
    const briefing = read("cutscenes/cs006.md")
    assert.match(briefing, /^id: CS006$/m)
    assert.match(briefing, /^type: cutscene$/m)
    assert.match(briefing, /last Mesh Dive in the Foundry.*new access path, not a newly acquired ability to Dive/)
    assert.match(briefing, /All four Characters are physically home/)
    assert.match(briefing, /dormant/)
    assert.match(briefing, /Do not call the contents Overdrive, Imprints/)
    assert.match(briefing, /Complete or skip to the same state/)
    assert.match(briefing, /M05 does not launch automatically/)
    assert.match(read("missions/m04.md"), /CS005 --> CS006\[\[/)
    assert.match(read("missions/hub0.md"), /Cutscenes\/CS006/)
    assert.match(read("cutscenes/cs005.md"), /CS006's separate access briefing/)
    const image = /content\/(images\/[^)]+\.svg)/.exec(briefing)[1]
    assert.match(read(image), /STORYBOARD PLACEHOLDER/)
    assert.doesNotMatch(briefing, /locale\/[^\s|]+\?entry=/)
})

test("memory scenes have stable identities, dedicated storyboards and Imprint-owned evidence", () => {
    for (let index = 0; index < ids.length; index++) {
        const id = ids[index], scene = read(`cutscenes/${id.toLowerCase()}.md`)
        assert.match(scene, new RegExp(`^id: ${id}$`, "m"))
        assert.match(scene, /^type: cutscene$/m)
        assert.match(scene, /^status: stage-1$/m)
        assert.ok(graph.includes(`${id}[[`))
        assert.ok(graph.includes(`click ${id} href "#/cutscenes/${id.toLowerCase()}"`))
        assert.ok(read("_sidebar.md").includes(`[[Cutscenes/${id}|`))
        assert.ok(read("cutscenes/overview.md").includes(`[[Cutscenes/${id}|`))
        assert.ok(read("imprints/overdrive.md").includes(`[[Cutscenes/${id}|`))
        assert.ok(scene.includes(`Imprints/Overdrive#${recipients[index]}-memory`))
        assert.ok(scene.includes(`images/imprints/overdrive-${recipients[index]}-storyboard.svg`))
        assert.match(scene, /not a recording of the present-day physical trial/)
        assert.match(scene, /Complete or skip to the same local activation and resume state/)
        assert.match(scene, /does not validate the recipient profile/)
        assert.doesNotMatch(scene, /locale\/[^\s|]+\?entry=/)
    }
    assert.doesNotMatch(read("imprints/overdrive.md"), /!\[|Storyboard generation prompt/)
    assert.match(read("imprints/overdrive.md"), /Whether the four memories depict the same operation remains uncertain/)
})

test("M05 accounts for physical play, interactive boards and memory time separately and retains visual handoffs", () => {
    const roomTargets = [...graph.matchAll(/R\d{2}\["R\d{2} · [^\n]*? · (\d+:\d+)/g)]
        .map((match) => seconds(match[1]))
    assert.equal(roomTargets.length, 12)
    const physical = seconds(/Physical gameplay R01–R12[^\n]+\| (\d+:\d+)/.exec(mission)[1])
    assert.equal(roomTargets.reduce((sum, value) => sum + value, 0), physical)
    const boardTotal = seconds(/Four interactive Mesh Dive boards[^\n]+\| (\d+:\d+)/.exec(mission)[1])
    const gameplay = seconds(/\*\*Gameplay total including boards\*\* \| \*\*(\d+:\d+)/.exec(mission)[1])
    assert.equal(gameplay, physical + boardTotal)
    let sceneTotal = 0
    for (const id of ids) {
        const target = Number(/^duration_target_seconds: (\d+)$/m.exec(read(`cutscenes/${id.toLowerCase()}.md`))[1])
        const graphTarget = new RegExp(`${id}\\[\\[[^\\n]*?\\+(\\d+:\\d+) target`).exec(graph)[1]
        assert.equal(seconds(graphTarget), target)
        sceneTotal += target
    }
    const total = seconds(/\*\*M05 sequence through crew return\*\* \| \*\*(\d+:\d+)/.exec(mission)[1])
    assert.equal(total, gameplay + sceneTotal)
    assert.match(mission, /CS006.*belongs to the post-M04 sequence, not this total/)
    for (const asset of ["m05-minimap.svg", "m05-layout.svg", "m05-concept.svg"]) {
        const path = `images/missions/${asset}`
        assert.ok(existsSync(new URL(`../${path}`, import.meta.url)))
        assert.ok(mission.includes(`content/${path}`))
        assert.match(read(path), /PLACEHOLDER/)
        assert.match(read(path), /replace with/i)
    }
})
