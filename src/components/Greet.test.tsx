import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Greet from "./Greet";

describe("Greet", () => {
  test("render correctly", () => {
    render(<Greet />);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });

  test("render with the name", () => {
    render(<Greet name="Hazem" />);
    expect(screen.getByText(/hello Hazem/i)).toBeInTheDocument();
  });
});
