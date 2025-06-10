import React from "react";
import { useSelector } from "react-redux"; // Hook to select data from the Redux store
import TaskItem from "./TaskItem";

function TaskList() {
  // Use useSelector to get the tasks array from the Redux store state
  // state.tasks corresponds to the 'tasks' key in our store.js reducer
  const tasks = useSelector((state) => state.tasks);

  return (
    <ul style={{ listStyle: "none", padding: 0, width: "400px" }}>
      {tasks.length === 0 ? (
        <p>No tasks yet! Add one above.</p>
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </ul>
  );
}

export default TaskList;
