import "./HashFunction.css"
import {BitsGrid} from "../BitsGrid/BitsGrid.tsx";
import {BitsGridAnimated} from "../BitsGrid/BitsGridAnimated.tsx";
import {Cells} from "../../types.tsx";
import React from "react";

type HashFunctionProps = {
    seed: Cells;
    setResultBits: React.Dispatch<React.SetStateAction<string>>;
    resultBits: string;
    setGlobalFinished: React.Dispatch<React.SetStateAction<boolean>>;
    hasInput: boolean;
}

export const HashFunction = ({seed, setResultBits, resultBits, setGlobalFinished, hasInput}: HashFunctionProps) => {
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