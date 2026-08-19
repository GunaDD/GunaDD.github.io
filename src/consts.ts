import type { Site, Socials } from "@types";

// ─────────────────────────────────────────────────────────────
// EDIT ME. Name, description, and links for the single page.
// ─────────────────────────────────────────────────────────────

export const SITE: Site = {
  TITLE: "Gunadi Gani",
  DESCRIPTION: "Gunadi Gani's website",
  // Written out longhand on the page rather than linked, to keep it
  // off the scrapers. Change both if you change this.
  EMAIL: "ggani at uwaterloo dot ca",
};

// Rendered inline, lowercase, in one sentence — not as a list.
export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/GunaDD",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/gunadigani/",
  },
];
