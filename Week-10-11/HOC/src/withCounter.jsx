import React from "react";
import { useState } from "react";

export const withCounter = (WrappedComponent) => {
  return function WithCounter(props) {
    const [count, setcount] = useState(0);
    const increment = () => {
      setcount((prev) => prev + 1);
    };
    const decrement = () => {
      setcount((prev) => prev - 1);
    };
    const reset = () => {
      setcount(0);
    };
    return (
      <WrappedComponent
        {...props}
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
    );
  };
};
