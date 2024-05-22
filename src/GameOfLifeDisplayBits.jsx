import {TextBox} from "./TextBox.jsx";
import './GameOfLifeDisplayBits.css'
import {GameOfLifeDisplayCSS} from "./GameOfLifeCSS/GameOfLifeDisplayCSS.jsx";
import {Universe} from "@tgianella/js-game-of-life";

export const GameOfLifeDisplayBits = ({bits, boxLabel}) => {
    const universe = new Universe(!bits.length, 16, 16, bits.length ? bits : null);
    return (
        <div className="game-of-life-display-bits">
            <TextBox title={boxLabel}>{bits}</TextBox>
            <GameOfLifeDisplayCSS universe={universe} />
        </div>
    )
}