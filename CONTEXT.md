# Imprint Zero Domain Language

Canonical language for the game's crew, progression, and campaign structure.

## Language

**Character**:
A persistent crew member with an innate combat identity and Character-owned optional-route verb.
_Avoid_: Hero, class

**Specialization**:
One of three full-Mission play styles belonging to a Character.
_Avoid_: Subclass, loadout

**Overdrive**:
The temporary transformation unique to the selected Specialization.
_Avoid_: Ultimate, generic power-up

**Memory Imprint**:
An artifact that pairs lore or a memory scene with an explicit progression result.
_Avoid_: Passive lore collectible

**Equipment Imprint**:
A Memory Imprint that reveals access to an equipment source, blueprint, shop item, or crafting path without directly granting the equipment.

**Biome Memory Imprint**:
A hidden Act II Memory Imprint that provides Character-specific perspective and contributes to extended-route eligibility without direct combat power.

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
- A **Specialization** owns one **Overdrive**.
- Every **Memory Imprint** pairs narrative evidence with progression.
- A **Character** has three Specialization-specific **Recovery Capsule** variants, of which only unlocked variants can be selected.
- A **Hub** contains four Character-assigned docking stations with one selected **Recovery Capsule** variant docked per available **Character**.
- After HUB0, Mission death returns the deployed **Character** in the **Coffin** belonging to their selected **Specialization**, without resource loss.

## Example dialogue

> **Crew:** “Back in the **Coffin** again.”
> **System:** “**Recovery Capsule** docked. Select a **Character**, **Specialization**, and equipment before redeployment.”

## Flagged ambiguities

- “Subclass” previously meant **Specialization**; use **Specialization** consistently.
- “Coffin” is crew slang, while **Recovery Capsule** is the institutional and system term.
