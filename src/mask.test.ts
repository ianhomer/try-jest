import { mask } from "./mask";

test("mask password", () => {
  expect(mask("password")).toBe("********");
});

test("mask longer password", () => {
  expect(mask("longpassword")).toBe("************");
});
