import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../features/tasks/tasksSlice";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        border: "1px solid #ddd",
        marginBottom: "5px",
        backgroundColor: task.completed ? "#e6ffe6" : "white", // Light green if completed
        textDecoration: task.completed ? "line-through" : "none",
      }}
    >
      <span
        onClick={() => dispatch(toggleComplete(task.id))}
        style={{ cursor: "pointer", flexGrow: 1 }}
      >
        {task.text}
      </span>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        style={{
          background: "#ff4d4d",
          color: "white",
          border: "none",
          padding: "5px 10px",
          borderRadius: "4px",
          cursor: "pointer",
          marginLeft: "10px",
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
