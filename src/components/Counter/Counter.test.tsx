import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import user from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("renders correcltly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementElement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementElement).toBeInTheDocument();
  });

  test("render a count of 0", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("render a count of 1 after user clicking the increment button", async () => {
    user.setup();
    render(<Counter />);

    const incrementElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("render a count of 2 after user clicking the increment button twice", async () => {
    user.setup();
    render(<Counter />);

    const incrementElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementElement);
    await user.click(incrementElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("render a count of 10 after user clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const inputAmount = screen.getByRole("spinbutton");
    await user.type(inputAmount, "10");
    expect(inputAmount).toHaveValue(10);

    const setButtonElement = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButtonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("element are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const incrementElement = screen.getByRole("button", {
      name: "Increment",
    });
    const inputAmount = screen.getByRole("spinbutton");
    const setButtonElement = screen.getByRole("button", {
      name: "Set",
    });
    await user.tab();
    expect(incrementElement).toHaveFocus();
    await user.tab();
    expect(inputAmount).toHaveFocus();
    await user.tab();
    expect(setButtonElement).toHaveFocus();
  });
});
