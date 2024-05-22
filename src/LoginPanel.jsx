import {PlaintextDigest} from "./PlaintextDigest.jsx";

export const LoginPanel = ({hashes}) => {
    return (
        <div className="login-panel">
            <div className="login-panel-header">
                <h3>Liste des condensés</h3>
            </div>
            <ul style={{listStyle: "none", padding: 0}}>
                {hashes.map(({plaintext, digest}) => <PlaintextDigest plaintext={plaintext} digest={digest} />)}
            </ul>
        </div>
    )
}