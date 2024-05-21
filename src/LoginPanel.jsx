import {PlaintextDigest} from "./PlaintextDigest.jsx";

export const LoginPanel = ({hashes, onButtonClick}) => {
    return (
        <div className="login-panel">
            <div className="login-panel-header">
                <h3>Condensés</h3>
                <button onClick={onButtonClick} style={{padding: "10px"}}>Connexion</button>
            </div>
            <ul style={{listStyle: "none", padding: 0}}>
                {hashes.map(({plaintext, digest}) => <PlaintextDigest plaintext={plaintext} digest={digest} />)}
            </ul>
        </div>
    )
}