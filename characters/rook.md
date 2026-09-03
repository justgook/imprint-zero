---
id: C1
type: character
title: ROOK
status: in-progress
---

## Specializations

| ID | Display name | Primary weapon identity |
|---|---|---|
| `C11` | Tactical ROOK | Automatic and semi-automatic rifles |
| `C12` | Heavy ROOK | Shotguns |
| `C13` | Assault ROOK | Dual pistols, including automatic variants |

## Crew role and voice

> **Accepted** — ROOK is the crew's emergent coordinator rather than a formally appointed commander.

OPERATOR never identifies ROOK as captain or grants explicit authority. ROOK tends to summarize situations, propose immediate plans, and speak first when the crew hesitates; the others may challenge or improve those plans without framing disagreement as insubordination. Leadership remains inferable from repeated behaviour, and any deployed Character can make Mission decisions.

## Stat Tiers

See the canonical [[Playable Crew#specialization-stat-matrix|Specialization Stat matrix]] for the accepted C11–C13 comparison. The internal budget formula and ability costs remain owned by [[Gameplay/Gameplay Math#internal-specialization-budget|Gameplay Math]].

## Moves and animations

> **TODO — ROOK animations:** Assign exact animation IDs and transitions for the accepted move families.

`●` means required, `—` intentionally unavailable, and `?` unresolved.

| Move / animation family | C11 | C12 | C13 |
|---|:---:|:---:|:---:|
| Idle | ● | ● | ● |
| Run | ● | ● | ● |
| Jump | ● | ● | ● |
| Fall | ● | ● | ● |
| Land | ● | ● | ● |
| Aim / fire | ● | ● | ● |
| Interact | ● | ● | ● |
| Hurt | ● | ● | ● |
| Defeat | ● | ● | ● |
| Overdrive | ● | ● | ● |
| Combat Slide | ● | ● | ● |

## Common tools

> **Accepted** — Grenades and the combat knife are fixed parts of ROOK's setup, not crew-stash Equipment. They receive neither Equipment IDs nor separate Equipment pages.

| Shared knife rule | Behavior |
|---|---|
| Contextual melee attack | When the player attacks while a valid enemy is within ROOK's melee range, the combat knife replaces the equipped gun attack. It never triggers without attack input. |

| Tool | C11 — Tactical | C12 — Heavy | C13 — Assault |
|---|---|---|---|
| Grenades | Aimed hand throw with trajectory preview; hold to cook the fuse | Under-barrel grenade launcher | Quick fixed-arc toss while running; preserves horizontal momentum; cannot preview, cook, or throw during Assault Slide |
| Combat knife | Quick forward stab with minimal displacement; returns directly to rifle-ready stance | Same mechanical attack; optional Heavy-specific animation later | Same mechanical attack; optional Assault-specific animation later |

## C11

### Appearance

![C11 concept placeholder showing a balanced rifle-user silhouette](content/images/characters/rook/c11.png)

This image is a concept target, not final character art or the current sprite implementation.

> **TODO — Image-generation prompt:** Create a full-body side-view pixel-art concept for C11, the default ROOK Specialization and a practical general-purpose rifle user. Show a balanced military silhouette with medium armour, a stable firing stance, readable joints, compact field equipment, and an institution-issued rifle that does not overwhelm the body shape. The same underlying person must remain recognizable later across C12 and C13. Draw from worn industrial military science fiction, utilitarian analog cybernetics, and the severe 1990s action-game character language established by Imprint Zero. Use near-black, dirty gunmetal, faded olive, aged off-white armour, and one restrained yellow-green identification accent. Present one neutral gameplay-readable pose on a transparent background in a modern interpretation of 16-bit action-game pixel art. Avoid heroic ornament, exposed personal identity, text, logos, glossy surfaces, rainbow neon, saturated cyan-and-magenta lighting, LED strips, holographic clutter, gradients, photorealism, and direct imitation of an existing character.

### Skills

> **TODO — C11 skills:** Define inputs, duration, and exact [[Gameplay/Gameplay Math|Gameplay Math]] modifiers.

| Skill ID | Skill | Input | Effect |
|---|---|---|---|
| C11-M1 | Tactical Slide | ? | Medium speed and distance; low profile; committed movement cannot fire; recovery transitions directly into grounded aim or fire; no inherent invulnerability or contact damage |
| C11-OD | Fire Control | ? | Temporarily removes rifle recoil and spread accumulation, shortens aim and ready transitions, and permits Tactical Slide to transition into aim or fire after its midpoint; does not change intrinsic damage, penetration, or cadence |

### Equipment

> **Deferred — C11 equipment expansion:** The Baseline Rifle is the only currently required C11 item. Add alternatives after the wider equipment and campaign structure is clear.

| Relationship | Equipment |
|---|---|
| Primary family | Automatic and semi-automatic rifles |
| Initial item | `EQ001` — [[Equipment/EQ001|Baseline Rifle]] |
| Compatible items | Future rifle items may be added later |

## C12

### Appearance

![C12 concept placeholder showing a broad reinforced shotgun-user silhouette](content/images/characters/rook/c12.png)

This image is an exploratory concept target, not final character art or the current sprite implementation.

> **TODO — Image-generation prompt:** Create a full-body side-view pixel-art concept exploring C12 as a visibly reinforced variation of ROOK. Preserve the same underlying body, institutional markings, and rifle-marine identity as C11, but test a broader silhouette, heavier stamped armour, reinforced joints, a practical shotgun with an under-barrel grenade launcher, and a lower, more committed stance. Equipment should look field-repairable and repeatedly serviced rather than advanced or ceremonial. Do not decide C12's exact shotgun variant or movement mechanics through the image; leave attachment points and carried equipment modular. Use near-black steel, charcoal, faded olive, aged off-white plating, dull brass, and one restrained ochre identification accent. Present one neutral gameplay-readable pose on a transparent background in a modern interpretation of 16-bit action-game pixel art. Avoid making C12 a separate person, oversized fantasy armour, heroic ornament, text, logos, glossy surfaces, rainbow neon, saturated cyan-and-magenta lighting, LED strips, holographic clutter, gradients, photorealism, and direct imitation of an existing character.

### Skills

> **TODO — C12 skills:** Define inputs, duration, and exact [[Gameplay/Gameplay Math|Gameplay Math]] modifiers.

| Skill ID | Skill | Input | Effect |
|---|---|---|---|
| C12-M1 | Breach Slide | ? | Short distance and slow acceleration; low profile; increased stagger resistance during committed movement; cannot fire while moving; recovery transitions directly into a shotgun-ready stance; no invulnerability or contact damage |
| C12-OD | Siege Posture | ? | Temporarily applies an explicit Defense modifier, prevents stagger from interrupting shotgun or grenade-launcher actions, and prevents shotgun recoil from displacing Heavy ROOK; does not change Breach Slide limits or intrinsic weapon damage, penetration, or cadence |

### Equipment

> **Deferred — C12 equipment:** Define canonical shotgun items when Heavy ROOK enters equipment implementation.

| Relationship | Equipment |
|---|---|
| Primary family | Shotguns |
| Grenade delivery | Under-barrel grenade launcher |
| Initial item | Not yet defined |
| Compatible items | Future shotgun items may be added later |

## C13

### Appearance

![C13 concept placeholder showing a light forward-leaning dual-pistol silhouette](content/images/characters/rook/c13.png)

This image is an exploratory concept target, not final character art or the current sprite implementation.

> **TODO — Image-generation prompt:** Create a full-body side-view pixel-art concept exploring C13 as a lighter, forward-moving variation of ROOK. Preserve the same underlying person, institutional markings, and rifle-marine identity as C11, but test reduced armour mass, compact equipment, clear joint freedom, a forward-weighted stance, and two readable pistols suitable for movement without turning ROOK into VECTOR. The design should imply controlled aggression while remaining a trained firearm user rather than an acrobat. Use near-black, dirty gunmetal, faded olive, worn off-white armour, and one restrained muted-green identification accent. Present one neutral gameplay-readable pose on a transparent background in a modern interpretation of 16-bit action-game pixel art. Avoid making C13 a separate person, wall-running or phase-tech motifs, heroic ornament, text, logos, glossy surfaces, rainbow neon, saturated cyan-and-magenta lighting, LED strips, holographic clutter, gradients, photorealism, and direct imitation of an existing character.

### Skills

> **TODO — C13 skills:** Define inputs, duration, targeting rules, and exact [[Gameplay/Gameplay Math|Gameplay Math]] modifiers.

| Skill ID | Skill | Input | Effect |
|---|---|---|---|
| C13-M1 | Assault Slide | ? | Highest speed and longest distance; low profile; direction commits on start; paired pistols may fire during movement; short recovery; no invulnerability or contact damage |
| C13-OD | Crossfire | ? | Each pistol may temporarily track a separate valid target in the forward firing region or focus the same target; firing does not interrupt running, jumping, or Assault Slide; slide direction remains committed; intrinsic weapon damage, penetration, and cadence remain unchanged |

### Equipment

> **Deferred — C13 equipment:** Define canonical paired-pistol items when Assault ROOK enters equipment implementation.

| Relationship | Equipment |
|---|---|
| Primary family | Dual pistols, including automatic variants |
| Initial item | Not yet defined |
| Compatible items | Future paired-pistol items may be added later |
