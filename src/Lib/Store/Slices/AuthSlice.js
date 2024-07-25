import { createSlice } from "@reduxjs/toolkit";

let user = localStorage.getItem("user");
user = JSON.parse(user);

const initialState = {
  session: null,
};

export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    // setUser: (state, { payload }) => {
    //   console.log(payload, "userpayload");
    //   state.currentUser = payload;
    //   //   localStorage.setItem("user", JSON.stringify(payload));
    // },
    setSession: (state, { payload }) => {
      console.log(payload, "session payload");

      state.session = payload;
    },

    userLoggedOut: () => initialState,
  },
});

export const { setSession, userLoggedOut } = AuthSlice.actions;
export default AuthSlice.reducer;
