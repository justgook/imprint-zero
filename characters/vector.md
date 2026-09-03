---
id: C2
type: character
title: VECTOR
summary: Fastest and most manoeuvrable crew member, built around stealth, wall movement, and decisive positioning.
eyebrow: Playable character
status: in-progress
---

## Specializations

| ID | Display name | Combat identity |
|---|---|---|
| `C21` | Ghost VECTOR | Stealth, undetected critical attacks, and surface traversal |
| `C22` | Phase VECTOR | Aggressive katana pressure and invulnerable phase shifting |
| `C23` | Hunter VECTOR | Long-range sniper fire, recoil management, and resonance-based enemy control |

## Crew role and voice

> **Accepted** — VECTOR's Character-wide invisibility is behavioural and spatial; literal Active Camouflage remains Ghost-specific Equipment.

She is serious, quiet, observant, and comfortable occupying shadows, high surfaces, room edges, or a position beside another person without announcing herself. She listens to more than she comments on and sometimes withholds enough context to make coordination difficult. Unexpected appearances come from stealth-trained movement and staging rather than universal supernatural concealment; Phase and Hunter remain mechanically visible.

## Stat Tiers

> **Accepted** — Ghost and Phase are VECTOR's fastest configurations; Hunter trades one Mobility Tier for greater stability at range.

See the canonical [[Playable Crew#specialization-stat-matrix|Specialization Stat matrix]]. [[Gameplay/Gameplay Math|Gameplay Math]] owns tier conversion and the internal Specialization budget.

## Moves and animations

> **TODO — VECTOR animations:** Define exact animation IDs, transitions, and the differences between ordinary Wall Run and Ghost's equipment-assisted climbing.

`●` means required, `—` intentionally unavailable, and `?` unresolved.

| Move / animation family | C21 | C22 | C23 |
|---|:---:|:---:|:---:|
| Idle | ● | ● | ● |
| Run | ● | ● | ● |
| Jump | ● | ● | ● |
| Fall | ● | ● | ● |
| Land | ● | ● | ● |
| Aim / attack | ● | ● | ● |
| Interact | ● | ● | ● |
| Hurt | ● | ● | ● |
| Defeat | ● | ● | ● |
| Overdrive | ● | ● | ● |
| Wall Run | ● | ● | ● |
| Equipment-assisted wall / ceiling climb | ● | — | — |
| Phase Shift | — | ● | — |
| Recoil displacement | — | — | ● |

## Shared movement

> **Accepted** — VECTOR is the crew's fastest and most manoeuvrable Character. Every VECTOR Specialization retains Wall Run as the Character-owned optional-route verb.

| Wall Run direction | Behaviour |
|---|---|
| Upward | Run up a valid wall surface |
| Forward | Run horizontally along a valid wall surface |

| Shared constraint | Rule |
|---|---|
| Duration | Limited by authored time or distance; exact value requires testing |
| Commitment | VECTOR cannot stop, reverse, or remain attached during ordinary Wall Run |
| Detachment | Jump leaves the wall |
| Protection | No invulnerability |
| Route function | Identical optional-route language for Ghost, Phase, and Hunter |

Ghost's [[Equipment/EQ004|Climbing Claws]] may transition from Wall Run into sustained attachment, stopping, reversing, climbing, and ceiling movement. This Equipment extension does not create a separate Specialization-only route gate.

| Specialization | Combat during Wall Run |
|---|---|
| C21 Ghost | May throw Kunai; a valid close target receives the contextual Kunai melee strike. The same attacks remain available while attached with Climbing Claws. |
| C22 Phase | May activate Phase Shift, but must detach before beginning a Katana attack. |
| C23 Hunter | Cannot fire the Sniper Rifle; Recoil Routing instead transitions into Wall Run after a shot carries Hunter into a valid wall. |

## Loadout structure

> **Accepted** — Each VECTOR Specialization begins with three Equipment items whose slot roles support that Specialization's combat identity. This is currently a VECTOR structure rather than a crew-wide rule.

Equipment belongs to the shared crew stash. Skills and innate movement remain Character- or Specialization-owned.

| Availability event | Equipment added to crew stash |
|---|---|
| VECTOR becomes selectable at the first Hub with default C21 Ghost | `EQ002–EQ004` |
| C22 Phase unlocks | `EQ005–EQ007` |
| C23 Hunter unlocks | `EQ008–EQ010` |

Each initial set makes its Specialization immediately playable. Future alternatives use separate Equipment acquisition paths.

## Skill structure

> **Accepted** — Every VECTOR Specialization owns exactly three skills: shared Wall Run, one identity passive, and one unique Overdrive.

Equipment activations—including camouflage, Phase Shift, Flash Charges, ammunition selection, and Targeting Optics—are Equipment actions rather than additional Specialization skills.

| Skill slot | C21 | C22 | C23 |
|---|---|---|---|
| Shared movement | Wall Run | Wall Run | Wall Run |
| Identity passive | Ambush | Reprisal | Recoil Routing |
| Overdrive | Blind Spot | Phase Cascade | Deadlock |

## C21

### Equipment

| Slot | Equipment item | Function |
|---|---|---|
| Primary weapon | `EQ002` — [[Equipment/EQ002|Kunai]] | Thrown at range or used as a contextual melee strike; delivers Ambush Critical |
| Tactical system | `EQ003` — [[Equipment/EQ003|Active Camouflage Module]] | Breaks enemy detection and target tracking using limited charge |
| Gear | `EQ004` — [[Equipment/EQ004|Climbing Claws]] | Extends surface traversal into sustained wall and ceiling climbing |

### Skills

> **TODO — Ghost skills:** Define inputs, awareness-state transitions, critical multiplier, noise radius, Ambush recharge modifier, Blind Spot duration, and its automatic reactivation delay.

| Skill ID | Skill | Type | Effect |
|---|---|---|---|
| C21-M1 | Wall Run | Innate movement | Runs upward or forward along valid walls; exact duration and recovery remain unresolved |
| C21-P1 | Ambush | Passive | The first hit against an enemy in the [[Gameplay/Mechanics#enemy-awareness|Unaware or Searching state]] becomes an Ambush Critical, regardless of whether camouflage created the opening |
| C21-OD | Blind Spot | Overdrive | Active Camouflage stops draining; after an Ambush breaks concealment, camouflage automatically reactivates following a short damage-free and contact-free delay; Climbing Claws move at Wall Run speed |

An Ambush Critical creates noise, changes awareness according to the shared enemy-awareness rules, and restores a fixed amount of Active Camouflage charge on hit rather than only on kill. The same target can be ambushed again only after Ghost genuinely escapes Tracking. Ambush applies to every Ghost-compatible weapon so later Equipment does not remove the Specialization's identity.

Blind Spot grants no invulnerability or intrinsic weapon-damage increase. Attacking still breaks concealment and creates noise, preserving the approach–attack–relocate loop.

## C22

### Equipment

| Slot | Equipment item | Function |
|---|---|---|
| Primary weapon | `EQ005` — [[Equipment/EQ005|Katana]] | Close-range combinations that may cancel into Phase Shift |
| Tactical tool | `EQ007` — [[Equipment/EQ007|Flash Charges]] | Briefly disorients enemies to create an aggressive opening |
| Gear module | `EQ006` — [[Equipment/EQ006|Phase Shifter]] | Spends Phase Charges on an eight-directional invulnerable dash through an adjacent phase layer |

### Skills

> **TODO — Phase skills:** Tune Reprisal's recovery window, Phase Cascade duration, and Phase Charge restoration cap after playtesting.

| Skill ID | Skill | Type | Effect |
|---|---|---|---|
| C22-M1 | Wall Run | Innate movement | Preserves VECTOR's shared upward and forward wall routes |
| C22-P1 | Reprisal | Passive | Integrity lost during an approximately `3–5 s` prototype window becomes Recoverable Integrity; each successful direct weapon hit restores `1`, without restoring older damage or exceeding the recent loss |
| C22-OD | Phase Cascade | Overdrive | Recoverable Integrity does not expire; Katana combo state persists through Phase Shift; a successful Katana combo finisher restores one Phase Charge subject to a later balancing cap |

Phase is VECTOR's most aggressive Specialization and approaches enemies directly. A confirmed compatible weapon hit may cancel into Phase Shift, while a miss remains committed to its recovery. Phase Shift itself restores no Integrity and remains a combat and evasion action rather than a separate optional-route key.

[[Equipment/EQ006|The Phase Shifter]] owns ordinary Phase Charge recovery. Phase Cascade restores no charges for missed attacks, passive waiting, or Phase Shift itself. Shift direction remains committed, invulnerability remains finite, and intrinsic Katana damage does not change.

## C23

### Equipment

| Slot | Equipment item | Function |
|---|---|---|
| Primary weapon | `EQ008` — [[Equipment/EQ008|Sniper Rifle]] | Long-range shot with long recovery and heavy kickback applied to Hunter and valid targets |
| Special ammunition | `EQ009` — [[Equipment/EQ009|Resonance Beacon Rounds]] | Selectable limited rounds that create a local sound-wave control beacon |
| Gear module | `EQ010` — [[Equipment/EQ010|Targeting Optics]] | Extends aimed view and reveals firing-line, weak-point, and alignment information |

### Skills

> **TODO — Hunter skills:** Define Recoil Routing input timing and recovery reduction, Special Ammunition handling, Deadlock duration, activation, and release recovery.

| Skill ID | Skill | Type | Effect |
|---|---|---|---|
| C23-M1 | Wall Run | Innate movement | Preserves VECTOR's shared upward and forward wall routes |
| C23-P1 | Recoil Routing | Passive | Heavy weapon recoil transitions directly into Wall Run when Hunter's displacement reaches a valid wall; a successful transition shortens but does not eliminate weapon recovery, while a missed route leaves Hunter exposed for the full recovery |
| C23-OD | Deadlock | Overdrive | Anchors Hunter in place, suppresses self-kickback, transfers the prevented recoil into greater target knockback and penetration, and expands Targeting Optics weak-point and multi-target alignment information; rifle recovery remains long |

Hunter may switch between ordinary rounds and the equipped Special Ammunition type; future ammunition discoveries replace `EQ009` in that slot rather than consuming another loadout slot.

Deadlock removes Wall Run and ordinary repositioning while active. Hunter remains vulnerable and must release the anchor before moving again; it changes penetration and knockback through an explicit modifier rather than increasing intrinsic rifle damage.
