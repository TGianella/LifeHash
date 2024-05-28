import {TextBox} from "../TextBox/TextBox.tsx";
import './BitsGrid.css'
import {GridDisplay} from "../GridDisplay/GridDisplay.tsx";
import {Universe} from "@tgianella/js-game-of-life";
import {Seed} from "../../types.tsx";

type BitsGridProps = {
    bits: Seed;
    boxLabel: string;
}

export const BitsGrid = ({bits, boxLabel}: BitsGridProps) => {
    const universe = new Universe(!bits.length, 16, 16, bits.length ? bits : null);
    return (
        <div className="bits-grid">
            <TextBox title={boxLabel}>{bits}</TextBox>
            <GridDisplay universe={universe} />
        </div>
    )
}