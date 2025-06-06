import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = 0;

//store
export const counterSlice = createSlice({
  // reducer
  name: "counter",
  initialState: { value: initialStateValue },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
