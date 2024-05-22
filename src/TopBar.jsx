import {TextInput} from "./TextInput.jsx";
import './TopBar.css'
export const TopBar = ({onSubmit, onButtonClick}) => {
    return (
        <div className="top-bar">
            <TextInput onSubmit={onSubmit}/>
            <button onClick={onButtonClick} style={{padding: "10px"}}>Connexion</button>
        </div>
    )
}