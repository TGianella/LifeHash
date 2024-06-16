import { TextBox } from "../TextBox/TextBox.tsx";
import "./BitsGrid.css";
import { GridDisplay } from "../GridDisplay/GridDisplay.tsx";
import { Cells } from "../../types.tsx";
import { Dispatch, SetStateAction, useMemo } from "react";
import { AnimatedGrid } from "../AnimatedGrid/AnimatedGrid.tsx";

type BitsGridProps = {
  seed: Cells;
  boxLabel: string;
  areas: {
    bits: string;
    grid: string;
  };
  hasInput: boolean;
  animated?: boolean;
  resultBits?: string;
  setResultBits?: Dispatch<SetStateAction<string>>;
  generations?: number;
  setGenerations?: Dispatch<SetStateAction<number>>;
  setGlobalFinished?: Dispatch<SetStateAction<boolean>>;
};

export const BitsGrid = ({
  areas,
  seed,
  boxLabel,
  hasInput,
  animated,
  resultBits,
  ...rest
}: BitsGridProps) => {
  const bitsBoxContent = useMemo(
    () => (animated ? resultBits : seed),
    [animated, resultBits, seed],
  );
  return (
    <>
      <TextBox title={boxLabel} area={areas.bits}>
        {hasInput ? bitsBoxContent : ""}
      </TextBox>
      {animated ? (
        <AnimatedGrid area={areas.grid} seed={seed} {...rest} />
      ) : (
        <GridDisplay area={areas.grid} cells={seed} />
      )}
    </>
  );
};
