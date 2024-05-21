import {PlaintextDigest} from "./PlaintextDigest.jsx";

export const LoginPanel = ({hashes}) => {
    return (
        <div className="login-panel">
            <h3>Condensés</h3>
            <ul style={{listStyle: "none", padding: 0}}>
                {hashes.map(({plaintext, digest}) => <PlaintextDigest plaintext={plaintext} digest={digest} />)}
            </ul>
        </div>
    )
}