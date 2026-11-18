import type { GameFile } from "../lib/game";

const game: GameFile = {
    order: 2,
    origin: "https://tiltdown.vercel.app",
    langs: {
        ko: "",
        en: "/en",
        ja: "/ja",
        "zh-Hans": "/zh",
        "zh-Hant": "/zh-tw",
    },
    card: {
        title: "TILTDOWN (Game)",
        desc: "100 jellies, one start line.",
        icon: "Gamepad2",
    },
    footerLabel: "TILTDOWN",
    llms: {
        title: "TILTDOWN",
        path: "/en",
        summary:
            "free party game for iPhone and Android. 100 jellies race down one obstacle course and shove each other off. Rounds take about one minute. Friends-only matches for 2 to 12 players with one invite link.",
    },
};

export default game;
