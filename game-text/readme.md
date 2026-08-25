---
title: Game Text
summary: ID-based gettext catalogues for all player-facing and spoken text.
eyebrow: Localization
status: in-progress
---

## Catalogue domains

| Catalogue | Content | Status |
| --- | --- | --- |
| [[locale/en/dialogue.po|Dialogue]] | Spoken dialogue, radio communication, and subtitles | Active |
| [[locale/en/context.po|Context]] | Common characters, items, conditions, and other context terms | Active |
| [[locale/en/credits.po|Credits]] | Credits terminology | Active |
| [[locale/en/description.po|Description]] | Game and genre descriptions | Active |
| [[locale/en/errors.po|Errors]] | Common error messages | Active |
| [[locale/en/gameplay.po|Gameplay]] | Common actions, objectives, and gameplay terms | Active |
| [[locale/en/menus.po|Menus]] | Common menu and settings text | Active |

## Source convention

Catalogues use opaque, stable IDs rather than English source text:

- `msgid` is the stable namespaced ID used by game code;
- `msgstr` is the player-facing value, including in the English catalogue;
- `msgctxt` is reserved for the rare case where one ID needs distinct contextual translations;
- extracted comments describe grammar, speaker, delivery, placement, and translator intent;
- source references identify the design document or room where project-authored text is used.

```po
#. Speaker: OPERATOR
#: missions/m01.md:R01
msgid "dialogue.m01.com01.l001"
msgstr "ROOK, deployment confirmed."
```

Runtime substitutions use printf-style placeholders: `%s` for text and `%d` for integers. Entries containing placeholders carry the project-specific `game-format` flag, and every translation must preserve the English placeholder types:

```po
#. %s is the localized device name.
#, game-format
msgid "error.device.not.found"
msgstr "No %s detected."
```

The standard gettext `c-format` flag is intentionally not used: it validates placeholders by comparing `msgid` with `msgstr`, but this project keeps opaque IDs—not source text—in `msgid`. Project tests perform the equivalent validation between locale catalogues instead.

Every configured catalogue must provide a non-empty `msgstr` for every ID. Validation rejects incomplete catalogues, mismatched printf placeholders, and missing `game-format` flags. Game logic and mission diagrams refer to stable IDs; changing English copy does not require changing those IDs.

### Development fallback

When new English text is not ready for translation, add its stable ID to every configured locale and use that ID itself as the non-English `msgstr`. An untranslated entry such as `msgstr "dialogue.m09.com01.l001"` is deliberately conspicuous in builds and cannot be mistaken for completed localization. Replace ID fallbacks with translated text only after the English copy is approved; do not copy provisional English into non-English catalogues.

## Locales

Player-facing catalogues live under the top-level `locale/<language>/` directory. The English files are linked from the sidebar; each catalogue page provides links to the same file in every language configured in `_config.md`.

The initial supported set is English, Simplified Chinese, German, French, Brazilian Portuguese, Latin American Spanish, Spanish for Spain, Polish, Russian, Japanese, Korean, and Bulgarian. The two Spanish catalogues intentionally begin with identical text so native review can introduce regional differences without changing IDs or file structure.

Catalogue strings are intended as isolated terms and short UI phrases, not composable sentence fragments.

## Dialogue IDs

```text
dialogue.<mission>.<communication>.<line>
dialogue.m01.com03.l002
```

A `COM` ID identifies a communication event in a mission graph. Its child line IDs identify independently translatable and timeable spoken lines.
