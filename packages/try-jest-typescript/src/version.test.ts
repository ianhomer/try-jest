import { version } from "./version";

describe("version", () => {
  test.each`
    tag
    ${"v1.2.0"}
    ${"v1.2.1"}
  `("should unchange when from tag", ({ tag }) => {
    expect(version(tag, 0, "main")).toBe(tag);
  });

  test.each`
    tag          | expected
    ${"v1.2.0"}  | ${"v1.2.1-rc"}
    ${"v1.2.3"}  | ${"v1.2.4-rc"}
    ${"v2.10.0"} | ${"v2.10.1-rc"}
  `(
    "should increment patch when changed on release branch",
    ({ tag, expected }) => {
      expect(version(tag, 1, "release/1.2")).toBe(expected);
    }
  );

  test.each`
    tag          | expected
    ${"v1.2.0"}  | ${"v1.3.0-rc"}
    ${"v1.2.3"}  | ${"v1.3.0-rc"}
    ${"v2.10.0"} | ${"v2.11.0-rc"}
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
    ${"v"}
  `("should throw error when version not valid", ({ tag }) => {
    expect(() => version(tag, 0, "foo")).toThrow();
  });
});
