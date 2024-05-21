import './App.css'
import {useState} from "react";
import {GameOfLifeHashCSS} from "./GameOfLifeCSS/GameOfLifeHashCSS.jsx";
import {PasswordToBits} from "./PasswordToBits.jsx";
import {BitsToHash} from "./BitsToHash.jsx";
import {LoginPanel} from "./LoginPanel.jsx";
import {hashFunction} from "./hashFunction.js";
import {LoginModal} from "./LoginModal.jsx";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const plaintext = formData.get('plaintext');
        const plaintextBits = getStringBits(plaintext);
        const seed = padBitsTo256(plaintextBits.split('')).map((cell) => Number(cell));
        console.log({seed})

        setSeed(seed);
        setResultBits('')

        const digest = hashFunction(plaintext);
        const plaintextDigest = {plaintext, digest};
        setTimeout(() => {
            setHashes(hashes.concat(plaintextDigest));
        }, 3000)
    }

    const handleButtonClick = () => {
        setIsModalOpen(!isModalOpen);
    }

  return (
      <>
          <LoginModal style={{display: isModalOpen ? "flex" : "none"}}/>
          <div className="app-container">
              {<LoginPanel hashes={hashes} onButtonClick={handleButtonClick} />}
              <div className="app">
                  <div className="box-wrapper">
                      <PasswordToBits handleSubmit={handleSubmit} seed={seed}/>
                      <p className="label green">Encodage et décodage</p>
                      <BitsToHash resultBits={resultBits}/>
                  </div>
                  <GameOfLifeHashCSS seed={seed} setResultBits={setResultBits}/>
              </div>
          </div>
      </>

  )
}

export default App
