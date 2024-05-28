declare module '@tgianella/js-game-of-life' {

    declare class Cell {
        constructor(state: number);
        state: number;
    }

    declare class Universe {
        constructor(blank: boolean, width: number, height: number, seed?: Cell[] | number[] | string[]);
        tick();
        width: number;
        height: number;
        cellSize: number;
        cells: Cell[];
    }

    export {Universe};
}

