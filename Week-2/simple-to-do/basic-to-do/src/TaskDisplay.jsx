import React from "react";
import { useEffect, useRef } from "react";
import { TaskListItem } from "./TaskListItem";

export const TaskDisplay = ({
  tasks,
  deleteTask,
  toggleEditTask,
  editTask,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [tasks]);

  return (
    <div>
      <ul id="todo-list">
        {tasks.map((task) => (
          <TaskListItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleEditTask={toggleEditTask}
            editTask={editTask}
            inputRef={inputRef}
          />
        ))}
      </ul>
    </div>
  );
};
