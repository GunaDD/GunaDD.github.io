# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

Gunadi Gani's personal website: a single static page at
<https://gunadd.github.io>, whose design follows <https://mntruell.com>.

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
src/pages/index.astro     the page — h1 plus three paragraphs
src/pages/404.astro       minimal not-found
src/layouts/Layout.astro  html/head/body and the three-div holder
src/components/Head.astro meta tags only
src/consts.ts             name, description, email, social links
src/styles/global.css     the entire design
```

## The design, and how not to break it

The whole point is that almost nothing is overridden. Browser defaults are
left alone on purpose — body margin, paragraph spacing, link underlines. When
adding something, prefer the default over a rule.

- Type is `"Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif`
  at `1em`; `h1` is `2em`. No webfonts — every face in that stack is a system
  font, and adding one would mean a network request on a page that currently
  makes none.
- `#holder` is a flex row of three divs. Both gutters grow, but `#left` caps
  at `4em` while `#right` is uncapped, so the `31em` `#middle` column sits
  left of centre on a wide screen. This asymmetry is intentional.
- Links are `#660000`, `#400000` on hover.
- **Light only.** There is no dark palette and no theme toggle; `color-scheme:
  light` on `html` stops browsers inverting controls to match a dark OS.
- **No JavaScript ships.** Keep it that way unless asked.

## Gotchas

- In `.astro` templates, a `.map()` broken across lines emits a text node per
  newline, which renders as a stray space before punctuation. The socials list
  in `index.astro` is on one line for exactly this reason.
- The repo name is what puts the site at the bare domain. A user site
  (`<user>.github.io`) serves from the root, so there is no `base` in
  `astro.config.mjs`; renaming the repo would require adding one.
