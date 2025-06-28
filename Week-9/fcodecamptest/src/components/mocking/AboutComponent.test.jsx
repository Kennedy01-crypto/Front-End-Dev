import AboutComponent from "./AboutComponent";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// mock path to module
jest.mock("./AboutComponent", () => {
  return () => {
    <div>
      <mock-image data-test-d="about-image" alt="mock-image" />
    </div>;
  };
});

test("Mocked about Page is visible", async () => {
  render(<AboutComponent />);

  const fullImage = screen.getByTestId(/about-image/i);
  expect(fullImage).toBeInTheDocument();

  const aboutPage = await screen.findByAltText(/mocked_image/i);
  expect(aboutPage).toBeInTheDocument();
});
