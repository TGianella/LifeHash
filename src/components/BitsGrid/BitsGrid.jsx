import {TextBox} from "../TextBox/TextBox.jsx";
import './BitsGrid.css'
import {GridDisplay} from "../GridDisplay/GridDisplay.tsx";
import {Universe} from "@tgianella/js-game-of-life";

export const BitsGrid = ({bits, boxLabel}) => {
    const universe = new Universe(!bits.length, 16, 16, bits.length ? bits : null);
    return (
        <div className="bits-grid">
            <TextBox title={boxLabel}>{bits}</TextBox>
            <GridDisplay universe={universe} />
        </div>
    )
}