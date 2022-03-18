import { render, screen } from "@testing-library/react";
import Header from "../components/header/Header";

test("render title in header", () => {
  render(<Header />);
  const title = screen.getByText(/Cool pics/i);
  expect(title).toBeTruthy();
});
