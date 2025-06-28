import MainBody from "./MainBody";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Button click changes MainBody h1 text", () => {
  render(<MainBody />);
  const buttonElement = screen.getByText(/Change Main Body/i);
  fireEvent.click(buttonElement);
  const headingElement = screen.getByRole("heading", { name: /new Text/i });
  expect(headingElement).toBeInTheDocument();
});
