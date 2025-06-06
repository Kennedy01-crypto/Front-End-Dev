import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/tasksSlice"; // Import our tasks reducer

export const store = configureStore({
  reducer: {
    // We map our tasks slice's reducer to a key in the store's state tree.
    // So, state.tasks will hold our array of tasks.
    tasks: tasksReducer,
  },
});
