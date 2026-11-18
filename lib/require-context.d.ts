// require.context is provided by the bundler (Turbopack and webpack); this is the part of it lib/games.ts uses.
declare namespace NodeJS {
    interface Require {
        context(
            directory: string,
            useSubdirectories: boolean,
            regExp: RegExp,
        ): { keys(): string[]; (id: string): unknown };
    }
}
