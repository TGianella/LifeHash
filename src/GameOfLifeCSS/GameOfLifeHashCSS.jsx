import {Arrow} from "../Arrow.jsx";
import {GameOfLifeDisplayCSS} from "./GameOfLifeDisplayCSS.jsx";
import {GameOfLifeCSS} from "./GameOfLifeCSS.jsx";
import {Universe} from "@tgianella/js-game-of-life";
import "../GameOfLifeHash.css"

export const GameOfLifeHashCSS = ({seed, setResultBits}) => {
    const universe = new Universe(!seed.length, 16, 16, seed.length ? seed : null);

    return (
        <div className="game-of-life-wrapper">
            <GameOfLifeDisplayCSS universe={universe} />
            <Arrow />
            <GameOfLifeCSS key={seed} initialUniverse={universe} setResultBits={setResultBits}/>
        </div>
    )
}