describe("extend", () => {
  test("simple extend", () => {
    expect({ status: 200, body: { message: "test" } }).toMatchResponse({
      status: 200,
      body: { message: "test" },
    });
  });
});
