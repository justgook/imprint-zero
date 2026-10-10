import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const mission = read("missions/m04.md")
const graph = /\x60\x60\x60mermaid\n([\s\S]*?)\x60\x60\x60/.exec(mission)[1]
const seconds = (value) => {
    const [minutes, remainder] = value.split(":").map(Number)
    return minutes * 60 + remainder
}

test("M04 scene identities own presentation with explicit meeting and post-extraction slots", () => {
    for (const id of ["CS004", "CS005", "CS006"]) {
        const scene = read(`cutscenes/${id.toLowerCase()}.md`)
        assert.match(scene, new RegExp(`^id: ${id}$`, "m"))
        assert.match(scene, /^type: cutscene$/m)
        assert.ok(read("_sidebar.md").includes(`[[Cutscenes/${id}|`))
        assert.ok(read("cutscenes/overview.md").includes(`[[Cutscenes/${id}|`))
        assert.ok(graph.includes(`${id}[[`))
        assert.ok(graph.includes(`click ${id} href "#/cutscenes/${id.toLowerCase()}"`))
        const asset = /content\/(images\/cutscenes\/[^)]+\.svg)/.exec(scene)[1]
        assert.ok(existsSync(new URL(`../${asset}`, import.meta.url)))
        assert.match(read(asset), /PLACEHOLDER/)
        assert.match(read(asset), /replace with/i)
        assert.doesNotMatch(scene, /locale\/[^\s|]+\?entry=/)
    }
    assert.match(graph, /R06 --> CS004/)
    assert.match(graph, /R08 -->\|After extraction\| CS005/)
    assert.match(graph, /linkStyle 7,8,9 .*stroke-width:1px;/)
    assert.doesNotMatch(graph, /COM04/)
    assert.match(read("missions/hub0.md"), /Cutscenes\/CS005/)
})

test("M04 scene targets agree with graph and separate extraction and Hub-sequence totals", () => {
    const targets = ["CS004", "CS005", "CS006"].map((id) => {
        const target = Number(/^duration_target_seconds: (\d+)$/m.exec(read(`cutscenes/${id.toLowerCase()}.md`))[1])
        const graphTarget = new RegExp(`${id}\\[\\[[^\\n]*?\\+(\\d+:\\d+) target`).exec(graph)[1]
        assert.equal(seconds(graphTarget), target)
        const row = mission.split("\n").find((line) => line.startsWith(`| [[Cutscenes/${id}|${id}]] `) && /\| \+\d+:\d+ \|$/.test(line))
        assert.ok(row)
        assert.equal(seconds(/\+(\d+:\d+)/.exec(row)[1]), target)
        return target
    })
    const active = seconds(/\*\*Critical-path total\*\* \| \*\*(\d+:\d+)/.exec(mission)[1])
    const extraction = seconds(/\*\*Gameplay \+ cutscene through extraction\*\* \| \*\*(\d+:\d+)/.exec(mission)[1])
    const sequence = seconds(/\*\*M04 sequence including post-Mission scenes\*\* \| \*\*(\d+:\d+)/.exec(mission)[1])
    assert.equal(extraction, active + targets[0])
    assert.equal(sequence, extraction + targets[1] + targets[2])
})

test("M04 scene handoffs preserve RAM control, rescue prerequisites and M05 reveals", () => {
    const meeting = read("cutscenes/cs004.md")
    const arrival = read("cutscenes/cs005.md")
    assert.match(meeting, /RAM remains the playable Character/)
    assert.match(meeting, /Complete or skip to the same state/)
    assert.match(meeting, /does not register her as available in HUB0/)
    assert.match(meeting, /once for the authored R06 meeting per deployment/)
    assert.match(arrival, /All four Hub stations now contain their corresponding Capsules/)
    assert.match(arrival, /watching the whole scene is not a second reward prerequisite/)
    assert.match(arrival, /Completing or skipping it resumes the same Hub preparation state/)
    assert.match(arrival, /M05 does not launch automatically/)
    assert.match(arrival, /does not create extra rewards or activate the Research Terminal/)
    assert.match(mission, /CS005 does not play for a failed return/)
    assert.match(mission, /reset local clears, broken barriers, rescue access, CS004's deployment event/)
    assert.doesNotMatch(mission, /No paused cutscene is authored|Live communication beats only|No paused-scene duration is assigned yet/)
})
