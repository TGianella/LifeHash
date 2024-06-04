import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { TextBox } from "./TextBox.tsx";

test("displays correctly", () => {
  render(<TextBox title="Super titre">Super contenu</TextBox>);

  expect(screen.getByText("Super titre")).toBeVisible();
  expect(screen.getByText("Super contenu")).toBeVisible();
});
