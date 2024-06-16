import "./HashFunction.css";
import { BitsGrid } from "../BitsGrid/BitsGrid.tsx";
import { Cells } from "../../types.tsx";
import { Dispatch, SetStateAction, useState } from "react";

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
  ...rest
}: HashFunctionProps) => {
  const [generations, setGenerations] = useState(1);

  return (
    <div className="hash-function-wrapper">
      <BitsGrid
        areas={{
          bits: "a",
          grid: "d",
        }}
        seed={seed}
        boxLabel="Bits en clair"
        hasInput={hasInput}
        {...rest}
      />
      <div className="generations-counter">{hasInput ? generations : ""}</div>
      <div className="separator">
        <div className="arrow-separator"></div>
      </div>
      <BitsGrid
        areas={{
          bits: "c",
          grid: "f",
        }}
        seed={seed}
        boxLabel="Bits hachés"
        generations={generations}
        setGenerations={setGenerations}
        hasInput={hasInput}
        animated
        {...rest}
      />
    </div>
  );
};
