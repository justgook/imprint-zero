import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { createContext, runInContext } from "node:vm"

// Use the exact Mermaid bundle and parser settings used by the wiki.
// Sequence parsing needs no DOM; flowchart HTML-label sanitization does.
const context = createContext({ console, setTimeout, clearTimeout })
runInContext(
    readFileSync(new URL("../.wiki-engine/vendor/mermaid.min.js", import.meta.url), "utf8"),
    context,
    { filename: "mermaid.min.js" },
)
context.mermaid.initialize({ startOnLoad: false, securityLevel: "loose" })

test("M05's parallel-events sequence parses with the wiki's bundled Mermaid parser", async () => {
    const source = readFileSync(new URL("../missions/m05.md", import.meta.url), "utf8")
    const diagrams = [...source.matchAll(/```mermaid\n([\s\S]*?)```/g)]
        .map((match) => match[1])
        .filter((diagram) => diagram.trimStart().startsWith("sequenceDiagram"))
    assert.equal(diagrams.length, 1, "Exercise the actual parallel-events diagram")
    for (const diagram of diagrams) {
        await assert.doesNotReject(() => context.mermaid.parse(diagram))
    }
})
