import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "./../redux/action/Login";

function Layout(props) {
  const logout = () => {
    props.logout();
  };
  return (
    <>
      <div className="header">
        <p onClick={logout}>Logout</p>
      </div>
      <div className="container">{props.children}</div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser()),
});
export default connect(null, mapDispatchToProps)(Layout);
