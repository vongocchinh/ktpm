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
        <button onClick={logout}>Logout</button>
      </div>
      <div className="container">{props.children}</div>
    </>
  );
}
export default Layout;
