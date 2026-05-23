// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json([
      {
        name: "Maverick",
      },
      {
        name: "Hazem",
      },
      {
        name: "Mostafa",
      },
    ]);
  }),
];
