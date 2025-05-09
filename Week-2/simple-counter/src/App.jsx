import React from "react";
import { useState } from "react";

const App = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <h2>Count: {count}</h2>
      <div className="set-buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default App;
