import {GameOfLifeDisplayCSS} from "./GameOfLifeDisplayCSS.jsx";
import {Universe} from "@tgianella/js-game-of-life";
import {useEffect, useState} from "react";



export const GameOfLifeCSS = ({initialUniverse}) => {
    const [generations, setGenerations] = useState(1);
    const [universe, setUniverse] = useState(initialUniverse);


    useEffect(() => {
        let interval;

        if (generations < 50) {
            interval = setInterval(() => {
                const nextUniverse = new Universe(false, universe.width, universe.height, universe.cells);
                nextUniverse.tick();
                nextUniverse.cellSize = universe.cellSize;
                setUniverse(nextUniverse);
                setGenerations(generations + 1);
            }, 50);
        }


        return () => {
            clearInterval(interval);
        };
    });

    return <GameOfLifeDisplayCSS universe={universe} />
}