import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Todo from "./Todo";

test("Render todo", () => {
  const todo = { text: "Test" };

  render(<Todo todo={todo} />);

  expect(screen.getByText("Test")).toBeDefined();
});
