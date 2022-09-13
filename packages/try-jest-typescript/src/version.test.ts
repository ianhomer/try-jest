import { version } from "./version";

describe("version", () => {
  test("should unchange when from tag", () => {
    expect(version("v1.2.3", 0, "main")).toBe("v1.2.3");
  });

  test("should increment patch when changed on release branch", () => {
    expect(version("v1.2.3", 1, "release/1.2")).toBe("v1.2.4-rc");
  });

  test.each`
    tag         | expected
    ${"v1.2.0"} | ${"v1.3.0-rc"}
    ${"v1.2.3"} | ${"v1.3.0-rc"}
  `(
    "should increment minor when changed not on release branch",
    ({ tag, expected }) => {
      expect(version(tag, 1, "main")).toBe(expected);
    }
  );

  test.each`
    tag
    ${"1.2"}
    ${"v1.2"}
  `("should throw error when version not valid", ({ tag }) => {
    expect(() => version(tag, 0, "foo")).toThrow();
  });
});
