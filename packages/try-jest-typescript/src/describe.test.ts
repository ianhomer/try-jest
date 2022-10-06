describe("1st describe", () => {
  console.log("1st describe block : start");

  it("should be OK", () => {
    expect(1).toBe(1);
  });
  console.log("1st describe block : end");

  describe("nested", () => {
    console.log("inside nested describe of 1st block");
  });
});

describe("2nd describe", () => {
  console.log("2nd describe block : start");

  it("should be OK", () => {
    expect(1).toBe(1);
  });

  console.log("2nd describe block : end");
});
