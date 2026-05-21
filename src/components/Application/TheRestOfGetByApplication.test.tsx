import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Application } from "./Application";

describe("Application the rest of get by query", () => {
  test("let's test", () => {
    render(<Application />);
    const Fullname = screen.getByPlaceholderText("Fullname");
    expect(Fullname).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();
    const nameElement = screen.getByDisplayValue("Hazem");
    expect(nameElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    
  });
});
