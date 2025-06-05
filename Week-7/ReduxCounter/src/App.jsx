import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Profile } from "./components/Profile";
import { Login } from "./components/Login";
import { ChangeColor } from "./components/ChangeColor";

function App() {
  return (
    <>
      <Profile />
      <Login />
      <ChangeColor />
    </>
  );
}

export default App;
