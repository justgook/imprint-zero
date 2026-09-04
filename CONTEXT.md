# Imprint Zero Domain Language

Canonical language for the game's crew, progression, and campaign structure. Wiki ownership and presentation rules belong to the [[Content Style Guide|content style guide]] and are linked rather than duplicated here.

## Language

**Character**:
A persistent crew member with an innate combat identity and Character-owned optional-route verb.
_Avoid_: Hero, class

**NPC**:
A non-playable campaign actor whose authored identity or agency extends beyond a tactical boss Encounter.

**Boss**:
An entity whose primary authored role is a boss Encounter; speaking or making narrative claims does not also make it an NPC.

**Specialization**:
One of three full-Mission play styles belonging to a Character.
_Avoid_: Subclass, loadout

**Specialization ID**:
A stable production identifier from `C11` through `C43`. The first digit identifies the owning Character and the second identifies that Character's Specialization slot; display names may change without changing the ID.

**Stat Tier**:
A canonical `1–5` Specialization input mapped into runtime values by shared gameplay equations; `0` means a capability is genuinely absent, while unresolved tiers remain unknown rather than receiving an estimated number.

**Integrity**:
The Stat Tier mapped into a Specialization's runtime damage capacity before failure.

**Defense**:
The Stat Tier mapped into deterministic passive damage mitigation and stagger resistance after a hit lands; active avoidance and blocking remain moves or skills.

**Mobility**:
The Stat Tier mapped into a Specialization's runtime movement values, including movement speed; individual move availability remains separate.

**Hack**:
RELAY's Character-owned signature verb for entering a paused hacking interface at an authored route, machine, or exposed enemy target.
_Avoid_: Interface Link

**System Target**:
An explicitly authored machine, cybernetic component, equipped system, neural connection, or environmental device compatible with one or more RELAY interactions.

**Access**:
A System Target's visible preparation value that determines when RELAY may begin combat hacking and how many moves its minigame permits.

**Neural Interface Hack**:
RELAY's invasive access to machine-readable implant data without access to unrecorded thoughts, complete consciousness, or inherently truthful memory.

**Mesh**:
RELAY's term for any locally reachable machine-readable space formed by connected systems, robots, terminals, implants, or virtual environments.
_Avoid_: Web, Grid

**Mesh Dive**:
RELAY's extension of her full-body sensorium into an external machine, Controlled Unit, neural interface, or virtual environment.

**Combat Slide**:
ROOK's ground-only, low-profile signature verb. Every ROOK Specialization preserves its traversal function while varying speed, distance, recovery, protection, and weapon access.

**Wall Run**:
VECTOR's fast, limited-duration movement upward or forward along a valid wall. Every VECTOR Specialization preserves its optional-route function; ordinary Wall Run cannot stop, reverse, cling, or grant invulnerability.

**Breach**:
RAM's Character-owned optional-route capability for destroying RAM-reactive barriers. Impact expresses it through Shield Charge, Siege through anchored Heavy Firing, and Onslaught through a committed two-handed weapon strike.

**Planted Guard**:
Impact RAM's automatic grounded idle state while the Tower Shield is equipped. Stopping movement plants the shield and crouches RAM behind directional cover; no separate guard input is required.

**Controlled Unit**:
A machine preserved and commanded by Network RELAY.
_Avoid_: Summon, pet

**Direct Control**:
Network RELAY's control state in which the player operates one Controlled Unit while RELAY remains stationary and vulnerable.

**Command Capacity**:
Network RELAY's provisional five-point budget for active Controlled Units.

**Command Cost**:
The portion of Command Capacity occupied by one Controlled Unit.

**Command Range**:
The finite area around Network RELAY within which Controlled Units can receive orders or remain under Direct Control.

**Salvage**:
A Mission-local Network resource recovered from authored piles or dismantled machines and spent to restore destroyed Controlled Units.

**Restoration Station**:
An authored Network-only Mission facility that spends Salvage to rebuild destroyed units from the deployed roster.

**Integrated Module**:
Machine hardware incorporated into Wire RELAY's biomechanical body through a Weapon, Mobility, or Systems slot.

**Chassis Integration**:
A full-machine Wire configuration that occupies all three integration slots and encloses RELAY in one cohesive body.

**Destructive Hack**:
A temporary command or corruption through which Null RELAY consumes a machine's function without gaining persistent control.

**Hack Program**:
A permanently learned Null skill that applies one reusable Destructive Hack to compatible targets.

**Program Execution**:
Null's immediate application of a Hack Program when the required effect endpoint falls below its Execution Threshold; Access requirements remain unchanged.

**Execution Threshold**:
The provisional board-complexity boundary below which Null may skip Mesh Dive for the required effect. Optional Discovery Nodes do not increase this complexity.

**Hack Module**:
Null-compatible Equipment that modifies field combat Mesh Dives or Program Execution without affecting safe route hacks or Research Terminal boards.

**Discovery Node**:
An optional target or route inside a hacking minigame that awards one or more output-specific Blueprint Fragments when reached.

**Blueprint Fragment**:
Persistent, non-fungible progress tied to one specific Machine Blueprint or Output Blueprint.

**Machine Blueprint**:
The Blueprint Fragment track inside one Machine Profile. Completion immediately unlocks its machine result and authored Hub Mesh Dive research boards.

**Output Blueprint**:
A Blueprint Fragment track whose completion unlocks one specific producible reward, including Equipment, a Wire Integration, a Hack Program, or another authored module.

**Machine Profile**:
A persistent `MP###` source-archetype record containing its Machine Blueprint progress, control compatibility, and linked Output Blueprints. Discovering any associated fragment reveals the Profile without granting its other outputs.

**Research Core**:
The persistent Blueprint archive and Hub Mesh Dive research system activated by M05 and carried across later Hub transitions.

**Research Terminal**:
A HUB1, HUB2, or HUB3 interface to the Research Core where any controlled Character may inspect Blueprint progress and completed unlocks or select authored Machine Profile research boards; RELAY performs the resulting Mesh Dive.

**Awareness State**:
An enemy's current detection relationship to a Character: **Unaware** has no evidence, **Searching** investigates noise or a last known position without target lock, and **Tracking** currently detects and targets the Character. Stun and disorientation remain separate control effects.

**Phase Shift**:
A charge-consuming, committed dash produced by a Phase Shifter. During its authored invulnerability window, VECTOR travels through an adjacent phase layer where ordinary attacks cannot interact with her. Phase Shift may cross attacks, hazards, and enemy bodies but not solid world geometry or route barriers; it is a combat and evasion action rather than a separate optional-route key.

**Recoverable Integrity**:
Integrity lost within Phase VECTOR's short recovery window. Direct weapon hits may restore it before expiration, but cannot restore older damage or exceed the recent loss.

**Overdrive**:
The temporary transformation unique to the selected Specialization.
_Avoid_: Ultimate, generic power-up

**Memory Imprint**:
An artifact that pairs lore or a memory scene with an explicit progression result.
_Avoid_: Passive lore collectible

**Equipment Imprint**:
A Memory Imprint that reveals access to an equipment source, blueprint, shop item, or crafting path without directly granting the equipment.

**Equipment**:
A crew-stash-owned weapon, armour piece, or other equippable item with a stable ID and one canonical item page.

**Weapon Family**:
A Specialization compatibility boundary containing multiple individual weapons that preserve its primary combat identity.

**Imprint Zero**:
The Cradle's designation for four altered biological and mnemonic reference templates whose ultimate provenance remains unknown.

**Imprint One**:
An identity-unstable prototype intended to replace a four-Character crew but unable to demonstrate one coherent self or reflective agency.
_Alias_: Imprint One Prototype, the Prototype

**Empty Barracks**:
A physically real but unoccupied conditioning façade that receives returning Zero Division crews for memory extraction and biological utilization.

**Cradle**:
An industrial facility that assembles later Zero Division crews from recovered biological material, Imprint Zero reference patterns, and previous mission records.

**OPERATOR**:
The institutional designation for the familiar voice that coordinates the crew's Missions while concealing its identity, embodiment, and authority.

**Cradle Security System**:
The facility controller encountered while OPERATOR is absent during the Empty Barracks and Cradle operation.

**Experiment Network**:
The wider infrastructure and authority connecting successive urban experiments without establishing that OPERATOR owns or controls it.

**CIVITAS designation**:
The experiment network's civic-experiment serial: CIVITAS-00 designates Republic of Dust, CIVITAS-01 the current successor city, and CIVITAS-02 the next named experiment.

**Republic of Dust**:
The resident-given name for the manually rebuilt predecessor experiment city designated CIVITAS-00 by the experiment network.

**Velvet Exchange**:
The B10 pleasure city whose genuine bodily services conceal body-replacement research and institutional ownership.

**Cathedral of Deliverance**:
The B11 religious city promising relief and transcendence while concealing memory and personality harvesting.

**Old Man**:
The experiment network's last registered predecessor-city civilian, sustained through repaired biology, replacement parts, and partial memory restoration without provable continuity.

**Ashfall Spire**:
The B12 landmark above B01's Ashfall District whose hidden control levels host the shared Act IV final sequence.

**Quiet Terminus**:
The offline Republic of Dust rail terminus used as HUB3, the crew's Act IV staging Hub.

**Controller**:
The proven local orchestration authority for the current urban experiment whose physical defence or avatar does not establish its complete embodiment or identity.

**Mnemonic Voiceprint**:
A spoken authentication signature completed by the three Specialization profiles belonging to one Character.

**Biome Memory Imprint**:
A hidden Act II Memory Imprint that provides Character-specific perspective and contributes to extended-route eligibility without direct combat power.

**Continuum**:
A collective mind created by Heartroot that preserves distinguishable joined identities without one permanent controlling voice.

**Heartroot**:
The founding organism that created the Continuum, merged into it, and persists as one voice and local interface rather than its ruler.

**HA Investigation**:
The mutually exclusive Act IV Mind route through the **Cathedral of Deliverance** and its concealed memory-and-personality harvesting system.

**HB Investigation**:
The mutually exclusive Act IV Body and Control route from B09 into **Velvet Exchange** and its concealed body-replacement research system.

**Mission**:
An objective-driven deployment selected from a Hub.
_Avoid_: Level, Zone

**Hub**:
A between-Mission decision space for crew selection, preparation, testing, and deployment.

**Recovery Capsule**:
The institutional term for a Specialization-specific deployment, sleeping, and post-death return capsule assigned to one Character.

**Coffin**:
Crew slang for a Recovery Capsule.
_Avoid in institutional UI_: Coffin

## Relationships

- A **Character** owns exactly three **Specializations** and one optional-route verb.
- Every RELAY Specialization uses **Hack** to open the same authored optional routes; Specialization differences change combat-hacking results rather than route eligibility or outcomes.
- RELAY compatibility is guaranteed through **System Targets** at the Encounter level rather than by making every enemy hackable.
- RELAY's compatible primary-weapon hits and explicit unit, integration, control, or environmental effects build **Access**; disabling a compatible standard target may grant maximum Access immediately.
- Minimum **Access** permits combat hacking, while additional Access grants more minigame moves; beginning the minigame consumes the accumulated value, and failure leaves the target with none.
- Access waits through a short interruption and then decays while no valid effect continues building it.
- A **Neural Interface Hack** may recover credentials, communications, device logs, or cached sensory records, but retrieved data may remain incomplete, altered, or misinterpreted.
- The **Mesh** describes a reachable connected space without implying one global system, the **Experiment Network**, or ownership by OPERATOR or Controller.
- Direct Control, Hub Mesh Dive research, field hacking, and resistant-target hacking require a **Mesh Dive**; prepared Null Hack Programs do not.
- A **Specialization** owns its **Integrity**, **Defense**, and **Mobility** Stat Tiers and references default and compatible **Equipment** by stable ID.
- Characters, Specializations, Equipment, enemies, and Bosses supply combat inputs and explicit exceptions; [[Gameplay/Gameplay Math|Gameplay Math]] owns their shared equations.
- Speaking **Bosses** remain Bosses when their authored role is primarily the Encounter; dual **NPC** and Boss classification is reserved for entities with substantial independent campaign agency beyond the fight.
- A **Specialization** owns one **Overdrive**.
- Network RELAY preserves machines as **Controlled Units**, Wire RELAY incorporates machines as **Integrated Modules**, and Null RELAY consumes machines through **Destructive Hacks**.
- Wire equips one Weapon, one Mobility, and one Systems **Integrated Module**; a **Chassis Integration** occupies all three slots.
- M05 introduces Mesh Dive boards through Overdrive-module access and activates the persistent **Research Core** and first **Research Terminal** when HUB0 becomes HUB1; Blueprint Fragments neither appear nor accumulate before that transition.
- After activation, **Blueprint Fragments** are the main shared loot-discovery path, and any Character may contribute fragments toward rewards for any Character or Specialization.
- Blueprint Fragments, completed Blueprints, discovered Machine Profiles, and Blueprint-produced unlocks persist globally, but remain unavailable in a new campaign until M05 reconnects the Research Terminal archive.
- Blueprints may unlock producible gameplay rewards but never Characters, Specializations, Overdrive, Memory Imprints, Mission access, required keys, ending evidence, or route prerequisites.
- A **Machine Profile** contains one Machine Blueprint, zero or one control-compatible Network expression, and zero or more linked Output Blueprints for any Character.
- HUB1, HUB2, and HUB3 each provide a **Research Terminal** to the persistent Research Core; Hub transitions never remove Blueprint progress or boards.
- Completing a **Machine Blueprint** immediately unlocks its machine result and authored **Research Terminal** boards; it grants no linked Output Blueprint automatically.
- Research Terminal boards guarantee enough finite **Discovery Nodes** to complete every machine-linked Output Blueprint without another field encounter; unique world-pickup placements remain separate `100%` collectibles.
- Wire extraction with an unknown Integration still installed completes that `WI###` Output Blueprint but no Machine Blueprint or unrelated output; an unknown Chassis must remain intact.
- Intact Network extraction completes the source's **Machine Blueprint**; damaged surviving extraction grants a condition-based subset of at least one fragment, destruction prevents extraction, and no condition grants linked Output Blueprints.
- Multiple Machine Profiles may reference the same **Integrated Module**, **Hack Program**, Equipment item, or other output, while ineligible source machines may have no Network expression.
- Controlled Units, Integrated Modules, Chassis Integrations, and Hack Programs remain RELAY-owned outputs; `EQ###` Equipment unlocked through the same Blueprint system belongs to the shared crew stash.
- Null may use **Program Execution** when a board has one required endpoint below the provisional **Execution Threshold**; Hack Modules may modify field thresholds and board constraints but never safe route or Research Terminal boards; incomplete Discovery Nodes preserve an optional Mesh Dive, while completed nodes cause the redundant Dive to disappear.
- Null's three equipped **Hack Programs** have independent cooldowns; one System Target may carry only one active Destructive Hack, and a consumed target cannot be hacked again.
- A Network loadout may combine any Controlled Units whose total **Command Cost** does not exceed RELAY's **Command Capacity**; completed control-compatible Machine Blueprints permit repeated instances unless a unique profile explicitly imposes a one-copy limit.
- Controlled Units cannot execute orders or remain under **Direct Control** beyond RELAY's **Command Range**.
- Controlled Units may operate ordinary physical or profile-compatible Encounter machinery but cannot perform **Hack**, open Character-gated routes, or collect otherwise inaccessible permanent rewards.
- Network may preserve an eligible local machine as a **Controlled Unit** or dismantle it for **Salvage**; dismantling forfeits that unit's extraction-based Machine Blueprint Fragment award.
- Deployed or restored roster units never produce Salvage, and temporary or respawning machines may be explicitly non-salvageable.
- **Salvage** does not persist beyond the current Mission or come from endlessly respawning enemies.
- A **Restoration Station** cannot repair Wire Integrations or Chassis, affect Null cooldowns, or rebuild temporary local units.
- During **Direct Control**, RELAY does not move autonomously; damage to RELAY ends Direct Control, and RELAY's defeat still fails the Mission.
- Every **Memory Imprint** pairs narrative evidence with progression.
- The four Act II **Biome Memory Imprints** collectively identify the crew voice mappings and order for **BASTION–AZIMUTH–BREACH–ECHO**.
- All twelve **Specializations** complete the four **Mnemonic Voiceprints** required to enable the Empty Barracks authentication interface.
- ROOK, VECTOR, RAM, and RELAY respectively speak **Bastion**, **Azimuth**, **Breach**, and **Echo** in the accepted voiceprint sequence.
- The four complete **Mnemonic Voiceprints** can impersonate **Imprint Zero** to authenticate its legacy Empty Barracks emergency egress without proving identity continuity.
- The **Empty Barracks** routes returned crews into utilization by the **Cradle**.
- The **Cradle** uses **Imprint Zero** as reference templates without establishing that those templates are the original people.
- The **Cradle** updates **Imprint One** from returned crews' operational records as a proposed replacement for the four-Character structure.
- The **Cradle Security System** operates B07 and most of B08 while **OPERATOR** is unreachable.
- The current city is a revised successor to the adjacent predecessor experiment city now called the **Republic of Dust**.
- The **Old Man** is a fallible witness who provides the HA and HB leads without authoritatively explaining the **Experiment Network** or **OPERATOR**.
- **Republic of Dust** residents conceal activity from the **Experiment Network**, without establishing that **OPERATOR** controls that network.
- **Heartroot** created the **Continuum** and became one founding voice within it; Heartroot is neither an independent actor nor the collective's ruler.
- **OPERATOR**-associated credentials can authorize Imprint Zero and Imprint One without proving who authored or relayed the commands.
- One campaign completes either the three-Mission **HA Investigation** or the three-Mission **HB Investigation**, never both, before either route enters the shared B12 sequence.
- B10 and B11 present themselves as independent attraction cities while sharing hidden infrastructure, authorization, data formats, and supply routes within the **Experiment Network**.
- Both Act IV investigations return through B01 and enter **Ashfall Spire** for the shared final sequence.
- **Controller** coordinates the current successor-city experiment, B10, and B11 through infrastructure carrying **OPERATOR**-authenticated traffic without resolving whether OPERATOR and Controller are the same entity.
- Defeating **Controller** disconnects the current city from the **Experiment Network** without proving whether the network ended elsewhere or the experienced ending was the final experiment iteration.
- A **Character** has three Specialization-specific **Recovery Capsule** variants, of which only unlocked variants can be selected.
- **HUB0** and **HUB1** are campaign states of the same physical **Hub**; **HUB2** is a captured transfer nexus used as the distinct Act III staging **Hub**; **HUB3** is **Quiet Terminus**, an offline Republic of Dust rail terminus adapted by residents.
- Entering the Empty Barracks exterior route activates a legacy rail that relocates all four **Recovery Capsules** from HUB2 to **Quiet Terminus**.
- A **Hub** contains four Character-assigned docking stations with one selected **Recovery Capsule** variant docked per available **Character**.
- After HUB0, Mission death returns the deployed **Character** in the **Coffin** belonging to their selected **Specialization**, without resource loss.

## Example dialogue

> **Crew:** “Back in the **Coffin** again.”
> **System:** “**Recovery Capsule** docked. Select a **Character**, **Specialization**, and equipment before redeployment.”

## Flagged ambiguities

- “Subclass” previously meant **Specialization**; use **Specialization** consistently.
- “Coffin” is crew slang, while **Recovery Capsule** is the institutional and system term.
