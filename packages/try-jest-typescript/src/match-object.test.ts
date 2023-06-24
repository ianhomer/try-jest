describe("match object", () => {
  test("shallow equality", () => {
    expect({ a: 1 }).toMatchObject({ a: 1 });
  });
  test("deep equality", () => {
    expect({ a: 1, b: { c: 2 } }).toMatchObject({ a: 1, b: { c: 2 } });
  });
});
