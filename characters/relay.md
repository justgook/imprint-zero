---
id: C4
type: character
title: RELAY
summary: The crew's fragile technical researcher, built around hacking and machine-derived combat arsenals.
eyebrow: Playable character
status: in-progress
---

## Specializations

| ID | Display name | Machine relationship | Combat identity |
|---|---|---|---|
| `C41` | Wire RELAY | Integrate | Combine machine-derived weapons, movement, and systems with RELAY's biomechanical body. |
| `C42` | Network RELAY | Preserve | Command several small machines or one large machine within a fixed capacity. |
| `C43` | Null RELAY | Consume | Apply reusable fire-and-forget hacks that force machines to act, fail, or destroy themselves. |

## Appearance

![RELAY biomechanical body reference](content/images/characters/RELAY.png)

This image is a body-design target rather than a canonical character sheet or final implementation. Both arms and both legs are fully biomechanical prostheses; the head and torso retain visible biological tissue, while cranial and spinal/back interfaces support hacking and machine integration. The campaign does not establish whether RELAY lost natural limbs, surrendered them, or was created without them. Ignore the image's text, logos, exact clothing, markings, cables, weapons, and proportions unless accepted separately on this page.

## Crew role and voice

> **Accepted** — RELAY is the crew's technical researcher and primary decoder of machine-held evidence, not its unquestioned leader or an authoritative narrator of hidden campaign truth.

| Concern | Direction |
|---|---|
| Technical role | Enter and research the Mesh across machines, terminals, security, cybernetics, institutional records, and virtual environments. |
| Narrative role | Extract and correlate evidence, identify relationships, and propose technical explanations. |
| Epistemic limit | Familiarity may suggest prior involvement but cannot prove RELAY designed a system or interpreted it correctly. |
| Crew role | Supply technical judgment while other Characters retain tactical, social, and moral authority. |
| Voice | Fast, precise, impatient with unaided biological communication, and visibly excited by unusual systems. |
| Double meaning | Phrase intense technical excitement with occasional sexual ambiguity without explaining which reading is correct or reducing every interaction to the same joke. |

The identity question is whether RELAY is uncovering institutional systems or recognizing work she once helped create.

### Mesh embodiment and intimacy

> **Accepted** — RELAY experiences technical, virtual, and physical intimacy as comparable full-sensory processes.

Her biomechanical body continuously integrates its sensors with her nervous system. A **Mesh Dive** extends that sensorium into an external machine, Controlled Unit, neural interface, or virtual environment. Direct Control, deep research, Discovery Node routing, and resistant-target minigames require a Mesh Dive; quick Null commands do not require sustained immersion.

External systems may produce pleasure, overload, discomfort, or aversion. Authored Mesh Dives therefore use one of four connection responses:

| Response | Presentation range |
|---|---|
| Pleasurable | Soft gasp, laugh, breath change, or restrained groan |
| Overwhelming | Broken speech, delayed response, or stronger involuntary reaction |
| Aversive | Hiss, recoil, disgust, or strained groan |
| Neutral or familiar | Short breath or no vocalization |

Strong responses belong to important connections rather than routine terminal use. Connection audiovisuals must remain distinct from damage feedback, and repeated interactions use restrained variants. Presentation remains suggestive rather than explicit; familiar crew interruptions treat the behaviour as known rather than shocking.

## Stat Tiers

> **Accepted** — RELAY is the crew's most fragile Character in every Specialization; survival comes from machine interactions rather than stronger base damage capacity or passive mitigation.

| Stat | C41 Wire | C42 Network | C43 Null |
|---|:---:|:---:|:---:|
| Integrity | 1 | 1 | 1 |
| Defense | 1 | 1 | 1 |
| Mobility | 3 | 2 | 4 |

See [[Characters/Overview#specialization-stat-matrix|Playable Crew]] for the canonical comparison and [[Gameplay/Gameplay Math|Gameplay Math]] for tier conversion.

## Moves and animations

> **TODO — RELAY animation coverage:** Define exact IDs, transitions, module attachment, Mesh Dive, Direct Control, Chassis entry/ejection, and Hack Program activation after profile prototypes establish scale and timing.

`●` means required and `—` intentionally unavailable. Profile pages own additional unit, module, and Chassis movement.

| Move / animation family | C41 | C42 | C43 |
|---|:---:|:---:|:---:|
| Idle, run, jump, fall, land | ● | ● | ● |
| Aim / primary-weapon attack | ● | ● | ● |
| Interact / Hack / Mesh Dive | ● | ● | ● |
| Hurt / defeat | ● | ● | ● |
| Overdrive | ● | ● | ● |
| Field Integration | ● | — | — |
| Chassis entry / ejection | ● | — | — |
| Command | — | ● | — |
| Direct Control transition | — | ● | — |
| Hack Program activation | — | — | ● |
| Innate slide, wall move, or dash | — | — | — |

## Shared movement

> **Accepted** — RELAY has ordinary run and jump but no additional Character-wide movement verb; **Hack** remains her sole signature route capability.

Wire Mobility integrations, Chassis Integrations, and Network Controlled Units may own profile-specific movement without creating new RELAY-only route gates. Null's Mobility Tier `4` represents faster ordinary positioning rather than an innate dash.

## Shared Hack

> **Accepted** — Wire, Network, and Null use Hack to open the same authored optional routes through equivalent interactions and outcomes.

```mermaid
flowchart LR
    Target[Authored RELAY route target] --> Dive[Paused Mesh Dive]
    Dive --> Puzzle[Circuit-routing puzzle]
    Puzzle -->|Success| Route[Same optional route outcome]
    Puzzle -->|Failure| Reset[Short reset, then retry]
```

Specialization differences apply to combat targets, not route eligibility. Safe route hacks use a fixed authored move budget rather than combat Access; failure resets after a short delay and never removes the route permanently. No route requires a particular Machine Profile, and required critical-path machinery remains usable by every valid Character configuration.

## Primary weapons

> **Accepted** — RELAY's three Specializations use distinct primary Weapon Families from the shared crew stash while preserving one recognizable directional, whip-like attack grammar.

| Specialization | Starter primary | Base role |
|---|---|---|
| Wire | [[Equipment/EQ020|EQ020 — Adaptive Chain Sickles]] | Paired chain-sickle combinations and the indestructible substrate for Weapon Integrations |
| Network | [[Equipment/EQ021|EQ021 — Conductor Whip]] | Elemental melee support for RELAY while Controlled Units remain the intended focus |
| Null | [[Equipment/EQ022|EQ022 — Dorsal Tendrils]] | Powerful back-mounted lashes for melee and Access setup alongside Destructive Hacks |

Compatible variants may replace each starter through ordinary Equipment rules. All use the same abstract [[Gameplay/Actions#directional-attack|Directional Attack]] action: directional intent begins the equipped weapon's sequence, continued intent sustains its authored cadence, and redirection occurs only at authored cancel points. Returning to neutral stops continuation without cancelling committed recovery. Physical controls and exact directional resolution remain deferred.

All three families are combat-only: they may strike or reposition valid enemies but cannot grapple terrain, move RELAY through the environment, open routes, retrieve inaccessible rewards, or replace Hack. Primary-weapon attacks build [[Gameplay/Mechanics#relay-compatible-encounters|Access]] on valid System Targets. Every RELAY Specialization sees coarse Access and its activation threshold; [[Machine Profiles/WI003|Sensor Array]] adds exact values, move count, decay timing, compatibility, resistance, weak points, and Blackout-chain prediction.

## Machine arsenal ownership

> **Accepted** — Machine Profiles are shared research records that may supply rewards for any crew member. Controlled Units, Wire Integrations, and Hack Programs remain RELAY capabilities; separately listed physical weapons are ordinary Equipment.

[[Gameplay/Blueprints|Blueprints and Research]] owns fragment acquisition, direct Blueprint unlocks, and the Research Terminal handoff through which any controlled Hub Character may select an analysis challenge that RELAY then executes as a Mesh Dive. [[Machine Profiles/Overview|Machine Profiles]] owns stable IDs, source compatibility, and output mappings. RELAY owns how her Specializations use compatible outputs.

| Catalogue | ID | RELAY use |
|---|---|---|
| Machine Profile | `MP###` | Source-machine compatibility record with at least one persistent RELAY output |
| Controlled Unit | Inherits `MP###` | Optional Network roster entry for an eligible autonomous machine |
| Wire Integration | `WI###` | Optional Weapon, Mobility, Systems, or full Chassis configuration |
| Null Hack Program | `NH###` | Optional reusable compatibility-tagged destructive skill |

No Machine Profile, Controlled Unit, Wire Integration, or Hack Program receives an `EQ###` ID or transfers to another Character. Profile-linked physical weapons do receive `EQ###` IDs and enter the shared stash when their Output Blueprints complete. A Profile may map rewards for any Character; every optional output category may be empty or plural, and multiple profiles may share outputs.

RELAY joins after [[Missions/M04|Production Halt]] with three Helix profiles: [[Machine Profiles/MP001|Fabricator]], [[Machine Profiles/MP002|Line Runner]], and [[Machine Profiles/MP003|Process Warden]]. Together they supply Wire's first three available Integrations, Network's eventual initial five-point roster, Null's first two distinct programs, and RELAY's three starter primary weapons. Wire initially equips Runner Legs and Sensor Array while leaving the Weapon Integration slot empty so Adaptive Chain Sickles remain in their default form; Arc Cutter is an owned Hub-selectable alternative.

## Skill structure

> **Accepted** — Every RELAY Specialization owns exactly three skills: shared Hack, one identity mechanic, and one unique Overdrive.

| Skill slot | C41 Wire | C42 Network | C43 Null |
|---|---|---|---|
| Signature verb | Hack | Hack | Hack |
| Identity mechanic | Field Integration | Direct Control | Destructive Hacks |
| Overdrive | Total Integration | Distributed Mind | Blackout |

Primary Equipment and Machine Profile selections remain loadout behaviour rather than additional skills.

## C41 — Wire

![Wire RELAY Specialization portrait](content/images/characters/relay/wire-portrait.svg)

> **Accepted** — Wire is the middle ground: RELAY incorporates machine hardware into her own body rather than commanding or consuming the source machine.

Wire's primary is an indestructible adaptive weapon whose default form is two sickles on flexible chains. A Weapon Integration transforms that substrate into its authored form rather than adding a second primary. The equipped weapon item continues to supply base power and compatible passive traits, while the Integration owns the transformed moveset and special behaviour; removing it restores that item's unintegrated form.

### Integration slots

| Slot | Typical expression |
|---|---|
| Weapon | Transformation of the equipped adaptive primary into an arm weapon, melee limb, mounted gun, or tool |
| Mobility | Legs, propulsion, climbing system, charge, or recoil movement |
| Systems | Head, sensor, armour, backpack, shield, or utility hardware |

Modules from different profiles may be combined. Ordinary modules are not separately destructible; normal damage affects RELAY's Integrity, although an explicit Systems module may provide active shielding, blocking, or avoidance.

### Field Integration

Wire begins with her Hub-selected modules. Hacking an exposed or disabled compatible machine may replace the corresponding slot for the current Mission. The removed module remains owned but unavailable until the next deployment. Permanent discovery follows [[Gameplay/Blueprints|Blueprint Fragment]] progression. Extracting with an unknown Integration still installed completes that specific `WI###` Output Blueprint but not the source Machine Blueprint or unrelated outputs. An unknown Chassis must remain intact; replacing, ejecting, abandoning, or losing the unknown Integration forfeits the extraction reward without removing already-banked fragments.

### Chassis Integration

A Chassis occupies all three slots and encloses RELAY in one cohesive machine body. It owns a separate external durability pool. At zero durability, the Chassis is destroyed for the remainder of the Mission and RELAY receives only a short transition-safe ejection into her pre-Chassis configuration. Owned Chassis return next deployment; a newly discovered Chassis must reach extraction intact.

### Overdrive — Total Integration

> **Accepted** — Wire's three installed modules expand into one standardized temporary combat frame without becoming a profile-specific Chassis.

The frame preserves all three module functions, reduces interference between their action recoveries, and adds separate external durability. Expiry or destruction restores the same three-module configuration. Duration, durability, transition rules, and recovery reductions require prototypes.

## C42 — Network

![Network RELAY Specialization portrait](content/images/characters/relay/network-portrait.svg)

> **Accepted** — Network preserves machines as Controlled Units and fights primarily through their positioning, intrinsic behaviours, and direct operation.

Network carries one elemental whip as her own melee and Access-building fallback. Every compatible whip briefly Command Marks the most recently struck valid target, allowing Focus to select it without separate targeting but granting no automatic order or universal damage bonus. Different Equipment variants may use electricity, fire, poison, or another authored element. Whip-focused builds are valid alternatives, but the intended centre remains support and coordination of Controlled Units.

### Capacity and commands

Network has provisional Command Capacity `5`:

$$
\sum \text{Command Cost of active units} \le 5
$$

Individual costs range from `1–5`, supporting several minimal units, mixed rosters, or one cost-`5` machine. A completed control-compatible Machine Blueprint may supply repeated instances of the same profile, with each paying full cost; Boss-derived or narratively unique profiles may impose an explicit one-copy limit. The representative starter roster costs `1 + 2 + 2` and exactly fills capacity.

| Order | Universal meaning |
|---|---|
| Follow | Regroup around RELAY and use the unit's intrinsic combat behaviour. |
| Focus | Attack or interact with the marked target. |
| Hold | Defend the current position until recalled. |

A profile owns how its unit performs each order. Controlled Units may attack, use profile-compatible Encounter machinery, or operate ordinary physical mechanisms, but cannot perform Hack, open RELAY-gated routes, collect inaccessible permanent rewards, or substitute for another Character's route verb. RELAY's body must reach and hack her authored route interfaces.

Orders and Direct Control operate inside a finite Command Range intended to cover one normal Encounter rather than an entire Mission. Units stop or return at the boundary; Direct Control warns before the link breaks.

### Direct Control

The player may operate one Controlled Unit directly while RELAY remains stationary, vulnerable, and without autonomous movement. Other units continue their configured AI behaviour. Damage to RELAY ends Direct Control, and RELAY's defeat still fails the Mission.

### Unit loss and Salvage

A destroyed unit frees its Command Cost and remains unavailable until rebuilt at an authored restoration station. Every open-campaign Mission provides at least one, ordinarily near its midpoint or before its final Encounter; optional routes may add earlier or additional stations. A station may rebuild deployed-roster units while Salvage remains but cannot restore temporary local units that were never deployed. Restoration Stations cannot repair Wire Integrations or Chassis and cannot affect Null cooldowns. Network begins each Mission with zero Salvage, gains it from authored piles or dismantled eligible machines, and loses it on extraction or death. A local machine may be preserved as a Controlled Unit or dismantled for Salvage; endlessly respawning enemies cannot become a salvage farm.

A disabled hostile machine or newly controlled local unit may instead be dismantled for Salvage. Dismantling frees its Command Cost but forfeits that unit's extraction-based Machine Blueprint Fragment award. Deployed or restored roster units never produce Salvage, and temporary or respawning machines may be explicitly non-salvageable.

A newly taken unit must survive successful extraction to award Machine Blueprint Fragments. An intact extracted unit grants every missing Machine Blueprint fragment. A damaged surviving unit grants a condition-based subset, never fewer than one; destruction prevents extraction, and temporary local units cannot use Restoration Stations. Extraction never grants linked outputs automatically. Completing that Machine Blueprint immediately unlocks its Hub research boards; control-compatible profiles also enter Network's producible roster. Owned research never suffers permanent loss.

### Overdrive — Distributed Mind

> **Accepted** — Distributed Mind coordinates the selected roster across the current Encounter without suspending Command Capacity or restoring destroyed units.

Command Range expands to the Encounter boundary; orders propagate instantly; units execute intrinsic behaviours concurrently; and Direct Control may jump directly between units. RELAY remains stationary and vulnerable while operating another body. Duration and command cadence require prototypes.

## C43 — Null

![Null RELAY Specialization portrait](content/images/characters/relay/null-portrait.svg)

> **Accepted** — Null uses compatibility-tagged fire-and-forget programs to consume machine function without gaining a Controlled Unit or Integrated Module.

Null's primary is a thin back-mounted tendril rig. The starter has two lashes; later two-, four-, eight-, or other-count rigs are separate primary Equipment items rather than stackable upgrades. Count changes attack identity, coverage, cadence, simultaneous targets, and commitment instead of acting as a linear quality tier. A melee-heavy build is valid, but increasing tendril count must not make target compatibility, Discovery Nodes, or prepared Hack Programs irrelevant. Tendril hits build Access without automatically executing a program; Destructive Hack activation remains deliberate and separate.

### Program loadout

Null selects exactly three learned Hack Programs at the Hub, one per activation slot. Each slot has an independent cooldown, so activating one does not lock the other two. One System Target may carry only one active Destructive Hack, and a consumed target cannot be hacked again. Applying a program irreversibly consumes the target's useful function through a forced action, corruption, shutdown, or explosion.

| Starting program | Function |
|---|---|
| [[Machine Profiles/NH001|`NH001` — Overload]] | Force a powered machine beyond safe output, then burn it out and create a local explosion. |
| [[Machine Profiles/NH002|`NH002` — Runaway Directive]] | Force a mobile machine forward until collision, shutdown, or explosion. |
| [[Machine Profiles/NH003|`NH003` — Cascade Virus]] | Apply machine damage-over-time that spreads once through valid contact or transmission. |

The first two programs come from RELAY's Helix profiles. [[Imprints/Relay Null|Null's Specialization Imprint]] teaches Cascade Virus so all three slots can be filled when Null unlocks.

Multiple profiles may reference the same program. Optional Discovery Nodes inside field and Hub hacking boards may award Blueprint Fragments for Hack Programs, Machine Blueprints, Wire Integrations, Equipment, or rewards belonging to other crew members. Every source-machine board exposes one node for each incomplete Blueprint track in that archetype's ordinary loot table; each field instance grants at most one fragment per track, completed tracks disappear, and unique world pickups are excluded. Completing a Hack Program's Output Blueprint teaches it permanently. Equipment, uninstalled Integrations, unit patterns, and Hub research boards unlocked in the field become selectable at the next Hub visit; a currently installed Integration becomes permanently owned and remains active. If a Discovery Node completes a Hack Program during Null's paused Mesh Dive, the interface offers one immediate choice before resuming: replace one equipped slot with the new program or keep the current loadout. A replaced program remains owned but cannot be re-equipped until the Hub, and a newly equipped discovery begins ready. Completion from a physical pickup, chest, Boss reward, Wire, Network, or another Character banks the program without interrupting play, handing off control, or showing an immediate slot prompt. No linked output unlocks merely because its source machine was extracted or its Machine Blueprint completed.

Null converts a compatible Hack endpoint with one required result and an optimal solution below the provisional base Execution Threshold into immediate Program Execution. Null-compatible [[Equipment/Overview#hack-modules|Hack Modules]] may raise that threshold, add field-board moves, extend connection range, delay Access decay, expose board information, or reduce corrupted-node penalties. If incomplete Discovery Nodes remain, the player may instead enter Mesh Dive to pursue them; once none remain, the redundant Dive is hidden. More complex combat boards require Mesh Dive. Program Execution never skips safe route or Research Terminal boards. Hack Module modifiers apply only in field combat, allowing an optimized Null to research a source more easily in a Mission while Hub boards remain fixed and identical across RELAY Specializations. Standard targets remain immediate when eligible, while resistant targets still require minimum Access before Program Execution or Dive. Programs consume targets rather than disappearing from the persistent arsenal.

### Overdrive — Blackout

> **Accepted** — Blackout turns individual Destructive Hacks into controlled cascade failures without granting control or bypassing protected targets.

Activation resets all three equipped program cooldowns. Each successful Destructive Hack chains once into a nearby compatible standard System Target, which executes the same effect. Resistant targets retain their hack windows and minigames, Boss protections remain unchanged, and required route infrastructure cannot be destroyed. Duration, chain range, and cooldown behaviour require prototypes.

## Combat hacking

> **TODO — Hacking prototype:** Validate board readability, move budgets, Access buildup, pause transitions, discovery signaling, failure recovery, and repeated-use pacing before accepting exact values.

Every paused hacking interaction uses one circuit-routing grammar. Difficulty varies through board size, source and destination count, locked or corrupted nodes, move limits, optional discovery nodes, and authored Boss layouts. The board never changes randomly while the player decides.

| Combat interaction | Requirement |
|---|---|
| Null endpoint below Execution Threshold | Use immediate Program Execution, or choose Mesh Dive while incomplete Discovery Nodes remain |
| Null endpoint above threshold or with exceptional constraints | Reach any required Access, choose a move budget, then complete the paused minigame |
| Optional Discovery Nodes | Spend available board moves to bank output-specific Blueprint Fragments immediately, even if the normal endpoint cannot then be reached |
| Network takeover | Disable the target or reach minimum Access, then complete the paused minigame |
| Wire integration | Disable the target or reach minimum Access, then complete the paused minigame |

At minimum Access, the player may begin immediately with one valid optimal solution or keep building toward maximum Access for mistake tolerance, alternate board routes, or optional discovery nodes. Access begins decaying after a short interruption without valid buildup. Starting a combat minigame consumes the accumulated value; failure closes the interface and leaves the target with no Access. Blueprint Fragments banked from Discovery Nodes persist through that failure, and collected nodes cannot award duplicates on retry. [[Gameplay/Mechanics#relay-compatible-encounters|Mechanics]] owns the move-conversion formula, delayed-decay rule, and cross-Encounter System Target coverage.

Bosses do not follow whole-target acquisition or consumption. RELAY hacks authored components, weapons, adds, or temporary behaviour windows. Null cannot instantly shut down a Boss, Network cannot permanently control one, and Wire cannot enter its complete Chassis during the Encounter. A machine Boss may award a curated profile after defeat.

## Neural access boundary

> **Accepted** — RELAY can invasively access machine-readable neural-implant data but cannot download complete consciousness, unrecorded thoughts, or objectively truthful memory.

Reachable data may include credentials, communications, device logs, and cached sensory records. A resisting person must be restrained or expose a hack window, and forced access is presented as coercive interrogation rather than neutral research. Retrieved records may remain incomplete, altered, or misinterpreted.

The [[NPCs/Old Man|Old Man]] destroyed his communication interface. [[Missions/HS01#relay-deployment-variation|HS01]] owns RELAY's refusal to address him and the other crew members' ordinary questioning.

## Recruitment and Overdrive reveal

RELAY sealed herself inside Helix Foundry while following a clue toward Overdrive and trusted the crew to recover her. RAM reaches her during [[Missions/M04|Production Halt]], after which her Coffin fills the fourth Hub station and Wire becomes selectable.

RELAY then leads [[Missions/M05|The Four Trials]]. The player deploys primarily as RELAY, chooses the crew activation rooms in any order, and temporarily controls each Character through an unlimited-Overdrive trial.

## Representative Encounter

| Specialization | Freight Terminal prototype scenario |
|---|---|
| Wire | Use Arc Cutter to expose a machine, Runner Legs to cross firing lanes, and Sensor Array to read hack compatibility. |
| Network | Split Fabricator, Line Runner, and Process Warden through Follow, Focus, and Hold while deciding when Direct Control justifies leaving RELAY stationary. |
| Null | Use Overload, Runaway Directive, and Cascade Virus to turn sentries, security equipment, and crane machinery into disposable attacks. |

This is a non-campaign validation setup, not an in-campaign replay of M01.

The critical route remains completable through shared movement and fallback combat. Hack opens only authored RELAY optional routes.

## Presentation requirements

> **TODO — RELAY presentation:** Replace Specialization portrait and sprite placeholders after profile scale, modular attachment, unit ownership language, Mesh Dive posture, and Chassis silhouette are validated.

- Preserve one readable biological core across every configuration.
- Make Weapon, Mobility, and Systems attachment points legible without tiny gadget detail.
- Distinguish allied Controlled Units from hostile machines through strong ownership feedback.
- Show RELAY stationary and vulnerable during Direct Control.
- Separate connection pleasure, overload, aversion, ordinary exertion, and damage feedback.
- Keep Wire integration, Network distribution, and Null consumption readable from silhouette and effects.
