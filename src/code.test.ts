import { code } from "./code";

test("code returns AB01 by default", () => {
  expect(code()).toBe("AB01");
});

test("code for week 1 returns AB01", () => {
  expect(code(1)).toBe("AB01");
});

test("code for week 10 returns AB10", () => {
  expect(code(10)).toBe("AB10");
});

test("code for week less than 0 throws exception", () => {
  expect(() => {
    code(-1);
  }).toThrow("Week -1 is out of range");
});

test("code for week greater than 52 throws exception", () => {
  expect(() => {
    code(52);
  }).toThrow("Week 52 is out of range");
});
