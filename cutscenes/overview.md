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
| [[Cutscenes/CS004|CS004]] | RAM meets RELAY in her secured workspace | M04 R06, after physical access opens |
| [[Cutscenes/CS005|CS005]] | RELAY returns to the assembled crew | After M04 R08 / extraction, during HUB0 arrival; Hub-scene placement may be reorganized later |
| [[Cutscenes/CS006|CS006]] | RELAY shares a new Helix access path | HUB0 after CS005, before M05 preparation; current duration allocation is post-M04 |
| [[Cutscenes/CS007|CS007]] | ROOK Overdrive memory | M05 R04 convergence, before the Overdrive finish; branch order is free |
| [[Cutscenes/CS008|CS008]] | VECTOR Overdrive memory | M05 R06 convergence, before the Overdrive finish; branch order is free |
| [[Cutscenes/CS009|CS009]] | RAM Overdrive memory | M05 R08 convergence, before the Overdrive finish; branch order is free |
| [[Cutscenes/CS010|CS010]] | RELAY Overdrive memory | M05 R09 endpoint, before R10; no other Character handoff |

## Ownership and identity

> **Accepted** — Cutscenes have their own sidebar section, stable `CS###` IDs, `type: cutscene`, and lowercase ID filenames. Scene IDs do not change when their placement moves. Catalogue/sidebar ordering may follow story order; numeric IDs record stable allocation, not playback order. Thus CS003 precedes CS001/CS002 in the campaign without renumbering them.

| Owner | Responsibility |
|---|---|
| Cutscene page | Panel/transition direction, sound, Character variants, duration target, presentation handoff, and links to exact text |
| Mission graph | Where/when the scene is encountered and its placement in the Mission sequence |
| Boss page | Combat trigger, HP/phase rules, and post-scene encounter state |
| Gettext catalogue | Approved wording and translations |

A cutscene is not a room, item placement, or radio exchange. [[Wiki Rules?section=mission-room-graphs|Mission room graphs]] owns its distinct graph notation and time accounting. CS007–CS010 explicitly own the existing Overdrive memory storyboards; [[Imprints/Overdrive|the Imprint catalogue]] retains the narrative payloads. Other Imprint storyboards are not silently migrated.

## Current presentation direction

CS001–CS010 use animated-comic presentation: illustrated compositions, limited motion, transitions, speech bubbles, and optional voice-over. Max Payne / Gravity Rush are format references, not assets or material to copy. This is not approval of a rendering implementation or a campaign-wide mandatory style.
