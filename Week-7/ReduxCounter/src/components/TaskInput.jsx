import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";

function TaskInput() {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch(); // Get the dispatch function

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      // Ensure the input is not empty
      dispatch(addTask(taskText)); // Dispatch the addTask action with the task text
      setTaskText(""); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task..."
        style={{ padding: "8px", marginRight: "10px", width: "300px" }}
      />
      <button type="submit" style={{ padding: "8px 15px", cursor: "pointer" }}>
        Add Task
      </button>
    </form>
  );
}

export default TaskInput;
