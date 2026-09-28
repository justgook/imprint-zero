---
title: Asset registry
summary: Provenance and review status of existing visual references and exploratory Mission concepts.
eyebrow: Production
status: in-progress
---

## Scope

This registry tracks **existing visual files**, not proposed gameplay systems, future environment kits, enemy rosters, dialogue counts, or a production budget. Character moves, skills, and Equipment are defined on their owning [[Characters/Overview|Character]] and [[Equipment/Overview|Equipment]] pages; Mission pages own local needs. Do not add an asset row until there is an actual reference, sample, or scoped deliverable to track.

The crew sheets and Mission concepts below are review material, **not** approved gameplay sprites, environment kits, or a shared rendering style. Compare them at gameplay scale before accepting art direction. [[Design/Art Direction|Art Direction]] owns shared decisions after cross-Mission review. Record provenance and license terms before using third-party material; do not embed restricted source files. Existing `VIS` IDs remain stable, including gaps left by removed speculative entries.

## Visual references and concepts

| ID | Existing visual | Provenance | Review needed | Status |
|---|---|---|---|---|
| VIS-01 | [[Characters/Rook#appearance|ROOK crew sheet and turnaround]] | User-refined crew sheet already in wiki; modelling reference imported from `InprintZero/modeling/model ROOK.png` | C11 gameplay silhouette and motion; M01 likeness | Reference candidate |
| VIS-02 | [[Enemies/E001|E001 concept image]] | Existing `images/enemies/e001.png`; creation source not recorded here | Reassess silhouette, scale, and style once M01's Enemy behaviour is defined | Provisional image |
| VIS-03 | [[Enemies/E002|E002 concept image]] | Existing `images/enemies/e002.png`; creation source not recorded here | Reassess silhouette, scale, and style once M01's Enemy behaviour is defined | Provisional image |
| VIS-05 | [[Missions/M01#mission-visual-reference|M01 security-hold concept]] | Generated from M01 and ROOK/E001/E002 text briefs; ROOK source image was not supplied to generation | ROOK likeness, encounter readability, spatial layout, production feasibility | Review candidate |
| VIS-08 | [[Characters/Vector#appearance|VECTOR crew sheet and turnaround]] | Older crew sheet already in wiki; preferred modelling reference imported from `InprintZero/modeling/model VECTOR.png` | Use turnaround for likeness; crew sheet is outdated for appearance; validate gameplay silhouette and Specialization variations | Reference candidate |
| VIS-09 | [[Characters/Ram#appearance|RAM crew sheet and turnaround]] | User-refined crew sheet already in wiki; modelling reference imported from `InprintZero/modeling/model RAM.png` | Armoured silhouette and gameplay motion | Reference candidate |
| VIS-10 | [[Characters/Relay#appearance|RELAY crew sheet and turnaround]] | User-refined crew sheet already in wiki; modelling reference imported from `InprintZero/modeling/RELAY/BEST RELAY.png` | Accepted prosthesis boundary at gameplay scale | Reference candidate |
| VIS-11 | [[Missions/M02#mission-visual-reference|M02 hospital concept]] | Generated from M02 proposal and VECTOR text description; VECTOR source image was not supplied to generation | Single-Character deployment, hospital readability, route cue, production feasibility | Review candidate |
| VIS-12 | [[Design/Art Direction#aspirational-gameplay-references|M01 aspirational mock A]] | User-supplied AI image from `InprintZero/screenshots/ChatGPT Image Aug 6, 2026, 12_10_41 PM.png`; PNG ancillary metadata removed without changing the encoded pixels | Compare gameplay readability and feasibility; generated HUD, labels, and encounter are not approved design | Aspirational reference |
| VIS-13 | [[Design/Art Direction#aspirational-gameplay-references|M01 aspirational mock B]] | User-supplied AI image from `InprintZero/screenshots/ChatGPT Image Aug 6, 2026, 12_10_44 PM.png`; PNG ancillary metadata removed without changing the encoded pixels | Compare gameplay readability and feasibility; generated HUD, labels, and encounter are not approved design | Aspirational reference |
| VIS-14 | [[Design/Art Direction#aspirational-gameplay-references|M04 aspirational mock]] | User-supplied AI image from `InprintZero/screenshots/ChatGPT Image Aug 6, 2026, 12_10_25 PM.png`; PNG ancillary metadata removed without changing the encoded pixels | Compare foundry action and RAM readability with reviewed M04 layout and production capacity; generated HUD and objectives are not approved design | Aspirational reference |
| VIS-15 | [[Missions/M01#ashfall-style-study-with-e001-and-e002|M01 Ashfall style study]] | Generated with VIS-13 as style/composition reference, `images/enemies/e001.png` and `images/enemies/e002.png` as bot references, and `images/characters/references/rook-turnaround.png` as ROOK reference; PNG ancillary metadata removed | Compare gameplay-scale silhouettes and feasibility with VIS-05 and M01's aspirational target; pictured count and geometry are not accepted placements | Review candidate |
| VIS-16 | [[Missions/M02#ashfall-hospital-style-study|M02 Ashfall hospital style study]] | Initially generated with VIS-15/VIS-13 style, VIS-11 setting, and `images/characters/references/vector-turnaround.png` for VECTOR; revised using the prior study, VIS-15, and VECTOR's preferred turnaround to improve likeness, replace the broken edge with windows, and stage a Coffin; PNG metadata removed | Compare VECTOR, Coffin staging, windowed hospital and spatial feasibility against reviewed M02 route; depicted arrival and upper floor are not approved placements | Review candidate |
