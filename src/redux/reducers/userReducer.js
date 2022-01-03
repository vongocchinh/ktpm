import { createReducer } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  isAuthenticatedFailure,
  isAuthenticatedRequest,
  isAuthenticatedSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
  logoutFailure,
  logoutRequest,
  logoutSuccess,
  registerFailure,
  registerRequest,
  registerSuccess,
} from "../actions/userAction";

const INITITAL_STATE = {
  isLoading: false,
  isAuthenticated: false,
};

const userReducer = createReducer(INITITAL_STATE, (builder) => {
  builder
    .addCase(loginRequest, (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
    })
    .addCase(loginSuccess, (state) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      toast.success("Login success!");
    })
    .addCase(loginFailure, (state) => {
      state.isLoading = false;
      toast.error("Login failure!");
    })
    .addCase(registerRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(registerSuccess, (state) => {
      state.isLoading = false;
      toast.success("Register success!");
    })
    .addCase(registerFailure, (state) => {
      state.isLoading = false;
      toast.error("Register failure!");
    })
    .addCase(isAuthenticatedRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(isAuthenticatedSuccess, (state) => {
      state.isAuthenticated = true;
      state.isLoading = false;
    })
    .addCase(isAuthenticatedFailure, (state) => {
      state.isAuthenticated = false;
      state.isLoading = false;
    })
    .addCase(logoutRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(logoutSuccess, (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    })
    .addCase(logoutFailure, (state) => {
      state.isLoading = false;
      state.isAuthenticated = true;
    });
});

export default userReducer;
