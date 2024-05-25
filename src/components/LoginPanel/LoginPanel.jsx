import {PlaintextDigest} from "../PlaintextDigest/PlaintextDigest.jsx";
import './LoginPanel.css';

export const LoginPanel = ({hashes}) => {
    return (
        <div className="login-panel">
            <div className="login-panel-title">
                <span>Liste des condensés</span>
            </div>
            <div className="login-panel-headers">
                <span style={{wordWrap: "break-word", maxWidth: "50%", textAlign: "center"}}>Mot de passe en clair</span>
                <span>Condensé</span>
            </div>
            <ul style={{listStyle: "none", padding: 0}}>
                {hashes.map(({plaintext, digest}) => <PlaintextDigest plaintext={plaintext} digest={digest} />)}
            </ul>
        </div>
    )
}