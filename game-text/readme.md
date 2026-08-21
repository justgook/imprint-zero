---
title: Game Text
summary: Canonical English source catalogues for all player-facing and spoken text.
eyebrow: Localization
status: in-progress
---

## Catalogue domains

| Catalogue | Content | Status |
| --- | --- | --- |
| [[game-text/dialogue.po|Dialogue]] | Spoken dialogue, radio communication, and subtitles | Active |
| `missions.po` | Mission names, briefings, and objectives | Planned |
| `ui.po` | Menus, prompts, labels, errors, and tutorials | Planned |
| `enemies.po` | Player-facing enemy names and descriptions | Planned |
| `items.po` | Equipment, item, and upgrade text | Planned |

## Source convention

English PO files in this directory are the canonical game-text source. Each entry uses:

- `msgctxt` for a stable namespaced ID;
- `msgid` for canonical English text;
- `msgstr` for a localized value, left empty in the English source;
- extracted comments for speaker, delivery, placement, and translator intent;
- source references for the design document and room that use the entry.

Game logic and mission diagrams refer to stable IDs. They do not duplicate the player-facing text or encode branching inside the localization catalogue.

## Dialogue IDs

```text
dialogue.<mission>.<communication>.<line>
dialogue.m01.com03.l002
```

A `COM` ID identifies a communication event in a mission graph. Its child line IDs identify independently translatable and timeable spoken lines.
