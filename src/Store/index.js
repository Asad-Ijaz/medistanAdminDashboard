import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Slices/index";

export const store = configureStore({
  reducer: rootReducer,
});
