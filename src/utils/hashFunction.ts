import {Universe} from "@tgianella/js-game-of-life";
import {getStringBits, bitStreamToBase64, padBitsTo256} from "./hashUtils.ts";

export const hashFunction = (plaintext: string) => {
    const plaintextBits = getStringBits(plaintext);
    const seed = padBitsTo256(plaintextBits.split('')).map((cell: string | number) => Number(cell));
    const universe = new Universe(false, 16, 16, seed);
    for (let i = 0; i < 48; i++) {
        universe.tick();
    }
    const resultBits = universe.cells.map(cell => cell.state);
    return bitStreamToBase64(resultBits);
}