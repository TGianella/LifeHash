import './App.css'
import {useState} from "react";
import {GameOfLifeHashCSS} from "./GameOfLifeCSS/GameOfLifeHashCSS.jsx";
import {TextInput} from "./TextInput.jsx";
import {TextBox} from "./TextBox.jsx";
import {bitStreamToBase64} from "./bitStreamToBase64.js";
import {PasswordToBits} from "./PasswordToBits.jsx";
import {BitsToHash} from "./BitsToHash.jsx";

const bitsStream = [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
const getStringBits = (string) => {
    let res = '';
    for (let i = 0; i < string.length; i++) {
        res += string.charCodeAt(i).toString(2);
    }

    return res;
}

const padBitsTo256 = (bits) => {
    if (bits.length < 256) {
        const bitsToPad = 256 - bits.length;
        const padding = Array.from('0'.repeat(bitsToPad)).map((n) => Number(n));
        return bits.concat(padding);
    } else {
        return bits;
    }

}

const generateSeed = () => [...Array(256)].map(() => Math.random() > 0.5 ? 1 : 0);




function App() {
    const [seed, setSeed] = useState(generateSeed());
    const [resultBits, setResultBits] = useState('');

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
    }

  return (
      <div className="app">
          <PasswordToBits handleSubmit={handleSubmit} seed={seed} />
          <BitsToHash resultBits={resultBits} />
          <GameOfLifeHashCSS seed={seed} setResultBits={setResultBits} />
      </div>
  )
}

export default App
