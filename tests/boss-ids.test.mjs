import assert from "node:assert/strict"
import { readdirSync, readFileSync } from "node:fs"
import test from "node:test"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")

test("Every Boss page has a unique stable ID and matching canonical filename", () => {
    const pages = readdirSync(new URL("../bosses/", import.meta.url))
        .filter((file) => file.endsWith(".md") && file !== "overview.md")
    const ids = new Set()
    assert.ok(pages.length > 0)
    for (const file of pages) {
        const source = read(`bosses/${file}`)
        const frontmatter = /^---\n([\s\S]*?)\n---/.exec(source)?.[1]
        assert.ok(frontmatter, file)
        const id = /^id: (BS\d{3})$/m.exec(frontmatter)?.[1]
        assert.ok(id, `${file}: missing Boss ID`)
        assert.match(frontmatter, /^type: boss$/m)
        assert.equal(file, `${id.toLowerCase()}.md`)
        assert.ok(!ids.has(id), `${id}: duplicate ID`)
        ids.add(id)
        assert.ok(read("bosses/overview.md").includes(`[[Bosses/${id}|`), `${id}: catalogue link`)
        assert.ok(read("_sidebar.md").includes(`[[Bosses/${id}|`), `${id}: navigation link`)
    }
})

test("BS001 identifies Switch as the first campaign Boss without a stale second-Boss claim", () => {
    assert.match(read("bosses/bs001.md"), /^title: Marek “Switch” Voss$/m)
    assert.match(read("missions/m03.md"), /Accepted — First Boss/)
    assert.match(read("characters/overview.md"), /introduced during the first Boss encounter/)
    assert.doesNotMatch(read("missions/m03.md"), /second boss/i)
    assert.doesNotMatch(read("characters/overview.md"), /second boss/i)
})
