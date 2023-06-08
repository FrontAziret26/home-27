import { createSlice } from "@reduxjs/toolkit";
import { signInRequest, signUpRequest } from "./authThunk";
import { STOREGE_KEY } from "../../constants";

const getInitialState = () => {
  const json = localStorage.getItem(STOREGE_KEY);
  if (json) {
    const userData = JSON.parse(json);
    return {
      isAuthorization: true,
      token: userData.data.token,
      user: {
        name: userData.data.user.name,
        gmail: userData.data.user.gmail,
        role: userData.data.user.role,
      },
    };
  }
  return {
    isAuthorization: false,
    token: "",
    user: {
      name: "",
      gmail: "",
      role: "",
    },
  };
};

const initialState = getInitialState();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isAuthorization = false;
      state.token = "";
      state.user = {
        name: "",
        gmail: "",
        password: "",
        id: "",
      };
      return localStorage.clear();
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signUpRequest.fulfilled, (state, action) => {
        state.isAuthorization = true;
        state.token = action.token;
      })
      .addCase(signInRequest.fulfilled, (state, action) => {
        state.isAuthorization = true;
        state.token = action.payload;
      })
      .addCase(signInRequest.pending, (state) => {
        state.isAuthorization = false;
      });
  },
});

export const authActions = authSlice.actions;
