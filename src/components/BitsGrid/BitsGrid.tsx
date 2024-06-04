import { TextBox } from "../TextBox/TextBox.tsx";
import "./BitsGrid.css";
import { GridDisplay } from "../GridDisplay/GridDisplay.tsx";
import { Cells } from "../../types.tsx";

type BitsGridProps = {
  cells: Cells;
  boxLabel: string;
};

export const BitsGrid = ({ cells, boxLabel }: BitsGridProps) => {
  return (
    <div className="bits-grid">
      <TextBox title={boxLabel}>{cells}</TextBox>
      <GridDisplay cells={cells} />
    </div>
  );
};
