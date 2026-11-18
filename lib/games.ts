import { sortGames, type Game, type GameFile } from "./game";

// Every .ts file in games/ is a game. The bundler collects the folder, so there is no list to keep by hand.
// (next.config.ts cannot use this file: it runs outside the bundler and reads the folder itself.)
const files = require.context("../games", false, /\.ts$/);

export const games: Game[] = sortGames(
    [...new Set(files.keys().filter((key) => key.startsWith("./")))].map((key) => ({
        ...(files(key) as { default: GameFile }).default,
        name: key.slice(2, -3),
    })),
);

export const SITE = "https://www.dropdown.xyz";

export function gameUrl(game: Game, path = ""): string {
    return `${SITE}/game/${game.name}${path}`;
}
