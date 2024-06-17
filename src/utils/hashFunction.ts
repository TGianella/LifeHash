import { computeNextGeneration } from "@tgianella/js-game-of-life";
import { getStringBits, bitStreamToBase64, padBitsTo256 } from "./hashUtils.ts";

export const hashFunction = (plaintext: string, generationsLimit: number) => {
  const plaintextBits = getStringBits(plaintext);
  let universe = padBitsTo256(plaintextBits.split("")).map(
    (cell: string | number) => Number(cell),
  );
  for (let i = 0; i < generationsLimit - 1; i++) {
    universe = computeNextGeneration(universe, 16, 16);
  }
  return bitStreamToBase64(universe);
};
