import './GridDisplay.css'
import {Cells} from "../../types.tsx";

type GridDisplayProps = {
    universe: Cells;
}

const emptyGrid = Array.from('0'.repeat(256)).map(Number) as Cells;

export const GridDisplay = ({universe}: GridDisplayProps) => {
    const displayUniverse = universe.length ? universe : emptyGrid;

    return (
        <div className="grid-container">
            {displayUniverse.map((cell, i) => <div key={i} className={`cell ${cell === 1 ? 'alive' : 'dead'}`}></div>)}
        </div>
    )
}

