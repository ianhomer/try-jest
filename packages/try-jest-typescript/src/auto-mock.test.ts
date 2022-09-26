import { createMock } from "ts-auto-mock";

interface Interface {
  a: string;
  b: number;
}

describe("reuse", () => {
  it("should work", () => {
    const mock = createMock<Interface>();
    mock.a = "foo";
    expect(mock.a).toBe("foo");
  });
});
