import './TextInput.css';
import {FormEvent} from "react";

type TextInputProps = {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const TextInput = ({onSubmit}: TextInputProps) => {
    return (
        <form className="password-form" onSubmit={onSubmit}>
            <input className="password-input" name="plaintext" placeholder="Mot de passe" autoComplete="off" />
            <button type="submit">Envoyer</button>
        </form>
    )
}