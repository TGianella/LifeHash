import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { GridDisplay } from "./GridDisplay.tsx";
import { Cells } from "../../types.tsx";

test("displays correctly", () => {
  const cells = Array.from("0".repeat(256)).map(Number) as Cells;
  render(<GridDisplay cells={cells} />);

  expect(screen.getByTestId("display-grid")).toBeVisible();
});

test("displays the right number of cells", () => {
  const cells = Array.from("0".repeat(256)).map(Number) as Cells;
  render(<GridDisplay cells={cells} />);

  const cellsElements = screen.getAllByTestId("cell");

  expect(cellsElements).toHaveLength(256);
  for (const cell of cellsElements) {
    expect(cell).toBeVisible();
  }
});

test("displays cells in the right state", () => {
  const cells = Array.from("0".repeat(128))
    .map(Number)
    .concat(Array.from("1".repeat(128)).map(Number)) as Cells;
  render(<GridDisplay cells={cells} />);

  const cellsElements = screen.getAllByTestId("cell");

  expect(cellsElements[0]).toHaveClass("dead");
  expect(cellsElements[cellsElements.length - 1]).toHaveClass("alive");
});
