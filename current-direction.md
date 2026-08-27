---
title: Current Direction
summary: The current narrative and campaign truth used to identify outdated or conflicting wiki material.
eyebrow: Start here
status: accepted
---

## Purpose

Use this page as the baseline while reviewing and cleaning the wiki. When another page conflicts with this summary or the accepted campaign graph, treat that page as potentially outdated and revalidate it before carrying information forward.

## Governance

> **Accepted** — This page is the approval-locked source of current narrative truth and intentional ambiguity. Unresolved claims must remain explicit TODOs rather than being treated as truth. Update this page only after the user explicitly confirms a narrative decision.

The [[Content Style Guide|content style guide]] governs how that truth is presented. This page remains revisable as decisions are confirmed; `accepted` means authoritative, not immutable.

## Source priority

1. This current-direction summary records the latest narrative intent.
2. [[Missions/Overview|Campaign progression]] records the current campaign structure.
3. [[Biomes/Overview|Biomes]] records the dominant mystery question for each campaign area.
4. Existing design, biome, and Mission prose may contain older or speculative material.

## Core premise

**Imprint Zero** follows a crew of soldiers whose bodies, memories, and identities may have been copied, reconstructed, manufactured, or otherwise altered. The crew operates under the accepted working name **Zero Division** and is deployed by [[NPCs/Operator|OPERATOR]] into a collapsing industrial world.

Every Imprint pairs lore or a memory scene with progression by unlocking a Specialization, equipment access, Overdrive, or hidden campaign evidence. The crew's exact origin and OPERATOR's identity, embodiment, authority, and relationship to the crew remain uncertain.

```mermaid
flowchart LR
    A1[Act I<br/>Assemble the crew] --> A2[Act II<br/>Four identity investigations]
    A2 -. Hidden Communion route .-> Communion[Early ending]
    A2 --> HUB2[Guardian Nexus<br/>Point of no return]
    HUB2 --> M06[M06]
    M06 --> M07[M07]
    M07 --> M08[M08]
    M08 --> M09[M09]
    M09 --> Standard[Standard ending]
    M07 -. Eligible crew .-> Extended[Extended investigations]
```

## Act I direction

Act I assembles the crew and establishes operational trust in OPERATOR through legitimate Missions with genuine immediate benefits. Later evidence may show that recovered infrastructure, material, access, or authority produced unexpected consequences or was repurposed toward identity control. Those consequences do not retroactively make the original benefits false.

## Act II direction

Act II opens four peer branches that provide competing evidence about memory construction, prior deployments, collective identity, and institutional ownership. None gives an objective account of the crew's origin.

| Rule | Current truth |
|---|---|
| Special Missions | Four spatial transitions appear to be optional shortcuts into another biome's M02; bypassed M01 Missions remain replayable. |
| Discovery | Each Special Mission requires a different unmarked action in its source Mission. |
| Extraction | The Coffin offers authored outgoing destinations with the current configuration or a return to HUB1. |
| Hub presentation | Discovered Special Missions persist for the campaign and appear only as indented, specially coloured optional paths to named biomes. |
| Concealment | Interfaces hide the downstream Mission, rewards, four-part set, and Communion relevance. |

The Communion route depends on a hidden relationship between MS01 and MS03:

```mermaid
flowchart LR
    MS01[MS01] -. Free and evacuate<br/>an enemy-like captive .-> Flag[Hidden survivor flag]
    Flag -. Survivor appears<br/>during MS03 .-> Passage[Vegetation reveals passage]
    Passage --> SE01[SE01]
    SE01 --> Choice{Accept Communion?}
    Choice -->|Yes| Ending[Communion ending]
    Choice -->|No| HUB1[Return to HUB1]
```

Background survivors establish the MS01 evacuation but do not satisfy the condition. No objective, checklist, or unlock message exposes the foreground captive requirement. The flag can be earned on replay, persists for the campaign if the MS03 passage is ignored, and resets in a new campaign. Entering SE01 does not end the campaign automatically; refusing Communion returns the player to HUB1 with the flag preserved.

## Standard Act III route

### Guardian Nexus

HUB2 is a captured transfer nexus unlocked by defeating all four Act II Guardians and used as the crew's independent Act III staging Hub. The crew understands that launching M06 permanently closes Act II but believes OPERATOR's recall still leads to routine debriefing. “Final assault” describes HUB2's campaign function, not the crew's knowledge.

Act III deaths return to HUB2. Successful M06–M08 deployments may follow authored direct routes or return there.

### Mission responsibilities

| Mission | Narrative responsibility |
|---|---|
| **M06 — Welcome Home** | OPERATOR welcomes the crew and disappears. Familiar but unoccupied barracks reveal themselves as resettable sets; the Cradle Security System classifies the crew as a returned batch, locks the exits, and routes “debriefing” into memory extraction and utilization. |
| **M07 — Recall Exercise** | Survive utilization, find evidence of earlier failed resistance, and become the first recorded intact crew to pass through B07. |
| **M08 — Umbilical** | Enter the Cradle, witness biological recycling and crew production, and infer an operation larger than one city. |
| **M09 — Imprint Zero** | Fight the four reference templates, defeat Imprint One, overload the production core, escape, and reach the Standard ending. |

### The false home

The Empty Barracks physically exists but has no resident personnel. Its barracks, training rooms, honours, and personal objects match the crew's memories while functioning as resettable conditioning sets. Debriefing and medical routes lead toward memory extraction and biological utilization.

The match cannot prove whether the current crew once trained there or received memories composed from the facility. Every available return record ends in utilization, and earlier resistance fails inside B07. No preserved record shows another complete crew reaching B08, so the Cradle treats this crew's independent, intact arrival as an unhandled condition. Missing or erased records prevent an absolute claim that no one succeeded before them.

### Cradle production model

| Input | Production function |
|---|---|
| Utilized bodies and other human remains | Provide reusable organs, tissue, nutrients, and biological feedstock. |
| **Imprint Zero** | Supplies four altered anatomical and mnemonic reference patterns. |
| Returned Mission records | Add behavioural updates, combat adaptations, and selected memories from previous crews. |

The Cradle repairs viable parts, grows missing tissue, and assembles complete bodies around the reference patterns. The process cannot reveal which physical or mnemonic pieces persist into a particular person. Continuation, copying, composition, and new personhood remain competing interpretations.

Production and deployment volume visibly exceed one city's needs. The Standard route implies a larger operation without confirming that the city is a testing ground or that Zero Division crews are contractor assets supplied to external authorities. Those facts are reserved for partial Act IV revelation.

### OPERATOR boundary

| Moment | Presentation |
|---|---|
| M06 entry | OPERATOR says only **“Welcome home”** and becomes unreachable. |
| B07–B08 | A distinct Cradle Security System uses different language, voice, and interfaces. |
| Imprint Zero activation | OPERATOR's familiar voice returns through a privileged channel, authenticates, issues a compact termination order, and disappears. |
| Imprint One activation | The same voice and authorization code force emergency activation without addressing the listening crew. |

Both M09 commands use **BASTION–AZIMUTH–BREACH–ECHO**, whose four code words covertly correspond to ROOK, VECTOR, RAM, and RELAY. OPERATOR classifies the crew as **malfunctioning assets** and gives no sign that it knows they can hear.

The commands prove only that OPERATOR-associated credentials can authorize the Cradle. They cannot prove whether OPERATOR authored or relayed the orders, is a Cradle subsystem, had its voice or credentials reused, or deliberately controls the facility.

### M09 encounters

The selected Character and Specialization remain active for the entire Mission. Every Character and Specialization must be able to defeat the complete encounter; the other crew members support through staging and communications rather than becoming player-controlled.

| Encounter | Current truth |
|---|---|
| **Imprint Zero** | Four altered reference bodies awaken sequentially. Each uses recognizable capabilities associated with one crew identity and may expose one ability the player has not unlocked. |
| **Imprint One** | A long-running prototype intended to replace a four-Character crew with one deployable body. The Cradle has repeatedly updated it with returned operational records, including the current crew's latest capabilities. |

Imprint One cannot maintain one coherent identity across all four personality patterns, memories, skills, and abilities. M09 forces its premature activation under a termination directive. Personality and combat shifts appear as malfunctions rather than communicating people; mismatches between active identity and capability create attack openings and increasing unpredictability.

The prototype exhibits no stable self, reflective agency, or capacity to stop, although the game cannot objectively disprove inner experience. The crew kills it as an uncontrolled threat. Successful continued development could have made it more capable than any individual crew member.

### Standard ending

After defeating Imprint One, the crew deliberately overloads the Cradle:

```mermaid
flowchart LR
    Defeat[Defeat Imprint One] --> Safeties[Disable production-line safeties]
    Safeties --> Redirect[RELAY redirects stored fabrication energy]
    Redirect --> Trigger[Active Character triggers irreversible overload]
    Trigger --> Escape[Full crew escapes]
    Escape --> Vista[Watch the Cradle collapse]
```

Destroying the Cradle stops the immediate production cycle and resolves the Standard campaign without proving where the crew's identity began, what **Imprint Zero** truly means, or why the wider cycle was created.

## Extended route and replay

Before leaving HUB1, a thorough player can recover all twelve Specializations and the four hidden Act II biome Memory Imprints. Entering HUB2 closes B03–B06 for that campaign. Meeting both requirements beforehand allows M07 to expose the extended route. After its shared entry Mission, one campaign chooses exactly one mutually exclusive investigation: **HA — Mind** examines memory and personality harvesting, while **HB — Body and Control** examines bodily replacement, ownership, and material control. Either investigation reaches a complete extended ending through the shared B12 sequence. The unchosen investigation requires another campaign; archived evidence remains viewable but never grants the other route's in-campaign capabilities.

After defeating the Instructor, an eligibility-gated voice-authentication interface can use the four crew voices. All twelve Specializations complete the four voice profiles and enable the interface; each Act II Biome Memory Imprint identifies one crew voice with its alternate code word and contributes that word's relative position. Together they teach **BASTION–AZIMUTH–BREACH–ECHO** without requiring a prior completion. A later completion report may provide an additional hint but is not required.

Eligible players may reorder and replay the four voices before submission. A wrong sequence produces an authentication rejection but does not commit the campaign; the player may retry or deliberately take the underground route. Correct authentication reveals an exterior route while leaving the underground route available. Entering either physical exit is the irreversible commitment. Ineligible players cannot interact with the authentication system and proceed underground normally.

The interaction is a mnemonic voiceprint sequence rather than a conventional password screen. The terminal presents four waveform slots; selecting a crew member records their mapped word—ROOK speaks **Bastion**, VECTOR **Azimuth**, RAM **Breach**, and RELAY **Echo**—and the player arranges the recordings. All three Specializations complete each Character's mnemonic and behavioural signature, while the four Biome Memory Imprints provide the mapping and order clues. Correct submission activates machinery beyond the foreground; the camera shifts forward and reveals an exterior pressure door that previously appeared to be part of the wall.

The concealed door is a legacy emergency egress reserved for the four Imprint Zero reference profiles. **BASTION–AZIMUTH–BREACH–ECHO** identifies those roles and is the same authorization identity OPERATOR uses for Imprint Zero and Imprint One activation. A normal returned crew has incomplete profiles; all twelve Specializations reconstruct enough of the four signatures for the current crew to impersonate the references collectively. The Biome Memory Imprints preserve leaked fragments of earlier facility access and reveal the challenge order. The Barracks authenticates complete descendants without proving they are the original identities.

Before eligibility, the terminal is inert background machinery without an interaction prompt. After the Instructor falls, an eligible crew causes four dormant waveform channels to illuminate; each Character hears a faint version of their own voice speaking the mapped word, and the Biome Memory Imprints briefly resonate in the evidence interface without displaying a counter or unlock message. Approaching the active terminal reveals the interaction prompt. Ineligible players see only the normal underground route and receive no indication that content was missed.

> **TODO — Exterior route:** Define the destination and immediate consequence of entering the revealed Empty Barracks exterior door. The accepted authentication, retry, and physical commitment rules remain stable while the downstream split is unresolved.

Biome Memory Imprints appear to be optional lore and are not tracked as a set during play. A non-true completion report first reveals the four-Imprint and twelve-Specialization totals without announcing the extended route. One unusually thorough campaign can reach it; cross-run progression is not required.

New campaigns reset gameplay progression and route eligibility while preserving viewed evidence and completion reports in a global archive. Archived evidence never satisfies in-campaign eligibility. Additional completions expose different Character perspectives, but no route provides a complete objective account of the crew's origin.

## Act IV topology

Entering M07's authenticated exterior door activates a legacy evacuation and maintenance rail, commits the extended route, and allows the crew to relocate all four Recovery Capsules from HUB2. Republic residents manually adapt the disconnected terminus into **HUB3 — Quiet Terminus**, a compact offline Act IV Hub. Its wired communication, shielded electronics, and manually serviced Capsules never reconnect to the experiment network. Act IV deaths return the deployed Character there; successful Missions may follow authored direct routes or return to the safehouse.

B09 — Republic of Dust is a physically adjacent predecessor experiment city. The current B01–B06 city is a newer successor built as a revised copy, reusing recognizable topology, architecture, and civic patterns. B07 occupies the successor city's edge and B08 lies beneath it. B10 and B11 present themselves as independent attraction cities but operate under the same hidden umbrella system; deeper evidence in either route points back to the control tower in Ashfall District.

```mermaid
flowchart LR
    M07[M07 exterior exit] --> HUB3[HUB3<br/>Quiet Terminus]
    HUB3 --> HS01[HS01<br/>B09]
    HS01 --> Choice{Choose one investigation}
    Choice --> HA[HA01–HA03<br/>B11 · Mind]
    Choice --> HB[HB01–HB03<br/>B10 · Body and Control]
    HA --> B12[Shared B12 sequence]
    HB --> B12
```

| Subject | Accepted direction |
|---|---|
| B09 population | Residents descend from subjects abandoned after the predecessor experiment and have manually rebuilt its ruins. |
| Detection boundary | Residents hide from the broader **experiment network**, not from a confirmed OPERATOR-controlled system. |
| Communication | Wired links replace radio-frequency communication; high-frequency devices are shielded. |
| Machines | Robots and other automated systems are disconnected from external networks, manually charged, patched, and repaired. |
| Presentation | Familiar advanced infrastructure is reshaped by hand labour, scavenged mechanics, low-technology fallback, and post-collapse civic life. |
| Names | **Republic of Dust** is the residents' name; the experiment network designates the predecessor city **CIVITAS-00**, the current successor city **CIVITAS-01**, and the next named experiment **CIVITAS-02**. |
| Old Man | A literal surviving predecessor-experiment subject maintained through repaired organs, replacement parts, and partial memory restoration. The network lists him as its last registered civilian, while his uninterrupted continuity remains uncertain. He is a fallible witness rather than an unquestionable leader and provides the two investigation leads without explaining their full organization or OPERATOR. |
| HS01 commitment | The Old Man provides a pilgrimage credential and wired route toward B11 plus a service contract or transit token toward B10. Both staging areas can be inspected before boarding either city's shielded transport; boarding commits the campaign and removes the other route. UI presents destinations and known evidence without Mind/Body labels, ending types, or route rewards. |
| B10 — Velvet Exchange / Body and Control | **Velvet Exchange** is a pleasure city providing genuine pleasure, healthcare, body modification, performance, companionship, and sensory experience while concealing a body-replacement research system. Workers and visitors may choose real services; abuse enters through ownership contracts, hidden tissue collection, engineered dependency, debt, and experimentation beyond informed consent. Replaced parts and “discarded” tissue feed R&D, premium clients test desirable bodies and augmentations, and indebted or legally reclassified people become inventory. The route distinguishes bodily autonomy from institutions converting consent into permanent ownership. |
| B11 — Cathedral of Deliverance / Mind | The **Cathedral of Deliverance** is a religious city centred on a monumental Cathedral that provides genuine community, ritual, grief support, confession, shared memory, and relief from traumatic identity. Some believers knowingly donate memories or temporarily experience other lives. Hidden systems convert spiritual surrender into permanent extraction, behavioural dependency, personality refactoring, and experimental memory wiping. Transcendence chambers offer repeated borrowed identities that gradually erode desire and agency; clergy may sincerely believe revision cures suffering while the umbrella system harvests the results. The route distinguishes chosen transformation from institutional authority over which self is acceptable. |
| Shared umbrella | B10 and B11 initially appear independent; shared infrastructure, authorization, data formats, and supply routes reveal one system without proving OPERATOR owns it. |
| B12 — Ashfall Spire | The shared route returns to a recognizable part of B01 — Ashfall District, opens a previously inaccessible elevator, and ascends through hidden control levels in the city's tallest tower. B12 remains a content ID but is geographically a vertical extension of B01 rather than the world beyond the city. |

HS02 returns through the familiar opening district and reaches the secret elevator and control levels. OPERATOR does not recognize the returning crew as the same crew and presents the approach as another ordinary deployment, repeating selected M01 instructions while the crew gives new, informed responses. HS02 remains playable by every Character and Specialization. For ROOK, the opening OPERATOR line repeats M01 exactly; for VECTOR, RAM, or RELAY, it keeps the same sentence structure and objective while substituting the deployed Character's designation. Each Character gives a different informed response, and the other crew members remain present over communications. HS02 stores repeated copy under new mission-specific dialogue IDs whose English text initially matches M01 where applicable; translator comments preserve the intentional repetition without coupling HS02 timing or later edits to M01. During the ascent, the familiar voice and transmission identity transition toward the **Controller** without proving whether OPERATOR becomes Controller, Controller displaces OPERATOR from the channel, or both labels refer to different interfaces or entities. HS03 completes the tower ascent, final challenge, and confrontation with Controller.

Controller is the proven local orchestration authority for the current urban experiment and connected facilities. It coordinates test conditions, data exchange, supply, and correction across the successor city, B10, and B11; its final boss form is a physical defence or avatar rather than proof of the total system's embodiment. OPERATOR-authenticated traffic passes through Controller infrastructure, but defeating Controller ends only centralized control of the current experiment and does not objectively identify OPERATOR.

Outside-world societies and the planetary archive are not part of the accepted Act IV route and remain available only for possible later material.

### Act IV institutional truth

HS03 proves that the local system iterates experimental cities as civic-control test environments, abandoned the predecessor city after its generation failed, uses B11 to develop controllable minds, uses B10 to develop controllable and replaceable bodies, uses the Cradle to turn selected results into Zero Division teams, and validates those teams in the current successor city. It packages manufactured teams as governance, policing, and suppression assets for external clients. The route does not identify every client, establish the operation's full geographic scale, or prove whether Controller, OPERATOR, or another organization originated the program.

### Extended ending

The playable outcome is concrete and contains no final moral-choice menu: the crew defeats Controller, deliberately severs the current city from the experiment network, automated control and surveillance stop, residents begin acting independently, and the local system can no longer enforce its rules. HA and HB change access, encounter mechanics, evidence, dialogue, interpretation, and completion reports—not the fundamental action or outcome. Separate HA and HB completion reports encourage another campaign.

An epilogue montage then shows the city being repaired manually and gradually resembling Republic of Dust through compositions that mirror B09. It does not identify whether these images are the current city's future, Republic of Dust's past, a Cathedral mind dive, a Controller prediction, or another repetition of the experiment. The ambiguity does not revoke the local victory experienced during play.

After the credits, OPERATOR addresses an unidentified team over radio: **“Good work, team. Experiment CIVITAS-01 complete. Proceed to CIVITAS-02.”** No image identifies the recipients or location. The message leaves open whether this was the final experimental city, one of many cities, or another iteration.

### Controller encounter

Controller is a tower-wide system fought through replaceable local shells and the room itself, not one definitive humanoid body. Its avatar combines civic-control hardware, maintenance machinery, and surveillance systems while doors, drones, public-address channels, and false objectives participate in the fight. Controller transfers among shells and tower infrastructure.

HA mnemonic authorization identifies false memories, corrupts behavioural predictions, and forces inconsistent decisions. HB service-root access disables shell transfer, reroutes power, and isolates physical infrastructure. Either route eventually traps one local avatar long enough to sever the city from the experiment network; destroying it does not prove Controller has no copies elsewhere.

### Act IV progression

Act IV grants no additional Specializations because all twelve are required for entry. HA grants campaign-scoped mnemonic authorization and identity-defence interactions; HB grants campaign-scoped service-root access and infrastructure-control interactions. Either route may expose optional equipment access and evidence, but no optional reward is required for basic completion. Route capabilities reset when the campaign ends. The global archive preserves only viewed evidence, dialogue, completion reports, and ending records.

Both mutually exclusive investigations contain three Missions: HA01–HA03 in B11 and HB01–HB03 in B10. The required function of the old HB04 is folded into HB03; HB04 is retired before population work.

| HA Mission | Accepted responsibility |
|---|---|
| HA01 | Enter as pilgrims, experience genuine Cathedral community, and identify experiment-network data structures beneath confession and donated-memory systems. |
| HA02 | Descend through transcendence chambers where borrowed identities create dependency; survive memory and personality shifts without declaring one source “real.” |
| HA03 | Reach the concealed identity refinery, expose how harvested personalities feed successor-city experiments, defeat its custodian, and recover mnemonic authorization for Ashfall Tower. |

The HA route proves extraction and recombination but never identifies one original donor or objectively labels every memory true or false.

| HB Mission | Accepted responsibility |
|---|---|
| HB01 | Enter through the Old Man's service contract, experience genuine bodily freedom and pleasure, and uncover concealed collection and ownership clauses. |
| HB02 | Descend into modular-body R&D containing transferable organs, replaceable frames, biomechanical forms, and experimental body plans selectively reused by later production systems. |
| HB03 | Reach the ownership registry and research command, expose how B10 feeds the Cradle and successor-city experiment, defeat its enforcement authority, and recover material authorization for Ashfall Tower. |

HB03 absorbs the useful function of the old Final Directive without confronting OPERATOR or resolving the wider experiment before B12.

Ashfall Tower accepts two independent privileged paths. HA recovers a complete mnemonic command identity from B11 and impersonates an accepted supervisory mind; HB recovers B10's physical service-root and ownership credential and overrides the elevator and tower hardware. Both open the shared ascent. HA can resist or corrupt Controller identity rewriting and behavioural prediction, while HB can disable, reroute, or physically seize Controller infrastructure. Neither capability is superior, each supports a complete ending, and the unchosen method remains unavailable in that campaign.

## Truth boundaries

> **TODO — Deferred naming:** **Zero Division** remains the accepted working name during this cleanup. Revisit the organization name separately and update dependent pages only after a replacement is approved.

| Subject | Current position |
|---|---|
| Crew organization | **Zero Division** is the accepted working name for this cleanup; renaming is deferred. |
| OPERATOR | Its identity and relationship to the command system remain uncertain. |
| Crew origin | Permanently ambiguous; multiple completions reveal partial and potentially conflicting evidence. |
| Personhood | An artificial, copied, composite, or reconstructed origin does not invalidate personhood. |
| Imprints | Pair lore or a memory scene with a Specialization, equipment access, Overdrive, or hidden campaign evidence. |
| Imprint Zero | Four altered Cradle reference templates; the designation's meaning and whether they are originals, copies, donors, or composites remain unresolved through the Standard ending. |
| Imprint One | An identity-unstable prototype intended to replace a four-Character crew; premature activation exposes failed integration, a termination directive, and no demonstrable reflective agency. |
| Standard campaign | Ends after the crew defeats Imprint Zero and Imprint One, destroys the Cradle, and stops the immediate production cycle. |
| Communion route | Hidden early ending reached through the Continuum. |
| Extended route | One campaign chooses HA or HB; either investigation converges on the shared B12 sequence without completely resolving the crew's origin. |
