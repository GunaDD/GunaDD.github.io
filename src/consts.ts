import type { Site, Socials } from "@types";

// ─────────────────────────────────────────────────────────────
// EDIT ME. Name, description, and links for the single page.
// The bio itself lives in src/pages/index.astro.
// ─────────────────────────────────────────────────────────────

export const SITE: Site = {
  TITLE: "Gunadi Gani",
  DESCRIPTION: "Gunadi Gani's website",
  // Top-right of every page, opposite the name.
  AFFILIATION: "University of Waterloo",
  // Bottom-right of every page, in the "Happy to chat" line.
  DISCORD: "gunadi",
  EMAIL: "ggani@uwaterloo.ca",
};

// Bottom-left of every page, as a row of links.
export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/GunaDD",
  },
  {
    NAME: "X",
    HREF: "https://x.com/Gunadi_18",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/gunadigani/",
  },
];
