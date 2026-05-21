import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Application } from "./Application";

describe("Application getByRole", () => {
  test("render correctly", () => {
    render(<Application />);
    // Heading
    const pageHeading = screen.getByRole("heading", {
      //   name: "Job application form",
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      //   name: "Section 1",
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    // input
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    // textarea
    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    // select
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    // checkbox
    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    // button
    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
