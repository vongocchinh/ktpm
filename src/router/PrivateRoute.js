import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner/Spinner";

export default function PrivateRouter({ path, component, exact }) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isLoading = useSelector((state) => state.user.isLoading);

  if (isLoading) {
    return <Spinner />;
  }


  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <Route path={path} component={component} exact={exact} />;
}
