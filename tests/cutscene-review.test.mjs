import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import test from "node:test"

import { parseConfiguredLanguages, parseGettext } from "../wiki-extensions/gettext.js"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const mission = read("missions/m03.md")
const seconds = (value) => {
    const [minutes, remainder] = value.split(":").map(Number)
    return minutes * 60 + remainder
}

test("M03 cutscenes have stable pages, sidebar links, double borders and explicit sequence slots", () => {
    for (const id of ["CS001", "CS002"]) {
        const scene = read(`cutscenes/${id.toLowerCase()}.md`)
        assert.match(scene, new RegExp(`^id: ${id}$`, "m"))
        assert.match(scene, /^type: cutscene$/m)
        assert.ok(read("_sidebar.md").includes(`[[Cutscenes/${id}|`))
        assert.ok(read("cutscenes/overview.md").includes(`[[Cutscenes/${id}|`))
        assert.ok(mission.includes(`${id}[[`))
        assert.ok(mission.includes(`click ${id} href "#/cutscenes/${id.toLowerCase()}"`))
        const asset = /content\/(images\/cutscenes\/[^)]+)/.exec(scene)?.[1]
        assert.ok(asset)
        assert.ok(existsSync(new URL(`../${asset}`, import.meta.url)))
    }
    assert.match(mission, /R05 --> CS001/)
    assert.match(mission, /R07 -->\|After extraction\| CS002/)
    assert.match(mission, /linkStyle 6,7 .*stroke-width:1px;/)
    assert.doesNotMatch(mission, /COM03[^\n]*Healing-cover interruption/)
    assert.match(read("wiki-rules.md"), /\*\*Cutscene blocks:\*\*/)
})

test("Cutscene graph and schedule targets agree with scene owners and avoid double counting", () => {
    const targets = ["CS001", "CS002"].map((id) => {
        const value = /^duration_target_seconds: (\d+)$/m.exec(read(`cutscenes/${id.toLowerCase()}.md`))?.[1]
        assert.ok(value)
        const graphTarget = new RegExp(`${id}\\[\\[[^\\n]*?\\+(\\d+:\\d+) target`).exec(mission)?.[1]
        assert.ok(graphTarget)
        assert.equal(seconds(graphTarget), Number(value))
        const scheduleRow = mission.split("\n").find((line) => line.startsWith(`| [[Cutscenes/${id}|${id}]] `) && /\| \+\d+:\d+ \|$/.test(line))
        assert.ok(scheduleRow)
        assert.equal(seconds(/\+(\d+:\d+)/.exec(scheduleRow)[1]), Number(value))
        return Number(value)
    })
    const active = seconds(/\*\*Critical-path total\*\* \| \*\*(\d+:\d+)/.exec(mission)[1])
    const extraction = seconds(/\*\*Gameplay \+ cutscene through extraction\*\* \| \*\*(\d+:\d+)/.exec(mission)[1])
    const sequence = seconds(/\*\*M03 sequence including post-Mission scene\*\* \| \*\*(\d+:\d+)/.exec(mission)[1])
    assert.equal(extraction, active + targets[0])
    assert.equal(sequence, extraction + targets[1])
})

test("RAM's approved CS001 joke exists once in every configured dialogue catalogue", () => {
    for (const { code } of parseConfiguredLanguages(read("_config.md"))) {
        const entries = parseGettext(read(`locale/${code}/dialogue.po`)).entries
            .filter((entry) => entry.id === "dialogue.cs001.ram.door")
        assert.equal(entries.length, 1, code)
        const translation = entries[0].translations.get(0)
        assert.ok(translation?.trim(), `${code}: translation must be filled`)
        if (code === "en") assert.equal(translation, "Door was taking too long.")
        else {
            assert.notEqual(translation, "Door was taking too long.", code)
            assert.notEqual(translation, entries[0].id, code)
            assert.ok(entries[0].extractedComments.includes("Translation status: Draft; native-language review pending."), code)
        }
        assert.ok(read("cutscenes/cs001.md").includes(`locale/${code}/dialogue.po?entry=dialogue.cs001.ram.door`), `${code}: scene text link`)
    }
    assert.match(read("cutscenes/cs001.md"), /entry=dialogue.cs001.ram.door/)
})

test("CS001 handoff isolates RAM and M03 restores automation through the lever", () => {
    assert.match(read("cutscenes/cs001.md"), /Combat pauses at impact/)
    const boss = read("bosses/bs001.md")
    assert.match(boss, /Safety interlock/)
    assert.match(boss, /cannot attack Switch or absorb attacks/)
    assert.match(boss, /at CS001 completion\/skip, immediately before gameplay resumes/)
    assert.match(mission, /R06 lever/)
    assert.doesNotMatch(mission, /R06 terminal|Safe completion terminal/)
    assert.match(read("cutscenes/cs002.md"), /after its last room and extraction/)
    assert.match(read("cutscenes/cs002.md"), /without naming the still-concealed Overdrive/)
})
