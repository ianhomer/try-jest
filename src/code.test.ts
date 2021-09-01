import { code } from "./code";

test("code returns AB00 by default", () => {
  expect(code()).toBe("AB00");
});

test("code for week 1 returns AB01", () => {
  expect(code(1)).toBe("AB01");
});
