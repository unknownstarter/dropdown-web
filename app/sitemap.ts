import type { MetadataRoute } from "next";

const SITE = "https://www.dropdown.xyz";

// Game pages are served from each game's own site through the /game/<name> rewrites in next.config.ts.
// List their public addresses here so search engines find them under this domain.
const TILTDOWN_LANGS: Record<string, string> = {
  ko: "",
  en: "/en",
  ja: "/ja",
  "zh-Hans": "/zh",
  "zh-Hant": "/zh-tw",
};

const DEAR_LANGS: Record<string, string> = {
  ko: "",
  en: "/en",
  ja: "/ja",
  "zh-Hans": "/zh-hans",
  "zh-Hant": "/zh-hant",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const tiltdown = `${SITE}/game/tiltdown`;
  const languages = Object.fromEntries(
    Object.entries(TILTDOWN_LANGS).map(([lang, path]) => [lang, tiltdown + path]),
  );
  return [
    { url: SITE, changeFrequency: "monthly", priority: 1 },
    ...Object.values(DEAR_LANGS).map((path) => ({
      url: `${SITE}/game/dear` + path,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: { languages: Object.fromEntries(Object.entries(DEAR_LANGS).map(([lang, p]) => [lang, `${SITE}/game/dear` + p])) },
    })),
    { url: `${SITE}/game/breakzero`, changeFrequency: "weekly", priority: 0.8 },
    ...Object.values(TILTDOWN_LANGS).map((path) => ({
      url: tiltdown + path,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: { languages },
    })),
    { url: `${SITE}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
