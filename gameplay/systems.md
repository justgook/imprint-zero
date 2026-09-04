---
title: Shared Gameplay Systems
summary: Index of campaign-wide rules, equations, progression, and configuration systems.
eyebrow: Gameplay
status: in-progress
---

## System ownership

| System page | Canonical responsibility |
|---|---|
| [[Gameplay/Mechanics|Mechanics]] | Shared movement, combat, camera, damage, and cross-content interaction rules |
| [[Gameplay/Gameplay Math|Gameplay Math]] | Equations, tiers, modifiers, rounding, and clamping |
| [[Gameplay/Blueprints|Blueprints and Research]] | Shared loot fragments, direct unlocks, Research Terminal, and HUB Mesh Dive research |
| [[Gameplay/Progression|Progression]] | Deployment, persistence, death-cycle, Hub, and campaign advancement rules |
| [[Gameplay/Overdrive|Specializations and Overdrive]] | Configuration layers, Specialization selection, and Overdrive boundaries |

```mermaid
flowchart LR
    Actions[Actions] --> Mechanics[Mechanics]
    Content[Character and Equipment inputs] --> Mechanics
    Mechanics --> Math[Gameplay Math]
    Content --> Blueprints[Blueprints and Research]
    Blueprints --> Content
    Progression[Progression] --> Configuration[Specializations and Overdrive]
    Configuration --> Content
```

Individual content pages supply local inputs and exceptions rather than duplicating shared rules from this group.
