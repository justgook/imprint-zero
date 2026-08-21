---
title: Content budget
summary: The ordered decision queue; unresolved matters stay here until moved into their canonical design page.
eyebrow: Production
status: in-progress
---

## Runtime target

| Metric | Minimum | Target | Maximum |
|---|---:|---:|---:|
| First playthrough | 180 min | 240 min | 300 min |
| Critical-path gameplay | 150 min | 200 min | 240 min |
| Briefings and narrative | 20 min | 30 min | 40 min |
| Expected retries | 10 min | 25 min | 40 min |

## Visual-production feasibility

Do not approve a visual style from a single hero image. Measure its cost on the most frequently produced asset classes in the representative encounter.

The first-order estimate for one asset class is:

$$
H_{class} = Q \times (H_{create} + H_{adapt} + H_{animate} + H_{integrate}) \times (1 + R)
$$

| Variable | Meaning |
|---|---|
| $H_{class}$ | Total production hours for the asset class |
| $Q$ | Required quantity after reuse |
| $H_{create}$ | Median hours to create or source one asset |
| $H_{adapt}$ | Median hours to bring it into the shared style contract |
| $H_{animate}$ | Median animation and motion-polish hours |
| $H_{integrate}$ | Median implementation and gameplay-review hours |
| $R$ | Revision allowance as a decimal |

Use measured median times, not optimistic guesses. Re-estimate whenever palette, pixel scale, outline treatment, animation scope, or required variants change.

### Representative sampling sheet

| Asset class | Sample | Quantity | Create/source h | Adapt h | Animate h | Integrate h | Revision % | Estimated total h | Evidence |
|---|---|---:|---:|---:|---:|---:|---:|---:|---|
| Player | ROOK baseline set | TBD | TBD | TBD | TBD | TBD | TBD | TBD | Needed |
| Core enemy | Horizontal Sentry | TBD | TBD | TBD | TBD | TBD | TBD | TBD | Needed |
| Core enemy | Shield Enforcer | TBD | TBD | TBD | TBD | TBD | TBD | TBD | Needed |
| Environment | Freight modular kit | TBD | TBD | TBD | TBD | TBD | TBD | TBD | Needed |
| Hazard | Cargo crane | TBD | TBD | TBD | TBD | TBD | TBD | TBD | Needed |
| Effects | Baseline combat effects | TBD | TBD | TBD | TBD | TBD | TBD | TBD | Needed |
| Interface | Integrity and interaction signals | TBD | TBD | TBD | TBD | TBD | TBD | TBD | Needed |

> **Needs evidence** — Time one complete sample per row while building the freight-terminal slice. If the resulting total does not fit available production hours, reduce quantity, animation scope, detail, or uniqueness before expanding content.

See [[Design/Art Direction|Art direction]] for the four-axis contract and acceptance tests.

## Planned content

| Content type | Minimum | Target | Maximum | Currently defined |
|---|---:|---:|---:|---:|
| Missions | 8 | 10 | 12 | 5 |
| Biomes | 4 | 5 | 6 | 4 |
| Locations | 8 | 10 | 14 | 5 |
| Core enemies | 10 | 12 | 14 | 2 |
| Enemy variants | 6 | 10 | 14 | 0 |
| Minibosses | 4 | 5 | 7 | 0 |
| Bosses | 6 | 8 | 10 | 0 |
| Weapons | 6 | 8 | 12 | 1 |
| Memory Imprints | 12 | 20 | 30 | 1 |
| Major set pieces | 5 | 8 | 10 | 0 |
