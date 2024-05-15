import './App.css'
import {useState} from "react";
import {GameOfLifeHashCSS} from "./GameOfLifeCSS/GameOfLifeHashCSS.jsx";
import {PasswordToBits} from "./PasswordToBits.jsx";
import {BitsToHash} from "./BitsToHash.jsx";

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

function App() {
    const [seed, setSeed] = useState([]);
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
