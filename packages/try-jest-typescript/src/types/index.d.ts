declare module "expect" {
  interface AsymmetricMatchers {
    toMatchResponse(expected: string): void;
  }
  interface Matchers<R> {
    toMatchResponse(expected: string): R;
  }
}

export {};
