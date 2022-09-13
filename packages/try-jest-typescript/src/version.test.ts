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
    tag           | expected
    ${"v1.2.0"}   | ${"v1.2.1-rc"}
    ${"v1.2.3"}   | ${"v1.2.4-rc"}
    ${"v2.10.0"}  | ${"v2.10.1-rc"}
    ${"v2.10.10"} | ${"v2.10.11-rc"}
    ${"v2.10.99"} | ${"v2.10.100-rc"}
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
    ${undefined}
    ${"1.2"}
    ${"v1.2"}
    ${"v"}
    ${"vx.y.z"}
    ${"v1.2.z"}
  `("should throw error when version not valid", ({ tag }) => {
    expect(() => version(tag, 0, "foo")).toThrowError(
      `version ${tag} is not like vx.y.z`
    );
  });

  test("should use tag if undefined branch", () => {
    expect(version("v1.2.3", 0, undefined)).toBe("v1.2.3");
  });

  test("should treat undefined branch as not release", () => {
    expect(version("v1.2.3", 1, undefined)).toBe("v1.3.0-rc");
  });
});
