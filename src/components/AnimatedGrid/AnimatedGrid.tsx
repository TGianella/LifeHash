import {GridDisplay} from "../GridDisplay/GridDisplay.tsx";
import {Universe} from "@tgianella/js-game-of-life";
import React, {useEffect, useState} from "react";

type AnimatedGridProps = {
    initialUniverse: Universe;
    setResultBits: React.Dispatch<React.SetStateAction<string>>;
    setGlobalFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AnimatedGrid = ({initialUniverse, setResultBits, setGlobalFinished}: AnimatedGridProps) => {
    const [generations, setGenerations] = useState(1);
    const [universe, setUniverse] = useState<Universe>(initialUniverse);
    const [finished, setFinished] = useState(false);
    setGlobalFinished(finished);


    useEffect(() => {
        let interval: number;

        if (!finished) {
            if (generations < 50) {
                interval = setInterval(() => {
                    const nextUniverse = new Universe(false, universe.width, universe.height, universe.cells);
                    nextUniverse.tick();
                    nextUniverse.cellSize = universe.cellSize;
                    setUniverse(nextUniverse);
                    setResultBits(universe.cells.map(cell => cell.state).join(''))
                    setGenerations(generations + 1);
                }, 50);
            } else {
                setFinished(true);
            }
        }



        return () => {
            clearInterval(interval);
        };
    }, [generations, finished, universe.width, universe.height, universe.cellSize, setResultBits]);

    return <GridDisplay universe={universe} />
}