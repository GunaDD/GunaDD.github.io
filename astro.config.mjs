import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Canonical URLs and the sitemap are built from this.
  // No `base` needed — GunaDD.github.io is a user site, served from the root.
  // Change this if you later point a custom domain at the repo.
  site: "https://gunadd.github.io",
  integrations: [sitemap()],
});
