// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { Profile } from "./components/Profile";
// import { Login } from "./components/Login";
// import { ChangeColor } from "./components/ChangeColor";

// function App() {
//   return (
//     <>
//       <Profile />
//       <Login />
//       <ChangeColor />
//     </>
//   );
// }

// export default App;

import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css"; // Optional: for basic styling

function App() {
  return (
    <div
      className="App"
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        maxWidth: "600px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "607d83",
        boxShadow: "0 2px 10px rgba(23, 107, 225, 0)",
      }}
    >
      <h1 style={{ color: "white" }}>Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
