import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: null,
};

export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setSession: (state, { payload }) => {
      console.log(payload, "session payload");

      state.session = payload;
    },

    userLoggedOut: () => initialState,
  },
});

export const { setSession, userLoggedOut } = AuthSlice.actions;
export default AuthSlice.reducer;
