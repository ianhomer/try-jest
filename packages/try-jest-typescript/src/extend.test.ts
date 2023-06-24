describe("extend", () => {
  test("match response", () => {
    expect({ status: 200, body: { message: "test" } }).toMatchResponse({
      status: 200,
      body: { message: "test" },
    });
  });
});
