import * as types from "../../constant/login";

var initialState = {
  token: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login_success:
      state.token = action.payload;
      return { ...state };
    case types.logout_success:
      state.token = "";
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;
