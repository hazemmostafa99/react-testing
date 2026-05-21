import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Greet from "./Greet";

describe("Greet", () => {
  // fit to focus on this test === only
  // xit to exclude on this test === skip
  it("render correctly", () => {
    render(<Greet />);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });

//   it("render with the name", () => {
//     render(<Greet name="Hazem" />);
//     expect(screen.getByText(/hello Hazem/i)).toBeInTheDocument();
//   });
});
