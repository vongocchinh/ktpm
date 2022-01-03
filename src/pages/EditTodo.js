/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  getTodoByIdRequest,
  updateTodoRequest,
} from "../redux/actions/todoAction";
import Layout from "./Layout";
import "./styles/Form.css";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const schema = yup.object({
  content: yup.string().required(),
  status: yup.boolean(),
  priority: yup.number(),
});

const EditTodo = () => {
  const { id } = useParams();

  const todo = useSelector((state) => state.todos.todo);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: todo,
  });

  const onSubmit = (values) => {
    dispatch(updateTodoRequest({ id, ...values }));
  };

  useEffect(() => {
    dispatch(getTodoByIdRequest(id));
  }, []);

  return (
    <Layout>
      <div className="add__container">
        <form
          id="form-edit"
          className="form-container"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="name">Content</label>
            <input
              id="name"
              defaultValue={todo?.content}
              type="text"
              {...register("content")}
            />
          </div>
          <div>
            <label htmlFor="Status">Status</label>
            <input
              id="status"
              type="checkbox"
              defaultChecked={todo?.status}
              {...register("status")}
            />
          </div>
          <div>
            <label htmlFor="priority">priority</label>
            <input
              id="priority"
              type="number"
              defaultValue={todo?.priority}
              {...register("priority")}
            />
          </div>
          <div>
            <button type="submit">Edit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditTodo;
