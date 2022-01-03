import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerRequest } from "../../redux/actions/userAction";
import "../styles/register.css";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required().min(4).max(32),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .min(4)
    .max(32),
});

function Register() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    dispatch(
      registerRequest({ username: values.username, password: values.password })
    );
  };

  return (
    <div className="container-login">
      <div className="login__content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>REGISTER</p>
          <input placeholder="Username" type="text" {...register("username")} />
          <div className="form__error">{errors.username?.message}</div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <div className="form__error">{errors.password?.message}</div>
          <input
            type="password"
            placeholder="Confirm your password"
            {...register("passwordConfirm")}
          />
          <div className="form__error">{errors.passwordConfirm?.message}</div>
          <input type="submit" value="Register" />
          <Link to="/login" className="register--link">
            Đăng Nhập
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
