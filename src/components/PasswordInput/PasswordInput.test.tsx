import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { PasswordInput } from "./PasswordInput.tsx";
import { userEvent } from "@testing-library/user-event";

test("displays correctly", () => {
  render(<PasswordInput onSubmit={vi.fn()} />);

  expect(screen.getByTestId("password-input")).toBeVisible();
  expect(screen.getByPlaceholderText("Mot de passe")).toBeVisible();
});

test("calls the onSubmit function correctly", async () => {
  const onSubmit = vi.fn((e) => e.preventDefault());
  render(<PasswordInput onSubmit={onSubmit} />);

  const user = userEvent.setup();
  await user.click(screen.getByRole("button"));

  expect(onSubmit).toHaveBeenCalledOnce;
});
