import { createSlice } from "@reduxjs/toolkit";
const user: Record<string, any> = {};
const wallet: Record<string, any> = {};
const business: Record<string, any> = {};
const initialState = {
  logOutAction: false,
  networkError: false,
  user,
  wallet,
  business,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    networkTimeOut: (state, action) => {
      state = action.payload;
    },
    logOutAction: (state) => {
      localStorage.removeItem("token");
      return { ...initialState };
    },
    logOut: (state) => {
      localStorage.removeItem("token");
      location.replace("/");
      return { ...initialState };
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updateWallet: (state, action) => {
      state.wallet = action.payload;
    },
    updateBusiness: (state, action) => {
      state.business = action.payload;
    },
  },
});

export const {
  logOutAction,
  logOut,
  networkTimeOut,
  updateUser,
  updateBusiness,
  updateWallet,
} = userSlice.actions;
export default userSlice;
