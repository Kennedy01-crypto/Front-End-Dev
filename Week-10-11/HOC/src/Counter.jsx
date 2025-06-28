import React from "react";

export const Counter = (props) => {
  return (
    <div className="container">
      <h2 className="title">Counter</h2>
      <h3 className="count">Count: {props.count}</h3>
      <div className="buttons">
        <button className="btn" onClick={props.increment}>
          Increment
        </button>
        <button className="btn" onClick={props.decrement}>
          Decrement
        </button>
        <button className="btn" onClick={props.reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
