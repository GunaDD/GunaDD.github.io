# GunaDD.github.io

Personal website — one page, served at <https://gunadd.github.io>.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks, then builds to dist/
npm run preview  # serve dist/ locally
```

## What this is

A deliberately plain single page: black text on white, one column, no
JavaScript. The design follows <https://mntruell.com>.

Astro is here only as a build step — for the sitemap, canonical URLs, and
type-checking. There is no CSS framework, no theme system, no content
collections, and no client-side script. The built page inlines its entire
stylesheet.

## Editing

- **Text** — `src/pages/index.astro`. Three paragraphs, marked `EDIT ME`.
- **Name, description, links, email** — `src/consts.ts`.
- **Design** — `src/styles/global.css`, about 50 lines and the whole of it.

`npm run build` runs `astro check`, so type errors fail the build. There is no
test suite.

## License

The project scaffolding originally came from the
[Astro Micro](https://github.com/trevortylerlee/astro-micro) template; its MIT
license is kept in [LICENSE](./LICENSE). None of the template's styling or
components remain.
