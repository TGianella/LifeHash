import './TextInput.css';

export const TextInput = ({onSubmit}) => {
    return (
        <form className="password-form" onSubmit={onSubmit}>
            <input className="password-input" name="plaintext" autoComplete="off" />
            <button type="submit">Envoyer</button>
        </form>
    )
}