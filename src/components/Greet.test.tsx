import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Greet from "./Greet";

test("render greet", () => {
  render(<Greet />);
  const greetText = screen.getByText(/hello/i);
  expect(greetText).toBeInTheDocument();
});
