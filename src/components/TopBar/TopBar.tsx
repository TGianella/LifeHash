import {TextInput} from "../TextInput/TextInput.tsx";
import './TopBar.css'
import {FormEvent} from "react";

type TopBarProps = {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onButtonClick: () => void;
}
export const TopBar = ({onSubmit, onButtonClick}: TopBarProps) => {
    return (
        <div className="top-bar">
            <div></div>
            <TextInput onSubmit={onSubmit}/>
            <button onClick={onButtonClick}>Connexion</button>
        </div>
    )
}