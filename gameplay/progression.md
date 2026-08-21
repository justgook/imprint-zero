---
title: Progression
summary: An authored campaign shaped by persistent discovery and a meaningful death cycle.
eyebrow: Gameplay
status: in-progress
---

## Leading structure

> **Accepted** — The game uses an **authored campaign** rather than procedural levels or fully randomized runs. Zones, Encounters, and major set pieces are deliberately composed and remain stable enough for players to learn and master.

Replay value should come from:

- materially different [[Characters/Overview|playable characters]] and [[Gameplay/Overdrive|Specializations]];
- [[Imprints/Overview|Memory Imprints]] that change both knowledge and capability;
- alternate routes and persistent shortcuts;
- discoveries that change later attempts;
- equipment, weapon, or skill choices;
- mastery of known encounters;
- selected post-death choices.

## Memory Imprints

> **Accepted** — Memory Imprints connect discovery to progression. They expose evidence about identity and institutional purpose while granting techniques, knowledge, interactions, or route access.

The canonical Imprint page owns unresolved capacity, assignment, transfer, compatibility, and in-campaign loss rules.

## Character, Specialization, and Overdrive progression

> **Accepted** — Each of four Characters has three Hub-selected Specializations. A Character becomes available with a default Specialization; two additional Specializations unlock through later campaign play. Selecting a Specialization changes normal stats, skills, weapon and armour compatibility, and play style for the entire Mission.

> **Accepted** — Overdrive remains concealed at the start of the campaign. [[Missions/M05|The Four Trials]] later reveals and unlocks it once for the entire crew through four character-specific trials. After that global reveal, every unlocked Specialization has its unique Overdrive, and newly acquired Specializations include theirs without another Overdrive-specific unlock.

The early Character sequence is accepted: ROOK at new game, VECTOR at the first Hub, RAM after [[Missions/M03|No Survivors Logged]], and RELAY after [[Missions/M04|Production Halt]]. Acquisition methods for the eight non-default Specializations remain unresolved. See [[Gameplay/Overdrive|Specializations and Overdrive]] for accepted boundaries.

## Mission compatibility

> **Accepted** — M01–M05 form a controlled crew introduction and may restrict or switch the playable Character. M01 begins with one Character, later Missions expand the available roster, M04 features its required new Character, and M05 deliberately breaks the normal deployment rule by switching across the full crew.

> **Accepted** — From HUB1 onward, every Mission's critical path is completable by every Character and unlocked Specialization. Character-owned signature verbs may gate only optional routes, shortcuts, Imprints, Specializations, equipment access, and other rewards. Every Specialization of that Character retains the route-access verb. An inaccessible optional route should remain legible enough to motivate replay with the relevant crew member.

## Act II Mission availability

> **Accepted** — HUB1 initially offers the first Mission in each of B03–B06. Completing a Mission returns the player to HUB1, keeps that Mission replayable, and unlocks the next Mission in the same biome. The player may alternate biomes, continue one biome, or replay any completed Act II Mission in any order allowed by those unlocks.

> **Accepted** — Completing the fourth Act II Guardian returns the player to HUB1 with M06 available; it does not automatically advance the campaign. The player may continue replaying Act II Missions. Launching M06 requires explicit confirmation that entering HUB2 and B07 permanently closes B03–B06 and their undiscovered rewards for the current campaign.

All Specialization Imprints and all four biome Memory Imprints required for the extended route must be recovered before M06 begins. Eligibility is established before M06 even though the hidden access appears later in M07.

## Introduction exception

> **Accepted** — The new game begins directly in [[Missions/M01|Cold Deployment]] with preselected character and equipment. Failure restarts inside the introduction; the Hub and standard death cycle unlock only after first success. The player is not told that Overdrive exists during the introduction.

## Death cycle

> **In progress** — “Roguelite” is too broad to serve as the canonical term for this design. The intended idea is narrower: death returns the player to a decision context, preserves selected progress, and changes the choices available for the next attempt without procedurally replacing the authored world.

The death cycle returns to decisions made by an active crew at the shared Hub. World state, discoveries, and shortcuts persist across character selection. One crew member is deployed at a time, and character reselection occurs only at the hub.

The death cycle may reopen:

- Character and Specialization selection;
- loadout or weapon selection;
- upgrade investment;
- route choice;
- newly discovered information or access.

The exact rules remain unresolved.

## Checkpoints and shortcuts

Persistent shortcuts are preferred over a dense chain of invisible restart checkpoints because they turn progress into learned and changed world structure. However, forcing long repeated traversal can undermine action-platformer pacing.

Fast travel is not assumed. It remains an option only if the final world structure needs it and if it can be presented without erasing spatial meaning.

## Resources and persistence

> **Accepted** — The [[Equipment/Overview|crew stash]] shares weapons, armour, consumables, currencies, and key items. Item upgrades remain attached to the item; innate abilities and personal mastery remain character-owned. Specializations constrain compatible weapon and armour classes rather than creating separate inventories.

> **Open question** — Which shared resources can be lost or recovered through the death cycle?

## Difficulty and mastery

Challenge should grow through new patterns, spatial demands, enemy combinations, route decisions, and character mastery—not only larger health or damage values.

## Completion and discovery report

> **Accepted** — The Standard ending resolves the immediate campaign conflict and must feel like a satisfying standalone completion. Deeper routes add evidence and interpretation rather than repairing an intentionally incomplete ending.

> **Accepted** — One unusually thorough campaign can reach the extended true route by satisfying its in-campaign requirements. Cross-run progression is not required, but a blind first completion is expected to miss evidence and motivate another campaign.

The game does not expose biome Memory Imprints as a four-part route checklist during play. They should initially read as optional lore. Both the Standard and early Communion endings reveal the same results-report structure, placing ordinary performance statistics beside previously hidden completion totals.

| Report field | Purpose |
|---|---|
| Completion time | Familiar performance context |
| Enemies defeated | Familiar performance context |
| Bullets fired and accuracy | Familiar performance context |
| Biome Memory Imprints found out of 4 | First explicit evidence that the lore forms an incomplete set |
| Specializations unlocked out of 12 | Shows that substantial crew development remains |

Performance statistics are informational only. Completion time, enemy count, shots, accuracy, score, difficulty, and similar metrics never affect ending or hidden-route eligibility. Only the twelve in-campaign Specializations and four biome Memory Imprints establish access.

The report does not announce a true ending or explain how the missing discoveries interact. A Communion completion may show much lower campaign completion than the Standard ending; that contrast is intentional. The report's purpose is to let the player infer that the campaign contains a larger pattern and choose to investigate it.

### Persistence across campaigns

| Reset for a new campaign | Preserve globally |
|---|---|
| Character availability and campaign sequence | Viewed memory and lore scenes |
| Specializations and Equipment Imprints | Character-specific variants already witnessed |
| Acquired equipment and campaign resources | Previous ending reports and performance statistics |
| Biome Memory Imprints and hidden-route eligibility | Completed-ending record |

The global archive helps the player compare evidence across completions but never satisfies an in-campaign requirement. Each attempt at the extended route must recover its required Specializations and biome Memory Imprints within that campaign. Additional completions expose alternative Character perspectives, routes, discoveries, and interpretations without producing one objectively complete explanation of the crew's origin.

### Repeat-campaign presentation

> **Accepted** — Every new campaign retains the complete M01–M05 crew-introduction sequence and grants no automatic Character or Specialization unlocks. After the player has reached an ending at least once, tutorial prompts may be disabled, viewed scenes and dialogue may be skipped, and loading or transition friction should be minimized.
