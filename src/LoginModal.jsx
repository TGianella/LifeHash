import './LoginModal.css'
import {Form} from "./Form.jsx";
import {useState} from "react";
import {hashFunction} from "./hashFunction.js";

const initialState = {success: false}

export const LoginModal = ({style, onCloseButtonClick}) => {
    const [identifiersList, setIdentifiersList] = useState([]);
    const [triedLogin, setTriedLogin] = useState(false);
    const [login, setLogin] = useState(initialState);
    const [registered, setRegistered] = useState(false);

    const onRegisterSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const username = formData.get('username');
        const plaintext = formData.get('password');
        const digest = hashFunction(plaintext);
        const identifiers = {username, digest};

        e.target.reset();
        setIdentifiersList(identifiersList.concat([identifiers]));
        setRegistered(true);
        setTriedLogin(false);
    };
    const onLoginSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const username = formData.get('username');
        const plaintext = formData.get('password');
        const digest = hashFunction(plaintext);
        const digestToCheck = identifiersList.find((identifiers) => identifiers.username === username)?.digest;
        const loginSuccess = digest === digestToCheck;
        const nextLogin = {success: loginSuccess, digest, username};

        setRegistered(false);
        setTriedLogin(true);
        setLogin(nextLogin);
    };

    return (
        <div className="login-modal" style={style}>
            <button className="close-modal-button" onClick={onCloseButtonClick}>x</button>
            <div className="login-forms">
                <Form onSubmit={onRegisterSubmit} actionLabel="S'inscrire"/>
                <div className="form-separator"></div>
                <Form onSubmit={onLoginSubmit} actionLabel="Se connecter" login={login}/>
            </div>
            <div className="login-message-container">
                {triedLogin ?
                    login && login.success ? <span className="login-message">Bienvenue {login.username} ! 👍</span> :
                        <span className="login-message">Identifiants invalides 🧐</span>
                    : registered ? <span className="login-message">Nouveau compte créé 🎉</span> : null}
            </div>
        </div>
    )
}