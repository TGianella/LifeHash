import {Universe} from "@tgianella/js-game-of-life";
import {getStringBits, hashUtils, padBitsTo256} from "./hash.utils.js";

export const hashFunction = (plaintext) => {
    const plaintextBits = getStringBits(plaintext);
    const seed = padBitsTo256(plaintextBits.split('')).map((cell) => Number(cell));
    const universe = new Universe(false, 16, 16, seed);
    for (let i = 0; i < 48; i++) {
        universe.tick();
    }
    const resultBits = universe.cells.map(cell => cell.state);
    return hashUtils(resultBits);
}