import React, { useState } from "react";
import "./../styles/login.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from './../../redux/action/Login';

function Login(props) {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    var loginData = {
      username: login.username,
      password: login.password,
    };
    props.onLogin(loginData);
  };
  return (
    <>
      <div className="container-login">
        <div className="login__content">
          <form onSubmit={onSubmit}>
            <p>LOGIN</p>
            <input onChange={onChange} name='username' type="text" placeholder="Username" />
            <input onChange={onChange} name='password' type="text" placeholder="Password" />
            <input type="submit" value="Login" />
            <Link to="/register" className="register--link">
              Đăng Ký
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
const mapDispatchToProps = (dispatch) => ({
  onLogin: (payload) => dispatch(login(payload)),
});
export default connect(null,mapDispatchToProps)(Login);
