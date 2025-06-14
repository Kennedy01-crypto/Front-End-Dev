import { render, screen } from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import Register from "./Register";

describe("Register Component", () => {
  it("Should render the Register component correctly", () => {
    render(<Register />);
    const element = screen.getByRole("heading", { level: 1 });
    expect(element).toBeInTheDocument();
  });
  it("should show error message when all the fields are not entered", async () => {
    render(<Register />);
    const buttonElement = screen.getByRole("button", { name: /Submit/i });
    await userEvent.click(buttonElement);
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toBeInTheDocument();
  });
  it("should not show any error message when the component is loaded",async ()=> {
    render(<Register />);
    const alertElement = screen.queryByRole('alert');
    expect(alertElement).not.toBeInTheDocument();
  })
  // succesful registeration
  it("should show success message when the registration is succesful", async () => {
    render(<Register />)
    const buttonElement = screen.getByRole("button", {name: /submit/i});
    await userEvent.click(buttonElement);
    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
  })
  it("should test for presence of subheading in the component", ()=> {
    render(<Register />);
    const element = screen.getByRole("heading", {name: /Please enter your details below to register yourself\./i})
    expect(element).toBeInTheDocument();
  })
});
