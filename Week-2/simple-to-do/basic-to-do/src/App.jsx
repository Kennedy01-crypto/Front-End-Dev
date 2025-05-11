import { useCallback, useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SquarePen, Trash, Check } from "lucide-react";

function App() {
  const [newTaskText, setnewTaskText] = useState("");
  const inputRef = useRef(null);

  const [tasks, setTasks] = useState(() => {
    // load tasks from localstorage or use default tasks
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          { id: 1, text: "Task 1", completed: false, isEditing: false },
          { id: 2, text: "Task 2", completed: false, isEditing: false },
          { id: 3, text: "Task 3", completed: false, isEditing: false },
        ];
  });

  // save tasks to localstorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [tasks]);

  // Function to handle adding a new task
  const addTask = useCallback(() => {
    if (newTaskText.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: newTaskText,
        completed: false,
        isEditing: false,
      };
      setTasks((previousTasks) => [...previousTasks, newTask]);
      setnewTaskText("");
    }
  }, [newTaskText]);

  const deleteTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );
  };

  const toggleEditTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const editTask = (taskId, newText) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText, isEditing: false } : task
      )
    );
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
            value={newTaskText}
            onChange={(e) => setnewTaskText(e.target.value)}
          />
          <button type="submit" onClick={addTask}>
            Add Task
          </button>
        </form>
        <ul id="todo-list">
          {tasks.map((task) => (
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
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
