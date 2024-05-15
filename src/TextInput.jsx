import './TextBox.css';

export const TextInput = ({onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            <input name="plaintext" />
            <button type="submit">Envoyer</button>
        </form>
    )
}