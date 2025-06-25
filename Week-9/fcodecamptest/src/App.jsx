import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MainBody from "./components/intergration/MainBody.jsx";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainBody />
    </>
  );
}

export default App;
