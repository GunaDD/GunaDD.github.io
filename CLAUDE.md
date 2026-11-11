# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

Gunadi Gani's personal website: a single static page at
<https://gunadd.github.io>. The bio is set as one very large statement, with
a small header and footer pinned to the top and bottom of the viewport.

Astro 5, and nothing else. No CSS framework, no UI framework, no content
collections, no client-side JavaScript. Astro earns its place only by
providing the sitemap, canonical URLs, and `astro check`.

## Commands

```sh
npm run dev      # http://localhost:4321
npm run build    # astro check (type-check) then build to dist/
npm run preview  # serve dist/ locally
```

No test suite, no lint script. `npm run build` is the verification step.

## Layout

```
src/pages/index.astro     the page — the bio, as one .statement paragraph
src/pages/404.astro       not-found, in the same statement style
src/layouts/Layout.astro  html/head/body: header (name, affiliation),
                          main (the slot), footer (socials, contact line)
src/components/Head.astro meta tags and the font preload
src/consts.ts             name, description, affiliation, Discord, email, socials
src/styles/global.css     the entire design, including the @font-face
public/fonts/             the one self-hosted font file, and its OFL licence
```

## The design, and how not to break it

One typeface, two sizes: `15px` for the header and footer, and a fluid
`clamp(1.9rem, 4.1vw, 4.5rem)` for the statement. Resist adding a third.

- Type is Bricolage Grotesque, weight `500` only, self-hosted from
  `public/fonts/` (latin subset of the variable font, optical-size axis kept so
  large and small text each get the right cut). The page contacts no third
  party; don't switch to a Google Fonts `<link>`. A new weight or script means
  a new font file.
- The statement is `--soft` grey; key phrases are wrapped in `<b>` (styled as
  ink, not bold) and links are ink too. Read only the ink words and they should
  still summarise the bio — keep that true when editing the copy.
- `--soft` is `#898882`, the lightest grey that still clears 3:1 against the
  `#f1f0ec` background (the WCAG minimum for large text). Don't lighten it.
- `body` is a full-height flex column with `justify-content: space-between`:
  header at the top, footer at the bottom, statement in between.
- Links are ink, underlined in the statement and bare in the header/footer;
  `#ff4d00` on hover.
- **Light only.** There is no dark palette and no theme toggle; `color-scheme:
  light` on `html` stops browsers inverting controls to match a dark OS.
- **No JavaScript ships.** Keep it that way unless asked.

## Gotchas

- In `.astro` templates, a `.map()` broken across lines emits a text node per
  newline, which renders as stray whitespace. The socials `<nav>` in
  `Layout.astro` is on one line for exactly this reason.
- The repo name is what puts the site at the bare domain. A user site
  (`<user>.github.io`) serves from the root, so there is no `base` in
  `astro.config.mjs`; renaming the repo would require adding one.
