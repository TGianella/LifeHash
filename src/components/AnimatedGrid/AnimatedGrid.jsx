import {GridDisplay} from "../GridDisplay/GridDisplay.jsx";
import {Universe} from "@tgianella/js-game-of-life";
import {useEffect, useState} from "react";

export const AnimatedGrid = ({initialUniverse, setResultBits, setGlobalFinished}) => {
    const [generations, setGenerations] = useState(1);
    const [universe, setUniverse] = useState(initialUniverse);
    const [finished, setFinished] = useState(false);
    setGlobalFinished(finished);


    useEffect(() => {
        let interval;

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
    });

    return <GridDisplay universe={universe} />
}