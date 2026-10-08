---
title: Cutscenes
summary: Stable-ID scenes referenced by Mission graphs, with presentation separate from trigger and encounter rules.
status: in-progress
---

## Catalogue

| ID | Scene | Current placement |
|---|---|---|
| [[Cutscenes/CS003|CS003]] | VECTOR introduces herself to ROOK | After M01 extraction / first HUB0 arrival; before CS001/CS002 in story order |
| [[Cutscenes/CS001|CS001]] | RAM breaches the healing station | M03 R05, during the Boss encounter |
| [[Cutscenes/CS002|CS002]] | RAM introduces himself and the RELAY recovery lead | After M03 R07 / extraction; Hub-scene placement may be reorganized later |

## Ownership and identity

> **Accepted** — Cutscenes have their own sidebar section, stable `CS###` IDs, `type: cutscene`, and lowercase ID filenames. Scene IDs do not change when their placement moves. Catalogue/sidebar ordering may follow story order; numeric IDs record stable allocation, not playback order. Thus CS003 precedes CS001/CS002 in the campaign without renumbering them.

| Owner | Responsibility |
|---|---|
| Cutscene page | Panel/transition direction, sound, Character variants, duration target, presentation handoff, and links to exact text |
| Mission graph | Where/when the scene is encountered and its placement in the Mission sequence |
| Boss page | Combat trigger, HP/phase rules, and post-scene encounter state |
| Gettext catalogue | Approved wording and translations |

A cutscene is not a room, item placement, or radio exchange. [[Wiki Rules?section=mission-room-graphs|Mission room graphs]] owns its distinct graph notation and time accounting. Existing Imprint storyboards are not silently migrated or assigned final rendering treatment by this addition.

## Current presentation direction

CS001 and CS002 use animated-comic presentation: illustrated compositions, limited motion, transitions, speech bubbles, and optional voice-over. Max Payne / Gravity Rush are format references, not assets or material to copy. This is not approval of a rendering implementation or a campaign-wide mandatory style.
