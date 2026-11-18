import { games, gameUrl, SITE } from "@/lib/games";

// /llms.txt: a short plain-text guide to the company for AI assistants.
// The games section is built from games/<name>.ts; each game's own facts live in its site's llms.txt, which is only linked here.
export const dynamic = "force-static";

const PRODUCTS = [
    "[milkyway (iOS)](https://apps.apple.com/kr/app/id6741465148): a place where thoughts meet.",
    "[milkyway (Android)](https://play.google.com/store/apps/details?id=com.whatif.milkyway.android)",
    "[Vibe Semantic](https://www.vibesemantic.xyz/): your product's data analyst AI agent.",
    "[momo (iOS)](https://apps.apple.com/kr/app/id6760338547): every fated bond has a reason.",
    "[momo (Web)](https://fatemomo.xyz): read your fate, match with friends.",
    "[Fan to Pro](https://growthcareer.xyz): from K-culture passion to global career.",
];

export function GET() {
    const gameLines = games.map((game) => {
        const summary = game.llms.summary ? `: ${game.llms.summary}` : ".";
        return `- [${game.llms.title}](${gameUrl(game, game.llms.path)})${summary} More facts: ${gameUrl(game, "/llms.txt")}`;
    });

    const body = [
        "# Dropdown",
        "",
        "> Dropdown is a small independent studio in Seoul, South Korea. It makes mobile games and small apps. Contact: hello@dropdown.xyz",
        "",
        "## Products",
        ...PRODUCTS.map((line) => `- ${line}`),
        "",
        "## Games",
        ...gameLines,
        "",
        "## Site",
        `- [Home](${SITE})`,
        `- [Sitemap](${SITE}/sitemap.xml)`,
        "",
    ].join("\n");

    return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
