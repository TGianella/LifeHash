import {GameOfLifeDisplayCSS} from "./GameOfLifeDisplayCSS.jsx";
import {Universe} from "@tgianella/js-game-of-life";
import {useEffect, useState} from "react";



export const GameOfLifeCSS = ({initialUniverse, setResultBits}) => {
    const [generations, setGenerations] = useState(1);
    const [universe, setUniverse] = useState(initialUniverse);
    const [finished, setFinished] = useState(false);


    useEffect(() => {
        let interval;

        if (!finished) {
            if (generations < 50) {
                interval = setInterval(() => {
                    const nextUniverse = new Universe(false, universe.width, universe.height, universe.cells);
                    nextUniverse.tick();
                    nextUniverse.cellSize = universe.cellSize;
                    setUniverse(nextUniverse);
                    setGenerations(generations + 1);
                }, 50);
            } else {
                setFinished(true);
                setResultBits(universe.cells.map(cell => cell.state).join(''));
            }
        }



        return () => {
            clearInterval(interval);
        };
    });

    return <GameOfLifeDisplayCSS universe={universe} />
}