import "./PlaintextDigest.css";

type PlaintextDigestProps = {
  plaintext: string;
  digest: string;
};

export const PlaintextDigest = ({
  plaintext,
  digest,
}: PlaintextDigestProps) => {
  return (
    <li className="plaintext-digest">
      <p className="plaintext">{plaintext}</p>
      <p className="digest-panel">{digest}</p>
    </li>
  );
};
