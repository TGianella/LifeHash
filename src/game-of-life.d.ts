declare module '@tgianella/js-game-of-life' {

    import {Seed} from "./types.tsx";

    declare class Cell {
        constructor(state: number);
        state: number;
    }

    declare class Universe {
        constructor(blank: boolean, width: number, height: number, seed?: Cell[] | Seed | string[] | null);
        tick();
        width: number;
        height: number;
        cellSize: number;
        cells: Cell[];
    }

    export {Universe};
}

