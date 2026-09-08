---
title: Imprints
summary: Memory and lore artifacts that unlock Specializations, equipment access, Overdrive, or hidden campaign evidence.
eyebrow: Game content
status: in-progress
---

## Design role

> **Accepted** — Every Memory Imprint combines a narrative payload with a progression result. It adds lore through a memory or cutscene and changes what becomes available to the player.

An Imprint cannot exist only as passive lore or a context-free key. Its memory may be incomplete, subjective, or misleading, but its progression result must be explicit.

A shared Imprint preserves the same underlying evidence across Characters while foregrounding a memory fragment, interpretation, or reaction specific to the deployed Character. This creates replay perspective without requiring four unrelated versions of every scene. Biome Memory Imprints contain material relevant to the whole crew, but the recovering Character determines what the scene emphasizes.

| Imprint role | Progression result | Narrative requirement |
|---|---|---|
| Specialization Imprint | Directly unlocks one authored Specialization | Reveals memory or lore relevant to that Character and configuration |
| Equipment Imprint | Reveals a blueprint, source, shop item, crafting path, or other opportunity; equipment must still be acquired | Explains or complicates the equipment's origin and institutional purpose |
| Biome Memory Imprint | Contributes hidden evidence required for the M07 route; grants no direct combat power | Provides distinct memories relevant to every crew member |
| Overdrive Imprint | M05 exception that reveals and activates the concealed Overdrive system | Connects each crew member to the recovered system through a memory or cutscene |

## Character identity

> **Accepted** — Memory Imprints expand a character without replacing that character’s innate movement and combat identity.

### Specialization Imprint acquisition

> **Accepted** — Any Character who reaches a Specialization Imprint may recover it and unlock its authored recipient's Specialization. The Imprint adds no recipient-only collection lock; Character-specific optional routes may still restrict who can reach it.

The memory remains centered on the intended recipient, regardless of who collects it. Unlike shared biome memories, collection by another Character does not change whose memory is shown.

> **Accepted** — Collection plays the memory and immediately registers the Specialization unlock without changing the deployed Character or Specialization. The new configuration becomes selectable at the next Hub visit; collection never forces a control handoff or field transformation.

## Known Imprints

> **TODO — Equipment catalogue:** Define the number and distribution of Equipment Imprints and link each authored entry to its equipment-access result.

| Role | Current count | Catalogue or owning page |
|---|---:|---|
| Overdrive | 4 | [[Imprints/Overdrive|The Four Trials]] |
| ROOK Specializations | 2 | [[Imprints/Rook Heavy|Heavy]], [[Imprints/Rook Assault|Assault]] |
| VECTOR Specializations | 2 | [[Imprints/Vector Phase|Phase]], [[Imprints/Vector Hunter|Hunter]] |
| RAM Specializations | 2 | [[Imprints/Ram Siege|Siege]], [[Imprints/Ram Onslaught|Onslaught]] |
| RELAY Specializations | 2 | [[Imprints/Relay Network|Network]], [[Imprints/Relay Null|Null]] |
| Biome Memory | 4 | [[Biomes/B03|B03]], [[Biomes/B04|B04]], [[Biomes/B05|B05]], [[Biomes/B06|B06]] |

These sixteen planned Imprints are not all fully authored. [[Gameplay/Overdrive|Specializations and Overdrive]] owns configuration behavior.

## Specialization Imprint distribution

> **TODO — Discovery routes:** Define the optional route, challenge, and collection interaction on each owning Mission page. Mission placements and discovery-context premises are accepted; storyboard execution remains subject to review.

> **Accepted** — B03–B06 each contain two Specialization Imprints belonging to different Characters. Each Character's two additional Specializations are found in different biomes.

| Discovery biome | Specialization Imprints | Narrative connection |
|---|---|---|
| [[Biomes/B03|B03 — Mnemonic Basilica]] | [[Imprints/Rook Heavy|ROOK Heavy]], [[Imprints/Relay Null|RELAY Null]] | Institutional clearance and destruction of evidence |
| [[Biomes/B04|B04 — The Fallen Halo]] | [[Imprints/Rook Assault|ROOK Assault]], [[Imprints/Ram Onslaught|RAM Onslaught]] | Orders resisted during deployment |
| [[Biomes/B05|B05 — Verdant Null]] | [[Imprints/Vector Phase|VECTOR Phase]], [[Imprints/Relay Network|RELAY Network]] | Protection versus coercion |
| [[Biomes/B06|B06 — Sovereign Stack]] | [[Imprints/Vector Hunter|VECTOR Hunter]], [[Imprints/Ram Siege|RAM Siege]] | Targeted enforcement and controlled departures |

> **Accepted** — Each biome offers one Specialization Imprint in its first main Mission and the other in its second, both on optional discovery routes. Neither is placed behind a hidden Special Mission or the biome Guardian, allowing new configurations to be used before the Guardian encounter.

> **Accepted** — Placement must connect each cutscene to its discovery biome's fiction, not merely distribute unlocks evenly. Scene staging and the discovery context should reinforce the owning biome's themes. These connections do not by themselves confirm where or when the remembered event occurred.

## Equipment and research boundary

| Concern | Canonical owner |
|---|---|
| Equipment Imprint's narrative payload and revealed acquisition opportunity | The individual Imprint page |
| Data Fragment progression and Blueprint reward exclusions | [[Gameplay/Blueprints#ownership|Blueprints and research]] |
| Unlocked item's behavior and compatibility | [[Equipment/Overview|Equipment catalogue]] |

An Equipment Imprint reveals an opportunity; it is not itself a Data Fragment or a completed Equipment unlock.

## Extended-route prerequisites

> **TODO — Biome Imprint authoring:** Define each assigned Imprint's hidden location, discovery challenge, and Character-specific memory payload against the accepted [[Missions/M07#voiceprint-sequence|M07 authentication sequence]].

> **Accepted** — Each of the four biome Memory Imprints is hidden within a Special Mission, with one per Special Mission. Completing that Mission does not automatically collect its Imprint. This complements the two Specialization Imprints in each biome's first and second main Missions; the Guardian Mission has no Imprint assigned by this distribution.

| Origin biome | Memory Imprint placement |
|---|---|
| [[Biomes/B03|B03]] | [[Missions/MS01#biome-memory-imprint|MS01 — Unscheduled Service]] |
| [[Biomes/B04|B04]] | [[Missions/MS02#biome-memory-imprint|MS02]] |
| [[Biomes/B05|B05]] | [[Missions/MS03#biome-memory-imprint|MS03]] |
| [[Biomes/B06|B06]] | [[Missions/MS04#biome-memory-imprint|MS04]] |

> **Accepted** — Each cross-biome Special Mission contains its origin biome's Memory Imprint. Collection is independent of shortcut completion and other hidden ending conditions: neither grants the Imprint automatically, and collecting it does not satisfy those separate conditions.

Biome Memory Imprints are separate catalogue entries from Specialization Imprints, not alternative rewards for the same discovery.

| Concern | Canonical owner |
|---|---|
| Act II collection deadline | [[Gameplay/Progression#act-ii-mission-availability|Act II Mission availability]] |
| Eligibility and terminal response | [[Missions/M07#exterior-eligibility|M07 exterior eligibility]] |
| Memory evidence applied to authentication | [[Missions/M07#voiceprint-sequence|M07 voiceprint authentication]] |
| Hidden totals and ending-report reveal | [[Gameplay/Progression#completion-and-discovery-report|Completion and discovery report]] |
| Current-campaign evidence versus archived memories | [[Gameplay/Progression#persistence-across-campaigns|Persistence across campaigns]] |

## Freight Terminal candidate

> **TODO — Encounter Imprint:** Define the first concrete exploration Imprint only after the flat [[Gameplay/Representative Encounter|Freight Terminal encounter]] works.

Its later validation must:

* reveal why the sealed identity archive matters;
* open a maintenance route or meaningful interaction;
* change how the player understands the introduction Mission;
* preserve [[Characters/Rook|ROOK’s]] innate identity.

## Unknown rules

> **TODO — Acquisition and compatibility:** Define the collection interaction and unlock presentation for Specialization Imprints. Resolve any remaining compatibility or assignment questions for other Imprint roles without assuming Imprints are equippable inventory items or reopening the accepted cross-Character Specialization collection rule.

> **TODO — Worked example:** Document one complete Imprint from discovery through narrative revelation and mechanical use.

Acquired-reward retention and campaign resets follow [[Gameplay/Progression#death-and-mission-retry|death and Mission retry]] and [[Gameplay/Progression#persistence-across-campaigns|persistence across campaigns]]; death-related Imprint loss is not an open decision.
