import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Actor from "./Actor";

describe("actor", () => {
  test("renders OK", () => {
    render(<Actor />);
    const textElement = screen.getByText(/actor-name/i);
    expect(textElement).toBeInTheDocument();
  });

  test("counts OK", () => {
    render(<Actor />);
    const clickableElement = screen.getByTestId("clickable");
    act(() => {
      clickableElement.click();
    });
    const countElement = screen.getByTestId("count");
    expect(countElement.textContent).toBe("1");
  });
});
