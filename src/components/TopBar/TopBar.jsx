import {TextInput} from "../TextInput/TextInput.jsx";
import './TopBar.css'
export const TopBar = ({onSubmit, onButtonClick}) => {
    return (
        <div className="top-bar">
            <div></div>
            <TextInput onSubmit={onSubmit}/>
            <button onClick={onButtonClick}>Connexion</button>
        </div>
    )
}