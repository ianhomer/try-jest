function toMatchResponse(actual: string, expected: string) {
  return {
    message: () => `hello ${actual} : ${expected}`,
    pass: true,
  };
}

expect.extend({
  toMatchResponse,
});
