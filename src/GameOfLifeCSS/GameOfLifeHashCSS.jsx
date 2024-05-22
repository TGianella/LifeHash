import "../GameOfLifeHash.css"
import "./GameOfLifeHashCSS.css"
import {GameOfLifeDisplayBits} from "../GameOfLifeDisplayBits.jsx";
import {GameOfLifeBits} from "../GameOfLifeBits.jsx";

export const GameOfLifeHashCSS = ({seed, setResultBits, resultBits, setGlobalFinished, hasInput}) => {
    return (
        <div className="game-of-life-wrapper">
            <GameOfLifeDisplayBits bits={seed} boxLabel="Bits en clair"/>
            <div className="separator">
                <div className="arrow-separator"></div>
            </div>
            <GameOfLifeBits
                initialBits={seed}
                setResultBits={setResultBits}
                boxLabel="Bits hachés"
                resultBits={resultBits}
                setGlobalFinished={setGlobalFinished}
                hasInput={hasInput}
            />
        </div>
    )
}