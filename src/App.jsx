import './App.css'
import {useState} from "react";
import {GameOfLifeHashCSS} from "./GameOfLifeCSS/GameOfLifeHashCSS.jsx";
import {LoginPanel} from "./LoginPanel.jsx";
import {hashFunction} from "./hashFunction.js";
import {LoginModal} from "./LoginModal.jsx";
import {TopBar} from "./TopBar.jsx";
import {TitleBox} from "./TitleBox.jsx";
import {TextBox} from "./TextBox.jsx";
import {bitStreamToBase64} from "./bitStreamToBase64.js";

export const getStringBits = (string) => {
    let res = '';
    for (let i = 0; i < string.length; i++) {
        res += string.charCodeAt(i).toString(2);
    }

    return res;
}

export const padBitsTo256 = (bits) => {
    if (bits.length < 256) {
        const bitsToPad = 256 - bits.length;
        const padding = Array.from('0'.repeat(bitsToPad)).map((n) => Number(n));
        return bits.concat(padding);
    } else if (bits.length > 256) {
        return bits.slice(0, 256);
    } else {
        return bits;
    }
}

function App() {
    const [seed, setSeed] = useState([]);
    const [resultBits, setResultBits] = useState('');
    const [hashes, setHashes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [globalFinished, setGlobalFinished] = useState(false);
    const [hasInput, setHasInput] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const plaintext = formData.get('plaintext');
        const plaintextBits = getStringBits(plaintext);
        const seed = padBitsTo256(plaintextBits.split('')).map((cell) => Number(cell));

        setHasInput(true);
        setSeed(seed);
        setResultBits('');

        const digest = hashFunction(plaintext);
        const plaintextDigest = {plaintext, digest};
        setTimeout(() => {
            if (hashes.length < 5) {
                setHashes(hashes.concat(plaintextDigest));
            } else {
                setHashes(hashes.slice(1).concat(plaintextDigest));
            }

        }, 3000)
    }

    const handleButtonClick = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleCloseButtonClick = () => {
        setIsModalOpen(false);
    }

    const shouldDisplayResults = hasInput && globalFinished && resultBits && resultBits.length;

  return (
      <div className="app-container">
          <LoginModal style={{display: isModalOpen ? "flex" : "none"}} onCloseButtonClick={handleCloseButtonClick}/>
          <TopBar onSubmit={handleSubmit} onButtonClick={handleButtonClick} />
          <div className="app">
              <div className="hash-function">
                  <TitleBox title="Fonction de hachage">
                      <GameOfLifeHashCSS
                          seed={seed}
                          setResultBits={setResultBits}
                          resultBits={resultBits}
                          setGlobalFinished={setGlobalFinished}
                          hasInput={hasInput}
                      />
                  </TitleBox>
                  <TitleBox title="Encodage">
                      <TextBox className="digest" title="Condensé">{shouldDisplayResults ? bitStreamToBase64(resultBits.split('')) : '' }</TextBox>
                  </TitleBox>
              </div>
              {<LoginPanel hashes={hashes} />}
          </div>
      </div>

  )
}

export default App
