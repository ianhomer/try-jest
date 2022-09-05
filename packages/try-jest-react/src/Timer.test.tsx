import React from "react";
import { act, render, screen } from "@testing-library/react";
import Timer from "./Timer";

describe("timer", () => {
  beforeEach(() => {
    jest.useFakeTimers('legacy');
  });

  test("renders heading", () => {
    render(<Timer />);
    const text = screen.getByText(/timer/i);
    expect(text).toBeInTheDocument();
  });

  test("renders time running", () => {
    render(<Timer />);
    const timer = screen.getByRole("timer");
    expect(timer).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(5_000);
    });
    expect(timer.textContent).toBe("5");
  });
});
