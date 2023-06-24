import { diff } from "jest-diff";
import {
  EXPECTED_COLOR,
  matcherErrorMessage,
  matcherHint,
  MatcherHintOptions,
  printExpected,
  printReceived,
  printWithType,
  RECEIVED_COLOR,
  stringify,
} from "jest-matcher-utils";

const EXPECTED_LABEL = "Expected";

function toMatchResponse(received: object, expected: object) {
  const matcherName = "toMatchObject";
  const options: MatcherHintOptions = {
    isNot: this.isNot,
    promise: this.promise,
  };

  if (typeof received !== "object" || received === null) {
    throw new Error(
      matcherErrorMessage(
        matcherHint(matcherName, undefined, undefined, options),
        `${RECEIVED_COLOR("received")} value must be a non-null object`,
        printWithType("Received", received, printReceived)
      )
    );
  }

  if (typeof expected !== "object" || expected === null) {
    throw new Error(
      matcherErrorMessage(
        matcherHint(matcherName, undefined, undefined, options),
        `${EXPECTED_COLOR("expected")} value must be a non-null object`,
        printWithType("Expected", expected, printExpected)
      )
    );
  }

  const pass = this.equals(received, expected);

  const message = pass
    ? () =>
        // eslint-disable-next-line prefer-template
        matcherHint(matcherName, undefined, undefined, options) +
        "\n\n" +
        `Expected: not ${printExpected(expected)}` +
        (stringify(expected) !== stringify(received)
          ? `\nReceived:     ${printReceived(received)}`
          : "")
    : () =>
        // eslint-disable-next-line prefer-template
        matcherHint(matcherName, undefined, undefined, options) +
        "\n\n" +
        EXPECTED_LABEL +
        ":" +
        JSON.stringify(expected) +
        "\n" +
        diff(received, expected) +
        (received["status"] === 500
          ? "\n\nActual was " + JSON.stringify(received)
          : "");

  return { message, pass };
}

expect.extend({
  toMatchResponse,
});
