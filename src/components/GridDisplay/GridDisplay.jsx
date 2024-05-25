import './GridDisplay.css'

export const GridDisplay = ({universe}) => {
    return (
        <div className="grid-container">
            {universe.cells.map((cell, i) => <div key={i} className={`cell ${cell.state === 1 ? 'alive' : 'dead'}`}></div>)}
        </div>
    )
}

