import {PlaintextDigest} from "../PlaintextDigest/PlaintextDigest.jsx";
import './DigestList.css';

export const DigestList = ({hashes}) => {
    return (
        <div className="digest-list">
            <div className="digest-list-title">
                <span>Condensés</span>
            </div>
            <div className="digest-list-headers">
                <span style={{wordWrap: "break-word", maxWidth: "50%"}}>Mot de passe</span>
                <span>Condensé</span>
            </div>
            <ul style={{listStyle: "none", padding: 0}}>
                {hashes.map(({plaintext, digest, index}) => <PlaintextDigest key={index} plaintext={plaintext} digest={digest} />)}
            </ul>
        </div>
    )
}