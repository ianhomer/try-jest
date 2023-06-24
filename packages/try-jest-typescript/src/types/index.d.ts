declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchResponse(expected: object): R;
    }
  }
}

export {};
