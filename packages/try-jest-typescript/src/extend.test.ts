describe("extend", () => {
  test("simple extend", () => {
    expect({ status: 500, body: { message: "test" } }).toMatchResponse({
      status: 200,
    });
  });
});
