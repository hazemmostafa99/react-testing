import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MuiMode } from "./MuiMode";
import { AppProviders } from "../../providers/AppProviders";

describe("MuiMode", () => {
  test("MuiMode renders the text correctly", () => {
    render(<MuiMode />, { wrapper: AppProviders });

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
