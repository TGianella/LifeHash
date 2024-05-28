import "./HashFunction.css"
import {BitsGrid} from "../BitsGrid/BitsGrid.tsx";
import {BitsGridAnimated} from "../BitsGrid/BitsGridAnimated.tsx";
import {Cells} from "../../types.tsx";
import {Dispatch, SetStateAction} from "react";

type HashFunctionProps = {
    seed: Cells;
    setResultBits: Dispatch<SetStateAction<string>>;
    resultBits: string;
    setGlobalFinished: Dispatch<SetStateAction<boolean>>;
    hasInput: boolean;
}

export const HashFunction = ({seed, setResultBits, resultBits, setGlobalFinished, hasInput}: HashFunctionProps) => {
    return (
        <div className="hash-function-wrapper">
            <BitsGrid cells={seed} boxLabel="Bits en clair"/>
            <div className="separator">
                <div className="arrow-separator"></div>
            </div>
            <BitsGridAnimated
                seed={seed}
                setResultBits={setResultBits}
                boxLabel="Bits hachés"
                resultBits={resultBits}
                setGlobalFinished={setGlobalFinished}
                hasInput={hasInput}
            />
        </div>
    )
}