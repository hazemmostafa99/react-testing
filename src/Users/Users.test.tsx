import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Users } from "./Users";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });
});
