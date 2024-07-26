import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invitations: [],
};

export const invitationSlice = createSlice({
  name: "invitations",
  initialState,
  reducers: {
    getAllInvitations: (state, { payload }) => {
      console.log(payload, "inivteState");
      state.invitations = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAllInvitations } = invitationSlice.actions;

export default invitationSlice.reducer;
