import { readdirSync } from "node:fs";
import path from "node:path";
import type { NextConfig } from "next";
import type { GameFile } from "./lib/game";

// Games live at /game/<name>. Each game keeps its own site and repository; this only maps the address.
// Every .ts file in games/ is a game, and its file name is <name>. Nothing here changes when a game is added.
// (The app reads the same folder through lib/games.ts; this file runs outside the bundler, so it reads the folder itself.)
const GAMES_DIR = path.join(process.cwd(), "games");

const origins = readdirSync(GAMES_DIR)
    .filter((file) => file.endsWith(".ts"))
    .sort()
    .map((file): [string, string] => {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const game: GameFile = require(path.join(GAMES_DIR, file)).default;
        return [file.slice(0, -3), game.origin];
    });

const nextConfig: NextConfig = {
    async rewrites() {
        return origins.flatMap(([name, origin]) => [
            { source: `/game/${name}`, destination: `${origin}/` },
            { source: `/game/${name}/:path*`, destination: `${origin}/:path*` },
        ]);
    },
};

export default nextConfig;
