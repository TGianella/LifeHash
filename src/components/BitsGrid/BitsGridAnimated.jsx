import {TextBox} from "../TextBox/TextBox.jsx";
import {Universe} from "@tgianella/js-game-of-life";
import {GameOfLifeCSS} from "../../GameOfLifeCSS/GameOfLifeCSS.jsx";

export const BitsGridAnimated = ({initialBits, setResultBits, resultBits, boxLabel, setGlobalFinished, hasInput}) => {
    const universe = new Universe(!initialBits.length, 16, 16, initialBits.length ? initialBits : null);

    return (
        <div className="bits-grid">
            <TextBox title={boxLabel}>{hasInput ? resultBits : ''}</TextBox>
            <GameOfLifeCSS key={initialBits} initialUniverse={universe} setResultBits={setResultBits} setGlobalFinished={setGlobalFinished}/>
        </div>
    )

}