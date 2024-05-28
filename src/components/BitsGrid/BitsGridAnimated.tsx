import {TextBox} from "../TextBox/TextBox.tsx";
import {Universe} from "@tgianella/js-game-of-life";
import {AnimatedGrid} from "../AnimatedGrid/AnimatedGrid.tsx";
import React from "react";
import {Seed} from "../../types.tsx";

type BitsGridAnimatedProps = {
    initialBits: Seed;
    setResultBits: React.Dispatch<React.SetStateAction<string>>;
    resultBits: string;
    boxLabel: string;
    setGlobalFinished: React.Dispatch<React.SetStateAction<boolean>>;
    hasInput: boolean;
}

export const BitsGridAnimated = ({initialBits, setResultBits, resultBits, boxLabel, setGlobalFinished, hasInput}: BitsGridAnimatedProps) => {
    const universe = new Universe(!initialBits.length, 16, 16, initialBits.length ? initialBits : null);

    return (
        <div className="bits-grid">
            <TextBox title={boxLabel}>{hasInput ? resultBits : ''}</TextBox>
            <AnimatedGrid
                key={typeof initialBits !== "string" ? initialBits?.join('') : initialBits}
                initialUniverse={universe}
                setResultBits={setResultBits}
                setGlobalFinished={setGlobalFinished}
            />
        </div>
    )

}