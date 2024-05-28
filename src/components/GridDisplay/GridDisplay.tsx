import './GridDisplay.css'
import {Universe} from "@tgianella/js-game-of-life";

type GridDisplayProps = {
    universe: Universe
}

export const GridDisplay = ({universe}: GridDisplayProps) => {
    return (
        <div className="grid-container">
            {universe.cells.map((cell, i) => <div key={i} className={`cell ${cell.state === 1 ? 'alive' : 'dead'}`}></div>)}
        </div>
    )
}

