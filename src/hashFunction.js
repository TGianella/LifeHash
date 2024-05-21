import {Universe} from "@tgianella/js-game-of-life";
import {getStringBits, padBitsTo256} from "./App.jsx";
import {bitStreamToBase64} from "./bitStreamToBase64.js";

export const hashFunction = (plaintext) => {
    const plaintextBits = getStringBits(plaintext);
    const seed = padBitsTo256(plaintextBits.split('')).map((cell) => Number(cell));
    const universe = new Universe(false, 16, 16, seed);
    for (let i = 0; i < 50; i++) {
        universe.tick();
    }
    const resultBits = universe.cells.map(cell => cell.state);
    return bitStreamToBase64(resultBits);
}