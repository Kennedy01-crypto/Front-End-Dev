import React, { useState, createContext } from "react";

export const CounterContext = createContext();

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
      <CounterContext.Provider value={{ count, increment, decrement, reset }}>
        <WrappedComponent {...props} />
      </CounterContext.Provider>
    );
  };
};
