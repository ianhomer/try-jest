import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Actor from "./Actor";
import { TraceContext } from "./TraceContext";

describe("actor", () => {
  test("renders OK", () => {
    render(<Actor />);
    const textElement = screen.getByText(/actor-name/i);
    expect(textElement).toBeInTheDocument();
  });

  test("counts OK", async () => {
    const trace: string[] = [];
    render(
      <TraceContext.Provider value={trace}>
        <Actor />
      </TraceContext.Provider>
    );
    expect(trace.shift()).toBe("rendering Actor : 0");
    const clickableElement = screen.getByTestId("clickable");
    act(() => {
      trace.push("act start");
      clickableElement.click();
      trace.push("act end");
    });
    expect(trace.shift()).toBe("act start");
    expect(trace.shift()).toBe("before setCount(1)");
    expect(trace.shift()).toBe("act end");
    expect(trace.shift()).toBe("rendering Actor : 1");
    const countElement = screen.getByTestId("count");
    expect(countElement.textContent).toBe("1");
    expect(trace).toHaveLength(0);
  });
});
