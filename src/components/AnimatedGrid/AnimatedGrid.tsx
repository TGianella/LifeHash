import { GridDisplay } from "../GridDisplay/GridDisplay.tsx";
import { computeNextGeneration } from "@tgianella/js-game-of-life";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Cells } from "../../types.tsx";

type AnimatedGridProps = {
  seed: Cells;
  setResultBits: Dispatch<SetStateAction<string>>;
  setGlobalFinished: Dispatch<SetStateAction<boolean>>;
  generations: number;
  setGenerations: Dispatch<SetStateAction<number>>;
};

export const AnimatedGrid = ({
  seed,
  setResultBits,
  setGlobalFinished,
  generations,
  setGenerations,
}: AnimatedGridProps) => {
  const [universe, setUniverse] = useState<Cells>(seed);
  const [finished, setFinished] = useState(false);
  setGlobalFinished(finished);

  useEffect(() => {
    let interval: number;

    if (!finished) {
      if (generations < 50) {
        interval = setInterval(() => {
          const nextUniverse = computeNextGeneration(universe, 16, 16);
          setUniverse(nextUniverse);
          setResultBits(nextUniverse.join(""));
          setGenerations(generations + 1);
        }, 50);
      } else {
        setFinished(true);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [generations, finished, setResultBits, universe]);

  return <GridDisplay cells={universe} />;
};
