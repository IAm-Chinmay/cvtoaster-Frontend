import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  isLogin: false,
};

export const userAuthSlice = createSlice({
  name: "userAuthSlice",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userId = action.payload.userId;
      state.isLogin = action.payload.isLogin;
    },
    logout: (state) => {
      state.userId = "";
      state.isLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo, logout } = userAuthSlice.actions;

export default userAuthSlice.reducer;
