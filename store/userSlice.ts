import { createSlice } from "@reduxjs/toolkit";

const initialState = { logOutAction: false, networkError: false };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    networkTimeOut: (state, action) => {
      state = action.payload;
    },
    logOutAction: (state, action) => {
      state.logOutAction = action.payload;
    },
    logOut: (state) => {
      localStorage.removeItem("token");
      location.replace("/");
      return { ...initialState };
    },
  },
});

export const { logOutAction, logOut, networkTimeOut } = userSlice.actions;
export default userSlice;
