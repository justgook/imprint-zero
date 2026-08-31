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

**Combat Slide**:
ROOK's ground-only, low-profile signature verb. Every ROOK Specialization preserves its traversal function while varying speed, distance, recovery, protection, and weapon access.

**Wall Run**:
VECTOR's fast, limited-duration movement upward or forward along a valid wall. Every VECTOR Specialization preserves its optional-route function; ordinary Wall Run cannot stop, reverse, cling, or grant invulnerability.

**Breach**:
RAM's Character-owned optional-route capability for destroying RAM-reactive barriers. Impact expresses it through Shield Charge, Siege through anchored Heavy Firing, and Onslaught through a committed two-handed weapon strike.

**Planted Guard**:
Impact RAM's automatic grounded idle state while the Tower Shield is equipped. Stopping movement plants the shield and crouches RAM behind directional cover; no separate guard input is required.

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
- A **Specialization** owns its **Integrity**, **Defense**, and **Mobility** Stat Tiers and references default and compatible **Equipment** by stable ID.
- Characters, Specializations, Equipment, enemies, and Bosses supply combat inputs and explicit exceptions; [[Gameplay/Gameplay Math|Gameplay Math]] owns their shared equations.
- Speaking **Bosses** remain Bosses when their authored role is primarily the Encounter; dual **NPC** and Boss classification is reserved for entities with substantial independent campaign agency beyond the fight.
- A **Specialization** owns one **Overdrive**.
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
