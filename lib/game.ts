// The shape of one game file in games/. See README.md ("Games") for the rules.

/** Icons a game card can use. To allow a new one, add it here and in lib/game-icons.tsx. */
export type GameIconName = "Sprout" | "Gamepad2";

export type GameFile = {
    /** Position among the games in the product list, footer and llms.txt. Lowest first; ties go by file name. */
    order: number;
    /** The game's own site. /game/<file name> and everything under it is served from here. */
    origin: string;
    /** Language code to the path of that language's page on the game's site ("" is the root). Each one is listed in the sitemap. */
    langs: Record<string, string>;
    /** The card in the product list on the home page. */
    card: { title: string; desc: string; icon: GameIconName };
    /** Short name for the plain link in the footer. */
    footerLabel: string;
    /** The game's line in /llms.txt. `path` is the page to link (one of the langs paths); the game's own llms.txt is linked automatically. */
    llms: { title: string; path: string; summary?: string };
};

/** A game file plus its name, which is the file name without ".ts" and the <name> in /game/<name>. */
export type Game = GameFile & { name: string };

export function sortGames(games: Game[]): Game[] {
    return [...games].sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
}
