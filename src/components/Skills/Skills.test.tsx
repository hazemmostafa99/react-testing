import { describe, expect, test } from "vitest";
import { Skills } from "./Skills";
import { render, screen } from "@testing-library/react";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JS"];
  test("render Correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("render a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemsElements = screen.getAllByRole("listitem");
    expect(listItemsElements).toHaveLength(skills.length);
  });
  test("render a login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });
  test("render a start learining button", () => {
    render(<Skills skills={skills} />);
    const startLeariningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLeariningButton).not.toBeInTheDocument();
  });
  
  test("start learining button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const startLeariningButton = await screen.findByRole("button", {
      name: "Start learning",
    });
    expect(startLeariningButton).toBeInTheDocument();
  });
});
