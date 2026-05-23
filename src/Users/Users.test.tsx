import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Users } from "./Users";
import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  test("renders an error", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return new HttpResponse({ status: 500 });
      }),
    );
    render(<Users />);
    const erorr = await screen.findByText("Error fetching users");
    expect(erorr).toBeInTheDocument();
  });
});
