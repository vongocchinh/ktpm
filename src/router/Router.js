import React from "react";
import { Switch ,Route} from "react-router-dom";
import EditTodo from "../pages/EditTodo";
import TodoList from "../pages/TodoList";
import AddTodo from "./../pages/AddTodo";
import Layout from "./Layout";
export default function Router() {
  return (
    <Layout>
        <Route exact={true} component={TodoList} path="/" />
        <Route exact={false} component={EditTodo} path="/edit/:id" />
        <Route exact={false} component={AddTodo} path="/add" />
    </Layout>
  );
}
