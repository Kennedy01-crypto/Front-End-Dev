import React from "react";

function Counter({ initialCount }) {
  const [count, setCount] = React.useState(initialCount);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const restart = () => {
    setCount(0);
  };

  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };

  return (
    <div>
      <p>
        Current count: <h3 data-testid="count">{count}</h3>
      </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={restart}>Reset</button>
      <button onClick={switchSigns}>Switch Signs</button>
      <p>
        <small>
          Note: The "Switch Signs" button will multiply the current count by -1.
        </small>{" "}
      </p>
    </div>
  );
}
export default Counter;
