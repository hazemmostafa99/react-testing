import { render, screen } from "../../test-utils";
import { describe, expect, test } from "vitest";
import { MuiMode } from "./MuiMode";

describe("MuiMode", () => {
  test("MuiMode renders the text correctly", () => {
    render(<MuiMode />);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
