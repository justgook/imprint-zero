---
title: Playable Crew
summary: Canonical roster and shared rules for Imprint Zero's authored playable characters.
eyebrow: Characters
status: in-progress
---

## Crew model

> **Accepted** — All playable characters coexist as one active crew at the Hub and participate in one persistent campaign.

A new game preselects [[Characters/Rook|ROOK]], the crew's Rifle Marine, and deploys directly into the introduction Mission. [[Characters/Vector|VECTOR]] speaks over radio before the player physically reaches the Hub, establishing operational familiarity and role rather than biography. A terminal briefly displays ROOK under another designation marked killed in action, but neither the crew nor [[NPCs/Operator|OPERATOR]] reacts aloud. [[Characters/Ram|RAM]] and [[Characters/Relay|RELAY]] join later in the campaign.

After the introduction, the player ordinarily deploys one crew member at a time. The active character remains fixed until death or voluntary return. At the Hub, any unlocked character can be selected freely; death does not remove or randomize characters. Scripted character handoffs inside [[Missions/M05|The Four Trials]] are the sole accepted exception.

## Deployment identity

> **Accepted** — Character, Specialization, and Overdrive are separate concepts.

- A **Character** is the persistent person and owns innate movement identity, narrative identity, equipment compatibility, and the signature verb used to access Character-gated optional routes.
- A **Specialization** is one of three Hub-selected play styles belonging to that Character. It varies how the Character fights without removing or replacing the Character's optional-route access verb. The baseline is the default Specialization, not a separate fourth configuration.
- **Overdrive** is the temporary transformation unique to the selected Specialization.

The four Characters therefore provide twelve selectable Specializations. Selecting a Specialization changes the entire normal Mission kit; the character does not remain in a shared baseline state while waiting to activate Overdrive.

## Specialization identity contract

> **Accepted** — A Specialization must differ by more than its primary weapon.

| Required distinction | Ownership |
|---|---|
| Signature-verb skill | Preserves the Character's route function while changing combat expression; may satisfy the unique-skill requirement itself |
| Stat Tier profile | Distinct Integrity, Defense, and Mobility relationship |
| Tool expression | Varies Character-owned common tools when present; otherwise tactical Equipment provides an equivalent non-primary-weapon distinction |
| Additional move or skill | Optional unless the signature-verb skill does not sufficiently distinguish the Specialization |
| Weapon Family | Supports multiple compatible Equipment items within one combat identity |
| Overdrive | One unique temporary transformation |

## Move availability matrix

> **TODO — Variable moves:** Resolve every `?` while narrowing the four Character pages. Add a column whenever a newly accepted move family requires distinct gameplay and animation coverage.

`●` means the action family is required, `—` means intentionally unavailable, and `?` means unresolved. A check represents gameplay and animation coverage, not one animation clip; exact animation IDs, variants, transitions, weapons, and timing belong to the owning Character page.

| Move / animation family | [[Characters/Rook|C11]] | [[Characters/Rook|C12]] | [[Characters/Rook|C13]] | [[Characters/Vector|C21]] | [[Characters/Vector|C22]] | [[Characters/Vector|C23]] | [[Characters/Ram|C31]] | [[Characters/Ram|C32]] | [[Characters/Ram|C33]] | [[Characters/Relay|C41]] | [[Characters/Relay|C42]] | [[Characters/Relay|C43]] |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Idle | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Run | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Jump | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Fall | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Land | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Aim / fire | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Interact | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Hurt | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Defeat | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Overdrive | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Breach | — | — | — | — | — | — | ● | ● | ● | — | — | — |
| Slide | ● | ● | ● | ? | ? | ? | — | — | — | — | — | — |
| Wall move | ? | ? | ? | ● | ● | ● | — | — | — | — | — | — |
| Dash | ? | ? | ? | — | ● | — | — | — | — | — | — | — |
| Charge | ? | ? | ? | ? | ? | ? | ● | — | — | — | — | — |
| Anchor | ? | ? | ? | ? | ? | ? | ● | ● | — | — | — | — |
| Recoil move | ? | ? | ? | — | — | ● | — | — | — | — | — | — |
| Hack / interface | ? | ? | ? | ? | ? | ? | — | — | — | ● | ● | ● |
| Deployable / Controlled Unit | ? | ? | ? | ? | ? | ? | — | ● | — | — | ● | — |
| Field Integration / Chassis | — | — | — | — | — | — | — | — | — | ● | — | — |
| Direct Control transition | — | — | — | — | — | — | — | — | — | — | ● | — |
| Hack Program activation | — | — | — | — | — | — | — | — | — | — | — | ● |

## Specialization stat matrix

> **TODO — Stat tiers:** Assign every unresolved `?` through movement and combat prototypes. Existing unapproved reference-page values are not accepted inputs.

The overview records each Specialization's canonical [[CONTEXT#stat-tier|1–5 Stat Tiers]]. [[Gameplay/Gameplay Math|Shared gameplay equations]] map Integrity, Defense, and Mobility tiers into runtime values. Weapons own offensive values; moves, skills, equipment, and rule tags express control and utility. `0` means genuinely absent, while `?` remains unresolved.

| Stat | [[Characters/Rook|C11]] | [[Characters/Rook|C12]] | [[Characters/Rook|C13]] | [[Characters/Vector|C21]] | [[Characters/Vector|C22]] | [[Characters/Vector|C23]] | [[Characters/Ram|C31]] | [[Characters/Ram|C32]] | [[Characters/Ram|C33]] | [[Characters/Relay|C41]] | [[Characters/Relay|C42]] | [[Characters/Relay|C43]] |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Integrity | 3 | 4 | 3 | 1 | 2 | 2 | 3 | 5 | 4 | 1 | 1 | 1 |
| Defense | 3 | 3 | 2 | 2 | 1 | 2 | 4 | 2 | 2 | 1 | 1 | 1 |
| Mobility | 3 | 2 | 4 | 5 | 5 | 4 | 1 | 1 | 2 | 3 | 2 | 4 |

## Identity

Crew members know themselves as soldiers or marines and retain operational skill, but know that their autobiographical identity is missing or unreliable. They may be brainwashed originals, clones, manufactured people, or something else.

Soldiering is initially their only stable identity. They can refuse orders physically, but conditioning makes doubt feel improper and unsafe.

## Crew dynamics

> **Accepted** — Crew roles emerge through repeated behaviour rather than formal labels or explicit archetype naming.

| Character | Recurring contribution |
|---|---|
| [[Characters/Rook|ROOK]] | Coordinates immediate action and informally holds the team together without appointed command authority. |
| [[Characters/Vector|VECTOR]] | Observes from overlooked positions, speaks rarely, and surfaces details others miss. |
| [[Characters/Ram|RAM]] | Maintains momentum and morale through appetite, confidence, practical force, and blunt questions. |
| [[Characters/Relay|RELAY]] | Researches the Mesh, decodes machine-held evidence, and connects technical relationships without becoming an infallible narrator. |

## Accepted roster

- [[Characters/Rook|ROOK]] — Rifle Marine; balanced baseline and mechanical control case; available at new game.
- [[Characters/Vector|VECTOR]] — stealth and mobility specialist; fastest and most manoeuvrable crew member; available at the first Hub arrival.
- [[Characters/Ram|RAM]] — full-body powered-armour specialist; defence, heavy fire, melee commitment, and destructive entry; introduced during the second boss Encounter in [[Missions/M03|No Survivors Logged]].
- [[Characters/Relay|RELAY]] — Systems Specialist; infrastructure and area control; recovered through the RAM-required [[Missions/M04|Production Halt]] Special Mission.

> **Accepted** — The first Hub arrival offers VECTOR as a contrasting playable character alongside ROOK. Hearing VECTOR during the introduction creates recognition and a reason to inspect the alternative Character at the Hub.

> **In progress** — Mission names and early Zone order are accepted. Boss identities, exact introduction staging, and failure rules surrounding RAM and RELAY still require design.

## Catalogue structure

> **Accepted** — The Character catalogue contains this overview and exactly four crew-member pages: [[Characters/Rook|ROOK]], [[Characters/Vector|VECTOR]], [[Characters/Ram|RAM]], and [[Characters/Relay|RELAY]]. Specializations are dedicated sections within their owning Character page rather than separate wiki pages.

This overview owns broad roster comparison and crew-wide rules. Each Character page narrows from the persistent crew member into all three Specializations, their moves, stats, skills, animations, and equipment references. `C11–C43` are stable production IDs whose current table links point to the owning Character page; heading anchors may target their eventual dedicated sections without creating another document.

The exact section template remains unresolved until information ownership is confirmed.

## Shared ownership

- Equipment and ordinary inventory belong to the crew stash.
- Item upgrades remain attached to the item.
- Innate abilities and personal mastery remain character-owned.
- Specializations define stats, skills, weapon classes, armour classes, and unique Overdrives.
- Equipment remains crew-owned and can be used only by compatible Specializations.
- Specialization sections reference default and compatible items by stable Equipment ID; item pages own intrinsic damage, cadence, penetration, range, upgrades, and acquisition.
- Character pages supply stats and explicit modifiers to [[Gameplay/Gameplay Math|Gameplay Math]] but do not duplicate global equations.
- World discoveries and shortcuts belong to the campaign.

> **Needs image** — Replace card placeholders and produce a four-Character silhouette lineup after gameplay prototypes validate proportions, equipment scale, and movement poses.
