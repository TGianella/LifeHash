import './App.css'
import {useState} from "react";
import {GameOfLifeHashCSS} from "./GameOfLifeCSS/GameOfLifeHashCSS.jsx";

const bitsStream = [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
const getStringBits = (string) => {
    let res = '';
    for (let i = 0; i < string.length; i++) {
        res += string.charCodeAt(i).toString(2);
    }

    return res;
}

const generateSeed = () => [...Array(256)].map(() => Math.random() > 0.5 ? 1 : 0);


function App() {
    const [seed, setSeed] = useState(generateSeed());

  return (
      <>
          <button onClick={() => setSeed(generateSeed())}>Change seed</button>
          <GameOfLifeHashCSS seed={generateSeed()}/>
      </>
  )
}

export default App
