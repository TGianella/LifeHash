import {TextBox} from "../TextBox/TextBox.tsx";
import './BitsGrid.css'
import {GridDisplay} from "../GridDisplay/GridDisplay.tsx";
import {Cells} from "../../types.tsx";

type BitsGridProps = {
    bits: Cells;
    boxLabel: string;
}

export const BitsGrid = ({bits, boxLabel}: BitsGridProps) => {
    return (
        <div className="bits-grid">
            <TextBox title={boxLabel}>{bits}</TextBox>
            <GridDisplay universe={bits} />
        </div>
    )
}