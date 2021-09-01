import { code } from "./code";

test("code returns AB00 by default", () => {
  expect(code()).toBe("AB00");
});

test("code for week 1 returns AB01", () => {
  expect(code(1)).toBe("AB01");
});

test("code for week 10 returns AB10", () => {
  expect(code(10)).toBe("AB10");
});

test("code for week out of range throws exception", () => {
  expect(() => {
    code(-1);
  }).toThrow("Week is out of range");
});
