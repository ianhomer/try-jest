import { logJestContext } from "./utils";

logJestContext();

describe("spy side effect", () => {
  it("spy should not be active in another test file", () => {
    console.log(
      `test message without spy : SPY_TEST = ${process.env.SPY_TEST}`
    );
    expect(console.log.toString()).toEqual("function () { [native code] }");
  });
});
