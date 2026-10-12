import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { parseConfiguredLanguages, parseGettext } from "../wiki-extensions/gettext.js"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const mission = read("missions/ma01.md")
const scene11 = read("cutscenes/cs011.md")
const scene12 = read("cutscenes/cs012.md")
const sourceOwners = [mission, scene11, scene12].join("\n")
const seconds = (value) => value.split(":").map(Number).reduce((a, b) => a * 60 + b, 0)

test("MA01 document closeout keeps Stage 1, updates campaign status and hands continuation to MA02", () => {
    assert.match(mission, /^status: stage-1$/m)
    assert.match(mission, /Stage 1 is complete as a document-reviewed working baseline, not approval or playable validation/)
    assert.match(mission, /Proceed to \[\[Missions\/MA02/)
    assert.match(mission, /shared Directional Attack and combat math remain with their owners/)
    const index = read("missions/overview.md").split("\n").find(line => line.startsWith("| [[Missions/MA01|"))
    assert.match(index, /Stage 1/)
    assert.doesNotMatch(index, /TODO/)
    assert.match(read("production/open-questions.md"), /MA01's Stage-1 document pass is complete/)
})

test("finite arrival groups reconcile with graph counts and guard against premature clear", () => {
    const rows = [...mission.matchAll(/^\| (R\d{2}-[AB]) \| (\d+) \| (\d+) \| (\d+) \|/gm)]
    assert.deepEqual(rows.map(r => [r[1], ...r.slice(2).map(Number)]), [
        ["R02-A", 6, 0, 0], ["R03-A", 9, 0, 0], ["R03-B", 9, 0, 0],
        ["R05-A", 8, 4, 0], ["R07-A", 6, 0, 3], ["R07-B", 6, 0, 3],
    ])
    const totals = rows.reduce((sum, row) => sum.map((v, i) => v + Number(row[i + 2])), [0, 0, 0])
    assert.deepEqual(totals, [44, 4, 6])
    assert.ok(rows.every(row => row.slice(2).reduce((sum, n) => sum + Number(n), 0) <= 12))
    assert.match(mission, /all scheduled groups exhausted and every released hostile disabled/)
    assert.match(mission, /Leaving the room pauses pending release/)
    assert.match(mission, /at most two damaging commitments at once, at most one of them Ember\/Arc/)
    assert.match(mission, /movement alone supplies no passive contact damage/)
})

test("optional traversal has authored cycles and normalized all-kit dimensions, not fictitious measurements", () => {
    for (const term of ["Jmin", "Hmin", "Bmax", "Wmax"]) assert.ok(mission.includes(term))
    assert.match(mission, /near dwell 2 s, outward travel 4 s, far dwell 2 s, return travel 4 s/)
    assert.equal(2 + 4 + 2 + 4, 12)
    assert.match(mission, /open 5 s, visible\/audible closing warning 1 s, closed 4 s/)
    assert.equal(5 + 1 + 4, 10)
    assert.match(mission, /Occupancy holds closure until the Character is clear/)
    assert.match(mission, /solid separator blocks access upward to the far control/)
    assert.match(mission, /No moving-platform-to-moving-platform leap/)
    assert.match(mission, /targets\*\*, not evidence/)
})

test("58 English IDs are linked from their owners and registered, explicitly pending in all other locales", () => {
    for (const [domain, prefix, count] of [
        ["dialogue", /^(dialogue\.ma01\.|dialogue\.cs011\.)/, 34],
        ["gameplay", /^game\.ma01\./, 24],
    ]) {
        const entries = code => parseGettext(read(`locale/${code}/${domain}.po`)).entries.filter(e => prefix.test(e.id))
        const english = entries("en")
        assert.equal(english.length, count)
        assert.equal(new Set(english.map(e => e.id)).size, count)
        for (const entry of english) {
            assert.ok(entry.translations.get(0)?.trim())
            assert.notEqual(entry.translations.get(0), entry.id)
            assert.ok(sourceOwners.includes(`locale/en/${domain}.po?entry=${entry.id}`), entry.id)
        }
        for (const { code } of parseConfiguredLanguages(read("_config.md"))) {
            const localized = entries(code)
            assert.deepEqual(localized.map(e => e.id), english.map(e => e.id), code)
            if (code !== "en") for (const entry of localized) {
                assert.equal(entry.translations.get(0), "", `${code}: ${entry.id}`)
                assert.ok(entry.extractedComments.includes("Translation status: Pending; native-language review required."))
            }
        }
    }
    assert.match(scene12, /Wordless scene/)
    assert.doesNotMatch(sourceOwners, /Exact wording.*remain unauthored|Exact text\/audio is not yet authored/)
    assert.match(read("missions/hub1.md"), /MA01's courtyard-memory topic/)
})

test("CS011 and CS012 panel schedules sum to their owner durations with no new story grants", () => {
    for (const [source, expected] of [[scene11, 40], [scene12, 30]]) {
        const intervals = [...source.matchAll(/^\| P\d{2} \| (\d+:\d{2})–(\d+:\d{2}) \|/gm)]
        assert.equal(intervals.length, 4)
        let cursor = 0
        for (const [, start, end] of intervals) {
            assert.equal(seconds(start), cursor)
            cursor = seconds(end)
            assert.ok(cursor > seconds(start))
        }
        assert.equal(cursor, expected)
        assert.match(source, new RegExp(`duration_target_seconds: ${expected}`))
    }
    assert.match(scene11, /Same utterance|wording does not/)
    assert.match(scene11, /no historical-body casting|historical-body casting/)
    assert.match(scene12, /Both recording indicators darken; ordinary lights\/hum continue/)
    assert.match(scene12, /No spoken dialogue, explanatory caption or heroic musical resolution/)
})

test("Stage-1 source value is explicitly none rather than a fabricated blueprint/research output", () => {
    assert.match(mission, /no ordinary spider loot, fragments, machine extraction result or source-research track/)
    for (const id of ["e011", "e013", "e015"]) {
        const page = read(`enemies/${id}.md`)
        assert.match(page, /Stage-1 source-value disposition: none/)
        assert.match(page, /An empty loot disposition is intentional/)
        assert.match(page, /MA01's finite schedule is already specified/)
    }
})

for (const [id, asset, sourceId, width, height, owner] of [
    [72, "images/cutscenes/cs011-viewpoints-concept.png", "image-jGnh2s", 1536, 1024, scene11],
    [73, "images/cutscenes/cs012-concept.png", "image-ddQkpL", 2103, 748, scene12],
]) test(`VIS-${id} is a linked registered complete metadata-free scene reference`, () => {
    assert.ok(owner.includes(`content/${asset}`))
    const row = read("production/asset-registry.md").split("\n").find(line => line.startsWith(`| VIS-${id} |`))
    assert.ok(row.includes(`\`${asset}\``))
    assert.ok(row.includes(`source \`${sourceId}\``))
    const data = readFileSync(new URL(`../${asset}`, import.meta.url))
    assert.deepEqual(data.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
    assert.equal(data.readUInt32BE(16), width)
    assert.equal(data.readUInt32BE(20), height)
    let offset = 8
    const chunks = []
    while (offset < data.length) {
        const end = offset + data.readUInt32BE(offset) + 12
        assert.ok(end <= data.length)
        chunks.push(data.subarray(offset + 4, offset + 8).toString("ascii"))
        let crc = 0xffffffff
        for (const byte of data.subarray(offset + 4, end - 4)) {
            crc ^= byte
            for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0)
        }
        assert.equal((crc ^ 0xffffffff) >>> 0, data.readUInt32BE(end - 4))
        offset = end
    }
    assert.equal(offset, data.length)
    assert.equal(chunks[0], "IHDR")
    assert.equal(chunks.at(-1), "IEND")
    assert.ok(chunks.includes("IDAT"))
    for (const type of ["tEXt", "zTXt", "iTXt", "eXIf"]) assert.ok(!chunks.includes(type))
})

test("state-case handoff covers watch/skip, failed staging, idempotent grants and restored visits", () => {
    const matrix = mission.split("### Documented state-check matrix")[1].split("## Timing targets")[0]
    const cases = matrix.split("\n").filter(line => /^\| [^|-]/.test(line)).slice(1)
    assert.equal(cases.length, 18)
    for (const phrase of ["Collect Null, then defeat", "Reroute, then defeat", "Reroute without Null", "CS011 watch versus skip", "CS012 watch versus skip", "Empty gap before group B", "Later intrusion / defeat", "Prior-campaign viewed history"]) assert.ok(matrix.includes(phrase))
    assert.match(matrix, /Uncommitted reroute discarded/)
    assert.match(matrix, /MS01 stays committed regardless of chosen destination/)
    assert.match(matrix, /atomically; then offer authored destinations/)
    assert.match(matrix, /specification checks, not results from a running game/)
})
