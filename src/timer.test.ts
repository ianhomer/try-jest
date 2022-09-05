import { timer } from "./timer";

describe("timer", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
  });

  test("should wait 10 seconds", () => {
    let done = false;

    timer(() => (done = true));

    expect(setTimeout).toHaveBeenCalled();
    jest.advanceTimersByTime(10_000);
    expect(done).toBeTruthy();
  });
});
