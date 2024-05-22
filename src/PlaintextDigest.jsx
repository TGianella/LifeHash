import './PlaintextDigest.css';

export const PlaintextDigest = ({plaintext, digest}) => {
    return (
        <li className="plaintext-digest">
            <p className="plaintext">{plaintext}</p>
            <p className="digest-panel">{digest}</p>
        </li>
    )
}