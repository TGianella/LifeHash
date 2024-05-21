import './LoginModal.css'
import {Form} from "./Form.jsx";
import {useState} from "react";
import {hashFunction} from "./hashFunction.js";

const initialState = {success: false}

export const LoginModal = ({style}) => {
    const [identifiersList, setIdentifiersList] = useState([]);
    const [triedLogin, setTriedLogin] = useState(false);
    const [login, setLogin] = useState(initialState);

    const onRegisterSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const username = formData.get('username');
        const plaintext = formData.get('password');
        const digest = hashFunction(plaintext);
        const identifiers = {username, digest};

        setIdentifiersList(identifiersList.concat([identifiers]))
    };
    const onLoginSubmit = (e) => {
        console.log("coucou")
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const username = formData.get('username');
        const plaintext = formData.get('password');
        const digest = hashFunction(plaintext);
        const digestToCheck = identifiersList.find((identifiers) => identifiers.username === username).digest;
        const loginSuccess = digest === digestToCheck;
        const nextLogin = {success: loginSuccess, digest};

        setTriedLogin(true);
        setLogin(nextLogin);
    };

    return (
        <div className="login-modal" style={style}>
            <Form onSubmit={onRegisterSubmit} actionLabel="S'inscrire" />
            <div className="form-separator" />
            <Form onSubmit={onLoginSubmit} actionLabel="Se connecter" login={login}>
                {triedLogin ?
                    login && login.success ? <p>Bravo {login.digest}</p> : <p>Identifiants invalides</p>
                : null }
            </Form>
        </div>
    )

}