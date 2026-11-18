import type { MetadataRoute } from "next";
import { games, gameUrl, SITE } from "@/lib/games";

// Game pages are served from each game's own site through the /game/<name> rewrites in next.config.ts.
// Their public addresses are listed here, from the langs in each games/<name>.ts, so search engines find them under this domain.
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: SITE, changeFrequency: "monthly", priority: 1 },
        ...games.flatMap((game) => {
            const languages = Object.fromEntries(
                Object.entries(game.langs).map(([lang, path]) => [lang, gameUrl(game, path)]),
            );
            const paths = Object.values(game.langs);
            return paths.map((path) => ({
                url: gameUrl(game, path),
                changeFrequency: "weekly" as const,
                priority: 0.8,
                // A game with one language has nothing to point to as an alternate.
                ...(paths.length > 1 ? { alternates: { languages } } : {}),
            }));
        }),
        { url: `${SITE}/privacy`, changeFrequency: "yearly", priority: 0.2 },
        { url: `${SITE}/terms`, changeFrequency: "yearly", priority: 0.2 },
    ];
}
