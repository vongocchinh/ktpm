import React, { useState } from "react";
import "../styles/register.css";
import { connect } from "react-redux";
import { registerUser } from "./../../redux/action/Login";
import { Link } from "react-router-dom";

function Register(props) {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (login.password === login.passwordConfirm) {
      var registerData = {
        username: login.username,
        password: login.password,
      };
      props.onRegister(registerData);
    }
  };
  return (
    <div className="container-login">
      <div className="login__content">
        <form onSubmit={onSubmit}>
          <p>LOGIN</p>
          <input
            onChange={onChange}
            name="username"
            type="text"
            placeholder="Username"
          />
          <input
            onChange={onChange}
            name="password"
            type="text"
            placeholder="Password"
          />
          <input
            onChange={onChange}
            name="passwordConfirm"
            type="text"
            placeholder="PasswordConfirm"
          />
          <input type="submit" value="Login" />
          <Link to="/login" className="register--link">
            Đăng Nhập
          </Link>
        </form>
      </div>
    </div>
  );
}
const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  onRegister: (payload) => dispatch(registerUser(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
