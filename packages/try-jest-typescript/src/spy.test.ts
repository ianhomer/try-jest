import { logJestContext } from "./utils";

const mockFunction = jest.fn();
const originalConsoleLog = console.log;

process.env.SPY_TEST = "not executed";

logJestContext();

describe("spy", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(mockFunction);
    process.env.SPY_TEST = "mocked";
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should capture mock calls", () => {
    console.log("test message");
    expect(mockFunction).toBeCalledWith("test message");
    process.env.SPY_TEST = "executed";
  });
});

describe("after spy", () => {
  it("console mock should no longer be active", () => {
    expect(console.log).toBe(originalConsoleLog);
    console.log(
      `test message without spy : ${process.env.JEST_WORKER_ID} : ${process.env.SPY_TEST}`
    );
  });
});
