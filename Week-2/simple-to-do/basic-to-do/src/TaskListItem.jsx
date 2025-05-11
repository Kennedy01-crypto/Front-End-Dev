import React from "react";
import { SquarePen, Trash, Check } from "lucide-react";

export const TaskListItem = ({
  task,
  deleteTask,
  toggleEditTask,
  editTask,
  inputRef,
}) => {
  return (
    <div>
      <li key={task.id} className="task-item">
        {task.isEditing ? (
          <>
            <input
              type="text"
              defaultValue={task.text}
              onBlurCapture={(e) => editTask(task.id, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  editTask(task.id, e.target.value);
                } else if (e.key === "Escape") {
                  toggleEditTask(task.id);
                }
              }}
              autoFocus
              className="task-edit-input"
              ref={inputRef}
            />
            <Check
              size={16}
              className="icon-check"
              onClick={() => editTask(task.id, task.text)}
            />
          </>
        ) : (
          <span className="task-text">{task.text}</span>
        )}

        <SquarePen
          size={16}
          className="icon-edit"
          onClick={() => toggleEditTask(task.id)}
        />
        <Trash
          size={16}
          className="icon-delete"
          onClick={() => deleteTask(task.id)}
        />
      </li>
    </div>
  );
};
