import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import test from "node:test"

import { contentRequest, pageURL, routePath } from "../.wiki-engine/app.js"

const extensions = new Set([".md"])

for (const mission of ["m01", "m02"]) {
    test(`${mission} room-graph link opens the style-guide section`, () => {
        const source = readFileSync(new URL(`../missions/${mission}.md`, import.meta.url), "utf8")
        const target = /\[\[(Content Style Guide[^|]+)\|Mission room graphs\]\]/.exec(source)?.[1]
        assert.ok(target, "Mission must link to the room-graph guidance")

        const url = pageURL(target, extensions)
        assert.equal(url, "#/content-style-guide?section=mission-room-graphs")
        const page = routePath(url.slice(2).split("?")[0], extensions)
        const { contentPath } = contentRequest(page, extensions)
        assert.equal(contentPath, "content-style-guide.md")
        assert.ok(existsSync(new URL(`../${contentPath}`, import.meta.url)))
        assert.match(readFileSync(new URL(`../${contentPath}`, import.meta.url), "utf8"), /^### Mission room graphs$/m)
    })
}
