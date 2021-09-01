import { code } from "./code";

test("code returns AB00 by default", () => {
  expect(code()).toBe("AB00");
});
