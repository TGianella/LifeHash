import { TextBox } from "../TextBox/TextBox.tsx";
import { AnimatedGrid } from "../AnimatedGrid/AnimatedGrid.tsx";
import { Dispatch, SetStateAction } from "react";
import { Cells } from "../../types.tsx";

type BitsGridAnimatedProps = {
  seed: Cells;
  setResultBits: Dispatch<SetStateAction<string>>;
  resultBits: string;
  boxLabel: string;
  setGlobalFinished: Dispatch<SetStateAction<boolean>>;
  hasInput: boolean;
};

//TODO: refactor to use only one generic component BitsGrid with a prop to animate it

export const BitsGridAnimated = ({
  seed,
  setResultBits,
  resultBits,
  boxLabel,
  setGlobalFinished,
  hasInput,
}: BitsGridAnimatedProps) => {
  return (
    <div className="bits-grid">
      <TextBox title={boxLabel}>{hasInput ? resultBits : ""}</TextBox>
      <AnimatedGrid
        key={seed.join("")}
        seed={seed}
        setResultBits={setResultBits}
        setGlobalFinished={setGlobalFinished}
      />
    </div>
  );
};
