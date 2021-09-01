import { mask } from "./mask";

test("mask secret", () => {
  expect(mask("password")).toBe("*******");
});
