import {PlaintextDigest} from "./PlaintextDigest.jsx";

export const LoginPanel = ({hashes, style}) => {
    return (
        <div className="login-panel" style={style}>
            <h3>Condensés</h3>
            <ul style={{listStyle: "none", padding: 0}}>
                {hashes.map(({plaintext, digest}) => <PlaintextDigest plaintext={plaintext} digest={digest} />)}
            </ul>
        </div>
    )
}