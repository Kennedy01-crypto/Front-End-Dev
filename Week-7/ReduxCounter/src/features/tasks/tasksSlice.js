import { createSlice } from "@reduxjs/toolkit";

const initialState = []; // Our initial state is an empty array of tasks

export const tasksSlice = createSlice({
  name: "tasks", // Name of our slice, used as a prefix for action types
  initialState,
  reducers: {
    // Reducer to add a new task
    addTask: (state, action) => {
      // action.payload will be the text of the new task
      const newTask = {
        id: Date.now(), // Simple unique ID
        text: action.payload,
        completed: false,
      };
      state.push(newTask); // Immer allows safe direct mutation
    },
    // Reducer to delete a task
    deleteTask: (state, action) => {
      // action.payload will be the ID of the task to delete
      return state.filter((task) => task.id !== action.payload);
    },
    // Reducer to toggle the completed status of a task
    toggleComplete: (state, action) => {
      // action.payload will be the ID of the task to toggle
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed; // Toggle the boolean
      }
    },
  },
});

// Export the auto-generated action creators
export const { addTask, deleteTask, toggleComplete } = tasksSlice.actions;

// Export the reducer for the store
export default tasksSlice.reducer;
