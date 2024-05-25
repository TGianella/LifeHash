import "../GameOfLifeHash.css"
import "./GameOfLifeHashCSS.css"
import {BitsGrid} from "../components/BitsGrid/BitsGrid.jsx";
import {BitsGridAnimated} from "../components/BitsGrid/BitsGridAnimated.jsx";

export const GameOfLifeHashCSS = ({seed, setResultBits, resultBits, setGlobalFinished, hasInput}) => {
    return (
        <div className="game-of-life-wrapper">
            <BitsGrid bits={seed} boxLabel="Bits en clair"/>
            <div className="separator">
                <div className="arrow-separator"></div>
            </div>
            <BitsGridAnimated
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