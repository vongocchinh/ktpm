import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginRequest } from "../../redux/actions/userAction";
import "./../styles/login.css";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required().min(4).max(32),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    dispatch(loginRequest(values));
  };

  return (
    <>
      <div className="container-login">
        <div className="login__content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>LOGIN</p>
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
            />
            <div className="form__error">{errors.username?.message}</div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <div className="form__error">{errors.password?.message}</div>
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

export default Login;
