import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter } from "./Counter";
import { withCounter } from "./withCounter";

const EnhancedCounter = withCounter(Counter);
const App = () => {
  return (
    <>
      <EnhancedCounter />
    </>
  );
};

export default App;
