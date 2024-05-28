import {TextBox} from "../TextBox/TextBox.tsx";
import {AnimatedGrid} from "../AnimatedGrid/AnimatedGrid.tsx";
import React from "react";
import {Cells} from "../../types.tsx";

type BitsGridAnimatedProps = {
    initialBits: Cells;
    setResultBits: React.Dispatch<React.SetStateAction<string>>;
    resultBits: string;
    boxLabel: string;
    setGlobalFinished: React.Dispatch<React.SetStateAction<boolean>>;
    hasInput: boolean;
}

export const BitsGridAnimated = ({initialBits, setResultBits, resultBits, boxLabel, setGlobalFinished, hasInput}: BitsGridAnimatedProps) => {
    return (
        <div className="bits-grid">
            <TextBox title={boxLabel}>{hasInput ? resultBits : ''}</TextBox>
            <AnimatedGrid
                key={initialBits.join('')}
                initialUniverse={initialBits}
                setResultBits={setResultBits}
                setGlobalFinished={setGlobalFinished}
            />
        </div>
    )

}