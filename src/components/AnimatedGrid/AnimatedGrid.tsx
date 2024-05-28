import {GridDisplay} from "../GridDisplay/GridDisplay.tsx";
import {computeNextGeneration} from "@tgianella/js-game-of-life";
import React, {useEffect, useState} from "react";
import {Cells} from "../../types.tsx";

type AnimatedGridProps = {
    initialUniverse: Cells;
    setResultBits: React.Dispatch<React.SetStateAction<string>>;
    setGlobalFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AnimatedGrid = ({initialUniverse, setResultBits, setGlobalFinished}: AnimatedGridProps) => {
    const [generations, setGenerations] = useState(1);
    //TODO: replace Seed with FunctionCells
    const [universe, setUniverse] = useState<Cells>(initialUniverse);
    const [finished, setFinished] = useState(false);
    setGlobalFinished(finished);


    useEffect(() => {
        let interval: number;

        if (!finished) {
            if (generations < 50) {
                interval = setInterval(() => {
                    const nextUniverse = computeNextGeneration(universe, 16, 16);
                    setUniverse(nextUniverse);
                    setResultBits(nextUniverse.join(''))
                    setGenerations(generations + 1);
                }, 50);
            } else {
                setFinished(true);
            }
        }



        return () => {
            clearInterval(interval);
        };
    }, [generations, finished, setResultBits, universe]);

    return <GridDisplay universe={universe} />
}