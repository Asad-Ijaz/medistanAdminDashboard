import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = doctorSlice.actions;

export default doctorSlice.reducer;
