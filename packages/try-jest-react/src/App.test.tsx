import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders try react", () => {
  render(<App />);
  const textElement = screen.getByText(/try react/i);
  expect(textElement).toBeInTheDocument();
});
