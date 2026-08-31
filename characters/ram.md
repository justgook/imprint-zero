---
id: C3
type: character
title: RAM
summary: Heavily armoured crew member built around force, commitment, defence, and destructive entry.
eyebrow: Playable character
status: in-progress
---

## Specializations

| ID | Display name | Combat identity |
|---|---|---|
| `C31` | Impact RAM | Tower-shield defence, frontal control, and Shield Charge |
| `C32` | Siege RAM | Anchored minigun or rocket output and area suppression |
| `C33` | Onslaught RAM | Committed two-handed melee attacks with a war hammer or battle axe |

## Appearance

![RAM full-body armour reference](content/images/characters/RAM.png)

This image is a body-design reference, not a canonical character sheet or final implementation. Retain the massive full-body powered armour, enclosed helmet, broad reinforced silhouette, dark gunmetal body, and restrained orange accents. Ignore its text, logos, measurements, exact weapons, and other loadout details unless accepted separately in this page.

## Stat Tiers

> **Accepted** — Impact prioritizes Defense, Siege establishes RAM's Tier-5 Integrity profile, and Onslaught trades part of that durability for greater Mobility.

See the canonical [[Playable Crew#specialization-stat-matrix|Specialization Stat matrix]]. [[Gameplay/Gameplay Math|Gameplay Math]] owns tier conversion and the internal Specialization budget.

## Moves and animations

> **TODO — RAM animations:** Define exact animation IDs, transitions, heavy-armour locomotion, and each Specialization's Breach expression.

`●` means required, `—` intentionally unavailable, and `?` unresolved.

| Move / animation family | C31 | C32 | C33 |
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
| Breach | ● | ● | ● |
| Shield Charge | ● | — | — |
| Heavy Firing | — | ● | — |
| Two-handed demolition strike | — | — | ● |

## Shared movement

> **Accepted** — RAM retains ordinary run and jump so every critical route remains valid, but his powered armour makes acceleration, reversal, and aerial redirection slower than ROOK's baseline.

| Movement property | Behaviour |
|---|---|
| Ground acceleration | Slow, with visible powered-armour commitment |
| Reversal | Slower than ROOK; no immediate direction snap |
| Jump | Low powered jump available to every RAM Specialization |
| Air control | Limited horizontal correction; no sharp reversal |
| Fall | Fast, communicating armour mass |
| Landing | Heavy visual and audio response without mandatory ordinary-traversal recovery lock |

Impact and Siege use Mobility Tier `1`; Onslaught uses Tier `2`. Heavy armour grants no contact damage or global invulnerability.

## Shared route capability

> **Accepted** — Breach is RAM's Character-owned optional-route capability. Every RAM Specialization destroys the same RAM-reactive barriers through a different combat expression.

| Specialization | Breach expression |
|---|---|
| C31 Impact | Shield Charge smashes through the barrier |
| C32 Siege | Anchored Heavy Firing destroys it through sustained minigun fire or a charged heavy rocket |
| C33 Onslaught | A committed two-handed weapon strike breaks it |

Breach gates only optional routes and authored interactions. Main Mission completion never requires one particular RAM Specialization.

## Loadout structure

> **Accepted** — Each RAM Specialization begins with three Equipment items: one primary weapon, one tactical item, and one armour or gear system. This is currently a RAM structure rather than a crew-wide rule.

Primary alternatives replace the equipped primary weapon rather than being carried simultaneously. Future alternatives use separate Equipment acquisition paths.

| Availability event | Equipment added to crew stash |
|---|---|
| RAM joins after M03 with default C31 Impact | `EQ011–EQ013` |
| C32 Siege unlocks | `EQ014–EQ016` |
| C33 Onslaught unlocks | `EQ017–EQ019` |

Each initial set makes its Specialization immediately playable.

## Skill structure

> **Accepted** — Every RAM Specialization owns exactly three skills: its Breach expression, one identity passive, and one unique Overdrive.

Equipment actions such as guarding, ordinary weapon attacks, and weapon selection remain Equipment behaviour rather than additional Specialization skills.

| Skill slot | C31 | C32 | C33 |
|---|---|---|---|
| Breach expression | Shield Charge | Heavy Firing | Demolition Strike |
| Identity passive | Counterforce | Suppression | Follow-Through |
| Overdrive | Counteroffensive | Saturation | Avalanche |

## C31

### Equipment

| Slot | Equipment item | Function |
|---|---|---|
| Primary weapon | `EQ011` — [[Equipment/EQ011|Tower Shield]] | Frontal defence, pushing, and Shield Charge interaction |
| Tactical item | `EQ012` — [[Equipment/EQ012|Armored Gauntlet]] | Close-range committed strike and Shield Charge follow-up |
| Gear module | `EQ013` — [[Equipment/EQ013|Kinetic Stabilizer]] | Supplies shield Stability capacity and recharge; provides no passive mitigation without a compatible shield |

### Planted Guard

> **Accepted** — Planted Guard is Impact RAM's normal grounded idle while the Tower Shield is equipped. Releasing movement plants the shield and crouches RAM behind it without a separate guard input.

Moving, jumping, attacking, being displaced, or beginning Shield Charge exits Planted Guard. [[Equipment/EQ011|The Tower Shield]] owns directional protection and guarded-hit costs; [[Equipment/EQ013|the Kinetic Stabilizer]] owns Stability capacity and recharge.

#### Transition tuning

> **TODO — Shield transitions:** Define facing rules, plant and unplant frames, and action-transition timing through playtesting.

### Shield Charge

> **Accepted** — Shield Charge is a grounded horizontal commitment in Impact RAM's current facing direction.

| Rule | Behaviour |
|---|---|
| Direction | Fixed on activation; cannot turn or stop early |
| Actions | Cannot jump or attack during the charge |
| Forward defence | Tower Shield remains active; blocked attacks consume Mobile Guard Stability |
| Standard enemy collision | Pushes or staggers the target |
| Protected enemy collision | Uses authored resistance rather than guaranteed displacement |
| Heavy frontal impact | May stop the charge or cause guard break |
| RAM-reactive barrier | Breaks through it |
| End | Short recovery or transition into an Armored Gauntlet strike |

#### Charge tuning

> **TODO — Shield Charge values:** Define activation input, acceleration, speed, distance, Stability costs, collision priority, Gauntlet transition window, and recovery through playtesting.

### Skills

> **TODO — Impact skills:** Define Counterforce capacity, Counteroffensive duration, and Counterforce scaling after playtesting.

| Skill ID | Skill | Type | Effect |
|---|---|---|---|
| C31-M1 | Shield Charge | Breach skill | Grounded horizontal shield commitment that protects forward, pushes valid enemies, and breaks RAM-reactive barriers |
| C31-P1 | Counterforce | Passive | Stability lost while blocking stores force up to a later cap; the next Armored Gauntlet hit consumes it to increase stagger and knockback rather than damage |
| C31-OD | Counteroffensive | Overdrive | Every guarded frontal hit stores Counterforce; Shield Charge may spend it for greater distance, speed, and heavy-interruption resistance; standard enemies no longer stop the charge; the Gauntlet follow-up releases remaining force as a short-range knockback wave |

Ordinary attacks blocked without Stability cost during Planted Guard store no Counterforce outside Overdrive. Missing the empowered Gauntlet punch consumes the stored force, and guard break clears it.

Counteroffensive grants no global invulnerability or intrinsic damage increase. Rear and otherwise unguarded attacks still bypass the shield.

## C32

### Equipment

| Slot | Equipment item | Function |
|---|---|---|
| Primary weapon | `EQ014` — [[Equipment/EQ014|Minigun]] | Initial sustained-fire weapon and full-magazine Heavy Firing |
| Compatible primary alternatives | Rocket Launcher or Grenade Launcher | Replaces the Minigun rather than being carried simultaneously; exact items may be added later |
| Tactical item | `EQ015` — [[Equipment/EQ015|Proximity Mines]] | Protects flanks and denies approaches around an anchored position |
| Gear module | `EQ016` — [[Equipment/EQ016|Grounding Anchors]] | Resists displacement during Heavy Firing without reducing incoming damage |

### Heavy Firing

> **Accepted** — Heavy Firing anchors Siege RAM in place and commits to a weapon-specific high-output action.

| Equipped weapon | Heavy Firing expression |
|---|---|
| Minigun | Fires the full loaded magazine while anchored |
| Rocket Launcher | Charges and releases one heavy rocket while anchored |

Siege cannot move or cancel freely during the commitment. Equipment pages own magazine size, charge duration, damage, cadence, projectile behaviour, and resource values; Siege owns the anchoring and Heavy Firing modifier.

### Skills

> **TODO — Siege skills:** Define Heavy Firing interruption rules, Suppression thresholds and decay, Saturation duration, and heavy-interruption exceptions.

| Skill ID | Skill | Type | Effect |
|---|---|---|---|
| C32-M1 | Heavy Firing | Breach skill | Anchors Siege and commits to the equipped heavy weapon's high-output action; breaks RAM-reactive barriers |
| C32-P1 | Suppression | Passive | Repeated heavy-weapon hits build a visible state that slows standard-enemy advance and delays attack startup without increasing intrinsic weapon damage |
| C32-OD | Saturation | Overdrive | Anchors Siege for the full duration, removes normal Minigun reload downtime, automatically chambers future launcher rounds between charged shots, and spreads Suppression around valid impacts |

Suppression decays after Siege stops applying pressure. Protected enemies and Bosses use reduced effects or authored immunity. Future rocket or grenade launcher impacts apply stronger single bursts of Suppression instead of minigun accumulation.

During Saturation, Siege cannot move and remains vulnerable to rear attacks. Grounding Anchors prevent displacement, but authored heavy attacks may still interrupt firing. Intrinsic weapon damage and cadence do not increase.

## C33

### Equipment

| Slot | Equipment item | Function |
|---|---|---|
| Primary weapon | `EQ017` — [[Equipment/EQ017|Two-Handed War Hammer]] | Initial slow heavy melee weapon and committed Breach strike |
| Compatible primary alternative | Battle Axe | Future replacement emphasizing cleaving coverage over stagger and environmental force |
| Tactical item | `EQ018` — [[Equipment/EQ018|Kinetic Tether]] | Pulls standard enemies into melee; resistant targets reduce or invert the pull |
| Gear module | `EQ019` — [[Equipment/EQ019|Commitment Servos]] | Prevents minor stagger during heavy-attack windup without reducing incoming damage |

### Demolition Strike

> **Accepted** — Demolition Strike is a grounded charged commitment using the Breach-skill input.

| State | Behaviour |
|---|---|
| Windup | Hold input; Onslaught cannot move, turn, or jump |
| Early release | Performs an ordinary committed heavy strike |
| Full charge | Performs Demolition Strike and breaks RAM-reactive barriers |
| Minor incoming stagger | Commitment Servos preserve the windup |
| Authored heavy interruption | May cancel the windup |
| Miss | Enters full recovery |

#### Strike tuning

> **TODO — Demolition Strike values:** Define charge duration, attack arc, damage, stagger, knockback, heavy interruption, release buffer, and recovery through playtesting.

### Skills

> **TODO — Onslaught skills:** Define Follow-Through recovery reduction, Avalanche Momentum cap, per-tier speed changes, meter restoration, and accelerated drain through playtesting.

| Skill ID | Skill | Type | Effect |
|---|---|---|---|
| C33-M1 | Demolition Strike | Breach skill | Holds a grounded windup; early release performs an ordinary committed strike, while full charge breaks RAM-reactive barriers |
| C33-P1 | Follow-Through | Passive | A committed heavy weapon hit reduces that attack's recovery once, regardless of target count; a miss uses full recovery |
| C33-OD | Avalanche | Overdrive | Each successful primary-weapon attack adds one Momentum Tier that increases movement, attack startup, and recovery speed while also accelerating continuous Overdrive-meter drain; each valid hit restores a small amount of meter before the higher drain applies |

Follow-Through triggers against protected enemies and Bosses on a valid hit even when they resist displacement. Demolition Strike may trigger it in combat, but striking only a route barrier does not. It changes recovery rather than intrinsic damage, stagger, or knockback.

Avalanche misses do not remove Momentum, and Momentum does not decay before Overdrive ends. One attack grants at most one tier and one meter restoration regardless of target count. Boss hits count; route barriers and Kinetic Tether do not. Avalanche grants no invulnerability or intrinsic damage increase.
