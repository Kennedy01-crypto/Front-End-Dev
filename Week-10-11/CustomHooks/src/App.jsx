import { useState } from "react";
import { useToggle } from "./components/useToggle";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle(true);

  return (
    <>
      <div className="App">
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"} </button>
        {isVisible && <h1>Hidden Text</h1>}

        <button onClick={toggle2}>{isVisible2 ? "Hide" : "Show"} </button>
        {isVisible2 && <h1>Hidden Text</h1>}
      </div>
    </>
  );
}

export default App;
