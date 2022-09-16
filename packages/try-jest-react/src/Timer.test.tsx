import { act, render, screen } from "@testing-library/react";
import Timer from "./Timer";

const advanceTimerTickAndAct = async (ticks:number, tickTimeInMs:number) => {
  for (let i = 0; i < ticks; i++) {
    await act(async () => {
      jest.advanceTimersByTime(tickTimeInMs);
    });
  }
};

describe("timer", () => {
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });

  test("renders heading", () => {
    render(<Timer />);
    const text = screen.getByText(/timer/i);
    expect(text).toBeInTheDocument();
  });

  test("renders time running", async () => {
    render(<Timer />);
    const timer = screen.getByRole("timer");
    expect(timer).toBeInTheDocument();
    await advanceTimerTickAndAct(1000, 100);
    expect(timer.textContent).toBe("100 : 100");
  });
});
