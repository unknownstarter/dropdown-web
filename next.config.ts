import type { NextConfig } from "next";

// Games live at /game/<name>. Each game keeps its own site and repository; this only maps the address.
const GAMES: Record<string, string> = {
  dear: "https://dear-island.vercel.app",
  tiltdown: "https://tiltdown.vercel.app",
  breakzero: "https://breakzero.vercel.app",
};

const nextConfig: NextConfig = {
  async rewrites() {
    return Object.entries(GAMES).flatMap(([name, origin]) => [
      { source: `/game/${name}`, destination: `${origin}/` },
      { source: `/game/${name}/:path*`, destination: `${origin}/:path*` },
    ]);
  },
};

export default nextConfig;
