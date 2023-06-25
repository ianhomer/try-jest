describe("match object", () => {
  test("shallow equality", () => {
    expect({ a: 1 }).toMatchObject({ a: 1 });
  });
  test("deep equality", () => {
    expect({ a: 1, b: { c: 3 }, d: "important message" }).toMatchObject({
      a: 1,
      b: { c: 3 },
    });
  });
  test("deep equality, swapped", () => {
    expect({ b: { c: 3 }, a: 1, d: 4 }).toMatchObject({ b: { c: 3 }, a: 1 });
  });
  test("deep equality conditional extra parameter", () => {
    const thing = { a: 1, b: { c: 3 }, d: "important message" };
    expect(thing).toMatchObject({
      a: 1,
      b: { c: 3 },
      ...(thing.a == 1 ? {} : { d: "display reason on fail" }),
    });
  });
});
