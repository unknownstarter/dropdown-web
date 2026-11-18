import type { GameFile } from "../lib/game";

const game: GameFile = {
    order: 3,
    origin: "https://breakzero.vercel.app",
    langs: {
        ko: "",
        en: "/en",
    },
    card: {
        title: "BREAK ZERO (Game)",
        desc: "Breaking news! A BREAK hits Seoul.",
        icon: "Gamepad2",
    },
    footerLabel: "BREAK ZERO",
    llms: {
        title: "BREAK ZERO: Seoul Mage Defense",
        path: "/en",
        summary:
            "free mobile action game for Android and iPhone. A crack opens in the sky over Seoul and an office worker on the way home fights off monsters with magic. 2-minute runs, 12 spells that evolve three times, auto battle.",
    },
};

export default game;
