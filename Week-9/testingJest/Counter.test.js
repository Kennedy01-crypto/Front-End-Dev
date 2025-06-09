import { render, fireEvent } from "@testing-library/react";
import Counter from "./src/Counter";

describe(Counter, () => {
  it("Counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
  //   it("Counter increments count correctly", () => {
  //     const { getByTestId, getByText } = render(<Counter initialCount={0} />);
  //     const incrementButton = getByText("Increment");
  //     const countValue = getByTestId("count");
  //   });
  //   it("Counter decrements count correctly", () => {
  //     const { getByTestId, getByText } = render(<Counter initialCount={0} />);
  //     const decrementButton = getByText("Decrement");
  //     const countValue = getByTestId("count");
  //   });
  it("Count increments by 1 when Increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementButton = getByRole("button", { name: "Increment" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementButton);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  });
  it("Count decrements by 1 when Decrement button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decrementButton = getByRole("button", { name: "Decrement" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(decrementButton);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(-1);
  });
  it("Count resets to 0 when Reset button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const resetButton = getByRole("button", { name: "Reset" });
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(resetButton);
    expect(Number(getByTestId("count").textContent)).toEqual(0);
  });
  it("Count switches signs when Switch Signs button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const switchSignsButton = getByRole("button", { name: "Switch Signs" });
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(switchSignsButton);
    expect(Number(getByTestId("count").textContent)).toEqual(-50);
  });
});
