import "./HashFunction.css";
import { Cells } from "../../types.tsx";
import { Dispatch, SetStateAction, useState } from "react";
import { GridDisplay } from "../GridDisplay/GridDisplay.tsx";
import { AnimatedGrid } from "../AnimatedGrid/AnimatedGrid.tsx";
import { BitsBox } from "../BitsBox/BitsBox.tsx";

type HashFunctionProps = {
  seed: Cells;
  setResultBits: Dispatch<SetStateAction<string>>;
  resultBits: string;
  setGlobalFinished: Dispatch<SetStateAction<boolean>>;
  hasInput: boolean;
};

export const HashFunction = ({
  seed,
  hasInput,
  resultBits,
  ...rest
}: HashFunctionProps) => {
  const [generations, setGenerations] = useState(1);

  return (
    <div className="hash-function-wrapper">
      <BitsBox
        title="Bits en clair"
        area="a"
        hasInput={hasInput}
        content={seed}
      />
      <GridDisplay area="d" cells={seed} />
      {hasInput ? (
        <div
          className="generations-counter"
          style={{
            background: `conic-gradient(var(--quaternary-color) 0%, var(--quaternary-color) ${generations * 2}%, var(--secondary-color) ${generations * 2}%, var(--secondary-color) 100%)`,
          }}
        >
          {generations}
        </div>
      ) : null}
      <div className="separator">
        <div className="arrow-separator"></div>
      </div>
      <BitsBox
        title="Bits hachés"
        area="c"
        hasInput={hasInput}
        content={resultBits}
      />
      <AnimatedGrid
        area="f"
        seed={seed}
        generations={generations}
        setGenerations={setGenerations}
        {...rest}
      />
    </div>
  );
};
