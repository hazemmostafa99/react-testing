import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Application } from "./Application";

describe("Application getByLabelText", () => {
  test("getByLabelText", () => {
    render(<Application />);
    // input
    const nameElement = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement).toBeInTheDocument();

    const termsElement = screen.getByLabelText(
      "I agree to the terms and conditions",
    );
    expect(termsElement).toBeInTheDocument();
  });
});
