import * as types from "./../../constant/login";
import loginApi from "./../../utils/Api/Login";
import { push } from "connected-react-router";

export const login = (payload) => {
  var username=payload.username;
  var password=payload.password;
  return function (dispatch) {
    dispatch(loginLoading());
    const response = loginApi.login(username, password);
    if (response.status === 200) {
      localStorage.setItem("auth", JSON.stringify(response.data));
      dispatch(push("/"));
      dispatch(loginSuccess(response.data));
    } else {
      dispatch(loginFail("fail"));
    }
  };
};

export const loginSuccess = (data) => {
  return {
    type: types.login_success,
    payload: data,
  };
};

export const loginLoading = () => {
  return {
    type: types.login_loading,
  };
};

export const loginFail = (message) => {
  return {
    type: types.login_fail,
    message,
  };
};

export const registerUser = (payload) => {
  var username=payload.username;
  var password=payload.password;
  console.log(username);
  console.log(password);
  return (dispatch) => {
    dispatch(registerLoading());
    const response = loginApi.register(username, password);
    console.log(response);
    if (response.status === 200) {
      dispatch(push("/login"));
      dispatch(registerSuccess());
    } else {
      dispatch(registerError());
    }
  };
};

export const registerLoading = () => {
  return {
    type: types.register_loading,
  };
};

export const registerError = () => {
  return {
    type: types.register_fail,
  };
};

export const registerSuccess = () => {
  return {
    type: types.register_success,
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(logoutLoading());
    localStorage.clear();
    dispatch(logoutSuccess());
    dispatch(push("/login"));
  };
};

export const logoutLoading = () => {
  return {
    type: types.login_loading,
  };
};

export const logoutError = () => {
  return {
    type: types.logout_fail,
  };
};

export const logoutSuccess = () => {
  return {
    type: types.logout_success,
  };
};
