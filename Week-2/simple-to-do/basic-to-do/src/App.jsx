import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setinputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = { id: Date.now(), task: inputValue };
      setTasks((preveousTasks) => [...preveousTasks, inputValue]);
      setinputValue("");
    }
  };

  return (
    <>
      <div className="app">
        <form htmlFor="todo-form" onSubmit={(e) => e.preventDefault()}>
          <h1>Basic To-Do List</h1>
          <input
            type="text"
            id="todo-input"
            placeholder="Enter a new task"
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
          />
          <button type="submit" onClick={addTask}>
            Add Task
          </button>
        </form>
        <ul id="todo-list">
          {tasks.map((task) => (
            <li key={task.id}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
