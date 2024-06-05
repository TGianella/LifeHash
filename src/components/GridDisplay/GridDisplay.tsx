import "./GridDisplay.css";
import { Cells } from "../../types.tsx";

type GridDisplayProps = {
  cells: Cells;
};

const emptyGrid = Array.from("0".repeat(256)).map(Number) as Cells;

export const GridDisplay = ({ cells }: GridDisplayProps) => {
  const displayCells = cells.length ? cells : emptyGrid;

  return (
    <div data-testid="display-grid" className="grid-container">
      {displayCells.map((cell, i) => (
        <div data-testid="cell" key={i} className={`cell ${cell === 1 ? "alive" : "dead"}`}></div>
      ))}
    </div>
  );
};
