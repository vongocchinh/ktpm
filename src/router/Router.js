import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import EditTodo from "../pages/EditTodo";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import TodoList from "../pages/TodoList";
import { isAuthenticatedRequest } from "../redux/actions/userAction";
import AddTodo from "./../pages/AddTodo";
import PrivateRoute from "./PrivateRoute";

export default function Router() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isAuthenticatedRequest());
  }, [dispatch]);

  return (
    <>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact component={TodoList} path="/" />
      <PrivateRoute exact component={EditTodo} path="/edit/:id" />
      <PrivateRoute exact component={AddTodo} path="/add" />
    </>
  );
}
