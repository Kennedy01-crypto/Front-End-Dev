import React, { useContext } from "react";
import { CounterContext } from "./withCounter";

export const Counter = () => {
  const { count, increment, decrement, reset } = useContext(CounterContext);
  return (
    <div className="container">
      <h2 className="title">Counter</h2>
      <h3 className="count">Count: {count}</h3>
      <div className="buttons">
        <button className="btn" onClick={increment}>
          Increment
        </button>
        <button className="btn" onClick={decrement}>
          Decrement
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
