declare module "@tgianella/js-game-of-life" {
  import { Cells } from "./types.tsx";

  declare function computeNextGeneration(
    cells: Cells,
    width: number,
    height: number,
  ): Cells;

  export { computeNextGeneration };
}
