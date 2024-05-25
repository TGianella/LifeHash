import "./HashFunction.css"
import {BitsGrid} from "../BitsGrid/BitsGrid.jsx";
import {BitsGridAnimated} from "../BitsGrid/BitsGridAnimated.jsx";

export const HashFunction = ({seed, setResultBits, resultBits, setGlobalFinished, hasInput}) => {
    return (
        <div className="hash-function-wrapper">
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