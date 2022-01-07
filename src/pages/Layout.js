import React from "react";
import { useDispatch } from "react-redux";
import { logoutRequest } from "../redux/actions/userAction";

function Layout(props) {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutRequest());
  };
  return (
    <>
      <div className="header">
        <div className="btn__add">
          <button className="btn__add__content" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      <div className="container">{props.children}</div>
    </>
  );
}
export default Layout;
