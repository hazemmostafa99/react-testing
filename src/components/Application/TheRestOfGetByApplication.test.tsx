import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Application } from "./Application";

describe("Application getByPlaceholderText", () => {
  test("getByLabelText", () => {
    render(<Application />);
    const Fullname = screen.getByPlaceholderText("Fullname");
    expect(Fullname).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    const nameElement = screen.getByDisplayValue("Hazem");
    expect(nameElement).toBeInTheDocument();
  });
});
