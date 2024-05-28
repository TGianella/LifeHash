import './App.css'
import {FormEvent, useState} from "react";
import {HashFunction} from "./components/HashFunction/HashFunction.tsx";
import {DigestList} from "./components/DigestList/DigestList.tsx";
import {hashFunction} from "./utils/hashFunction.ts";
import {LoginModal} from "./components/LoginModal/LoginModal.tsx";
import {TopBar} from "./components/TopBar/TopBar.tsx";
import {TitleBox} from "./components/TitleBox/TitleBox.tsx";
import {TextBox} from "./components/TextBox/TextBox.tsx";
import {getStringBits, bitStreamToBase64, padBitsTo256} from "./utils/hashUtils.ts";

type Hash = {
    plaintext: string;
    digest: string;
    index: number;
}

function App() {
    const [seed, setSeed] = useState<number[]>([]);
    const [resultBits, setResultBits] = useState('');
    const [hashes, setHashes] = useState<Hash[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [globalFinished, setGlobalFinished] = useState(false);
    const [hasInput, setHasInput] = useState(false);
    const [hashesCount, setHashesCount] = useState<number>(0);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const plaintext = formData.get('plaintext') as string;
        const plaintextBits = getStringBits(plaintext);
        const seed = padBitsTo256(plaintextBits.split('')).map((cell) => Number(cell));

        setHasInput(true);
        setSeed(seed);
        setResultBits('');

        const digest = hashFunction(plaintext);
        const plaintextDigest = {plaintext, digest, index: hashesCount};

        setHashesCount(hashesCount + 1);

        setTimeout(() => {
            if (hashes.length < 4) {
                setHashes(hashes.concat(plaintextDigest));
            } else {
                setHashes(hashes.slice(1).concat(plaintextDigest));
            }

        }, 3000)
    }

    const handleButtonClick = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleCloseModalClick = () => {
        setIsModalOpen(false);
    }

    const shouldDisplayResults = hasInput && globalFinished && resultBits && resultBits.length;

  return (
      <>
          <LoginModal style={{display: isModalOpen ? "flex" : "none"}} onCloseButtonClick={handleCloseModalClick}/>
          <div className="app-container">
              <div className="app-grid">
                  <TopBar onSubmit={handleSubmit} onButtonClick={handleButtonClick}/>
                  <TitleBox title="Fonction de hachage" className="hash-function-grid">
                      <HashFunction
                          seed={seed}
                          setResultBits={setResultBits}
                          resultBits={resultBits}
                          setGlobalFinished={setGlobalFinished}
                          hasInput={hasInput}
                      />
                  </TitleBox>
                  <TitleBox title="Encodage" className="encoding">
                      <TextBox className="digest"
                               title="Condensé">{shouldDisplayResults ? bitStreamToBase64(resultBits.split('')) : ''}</TextBox>
                  </TitleBox>
                  {<DigestList hashes={hashes}/>}
              </div>
          </div>
      </>


  )
}

export default App
