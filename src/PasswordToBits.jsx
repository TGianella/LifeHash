import {TextInput} from "./TextInput.jsx";
import {TextBox} from "./TextBox.jsx";
import './PasswordToBits.css';
import {Arrow} from "./Arrow.jsx";



export const PasswordToBits = ({handleSubmit, plaintext}) => {





    return (
        <div className="password-bits a">
            <TextInput onSubmit={handleSubmit}/>
            <Arrow direction="down" />
            <TextBox>{plaintext}</TextBox>
            <Arrow direction="down" />
        </div>
    )
}