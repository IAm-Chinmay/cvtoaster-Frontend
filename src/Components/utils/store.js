import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
  },
});
