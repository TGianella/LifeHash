import './App.css'
import {useState} from "react";
import {HashFunction} from "./components/HashFunction/HashFunction.jsx";
import {LoginPanel} from "./components/LoginPanel/LoginPanel.jsx";
import {hashFunction} from "./utils/hashFunction.js";
import {LoginModal} from "./components/LoginModal/LoginModal.jsx";
import {TopBar} from "./components/TopBar/TopBar.jsx";
import {TitleBox} from "./components/TitleBox/TitleBox.jsx";
import {TextBox} from "./components/TextBox/TextBox.jsx";
import {getStringBits, hashUtils, padBitsTo256} from "./utils/hash.utils.js";

function App() {
    const [seed, setSeed] = useState([]);
    const [resultBits, setResultBits] = useState('');
    const [hashes, setHashes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [globalFinished, setGlobalFinished] = useState(false);
    const [hasInput, setHasInput] = useState(false);
    const [hashesCount, setHashesCount] = useState(0);

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

    const handleCloseButtonClick = () => {
        setIsModalOpen(false);
    }

    const shouldDisplayResults = hasInput && globalFinished && resultBits && resultBits.length;

  return (
      <div className="app-container">
          <LoginModal style={{display: isModalOpen ? "flex" : "none"}} onCloseButtonClick={handleCloseButtonClick}/>
          <div className="app-grid">
              <TopBar onSubmit={handleSubmit} onButtonClick={handleButtonClick} />
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
                  <TextBox className="digest" title="Condensé">{shouldDisplayResults ? hashUtils(resultBits.split('')) : '' }</TextBox>
              </TitleBox>
          {<LoginPanel hashes={hashes} />}
          </div>
      </div>

  )
}

export default App
