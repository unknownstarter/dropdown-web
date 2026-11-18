import type { GameFile } from "../lib/game";

const game: GameFile = {
    order: 1,
    origin: "https://dear-island.vercel.app",
    langs: {
        ko: "",
        en: "/en",
        ja: "/ja",
        "zh-Hans": "/zh-hans",
        "zh-Hant": "/zh-hant",
    },
    card: {
        title: "Dear (Game)",
        desc: "Raise a baby fawn on a little island.",
        icon: "Sprout",
    },
    footerLabel: "Dear",
    llms: {
        title: "Dear: Little Fawn Island",
        path: "/en",
        summary: "a quiet game about raising a baby fawn on a tiny island.",
    },
};

export default game;
