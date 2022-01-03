import { createAction } from "@reduxjs/toolkit";

export const loginRequest = createAction("USER/LOGIN_REQUEST");
export const loginSuccess = createAction("USER/LOGIN_SUCCESS");
export const loginFailure = createAction("USER/LOGIN_FAILURE");
export const registerRequest = createAction("USER/REGISTER_REQUEST");
export const registerSuccess = createAction("USER/REGISTER_SUCCESS");
export const registerFailure = createAction("USER/REGISTER_FAILURE");
export const isAuthenticatedRequest = createAction(
  "USER/IS_AUTHENTICATED_REQUEST"
);
export const isAuthenticatedSuccess = createAction(
  "USER/IS_AUTHENTICATED_SUCCESS"
);
export const isAuthenticatedFailure = createAction(
  "USER/IS_AUTHENTICATED_FAILURE"
);
export const logoutRequest = createAction("USER/LOGOUT_REQUEST");
export const logoutSuccess = createAction("USER/LOGOUT_SUCCESS");
export const logoutFailure = createAction("USER/LOGOUT_FAILURE");
