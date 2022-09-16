import { render, screen } from "@testing-library/react";
import Actor from "./Actor";

describe("actor", () => {
  test("renders OK", () => {
    render(<Actor/>);
    const textElement = screen.getByText(/actor-name/i);
    expect(textElement).toBeInTheDocument();
  });
});
