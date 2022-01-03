import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./styles/Form.css";
import { useDispatch } from "react-redux";
import { createTodoRequest } from "../redux/actions/todoAction";
import Layout from "./Layout";

const schema = yup.object({
  content: yup.string().required(),
  priority: yup.number(),
});

const AddTodo = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    dispatch(createTodoRequest(values));
  };
  return (
    <Layout>
      <div className="add__container">
        <form
          id="form-add"
          className="form-container"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="name">Content</label>
            <input id="name" {...register("content")} type="text" />
          </div>
          <div>
            <label htmlFor="priority">Priority</label>
            <input
              id="priority"
              min={0}
              defaultValue={0}
              max={10}
              type="number"
              {...register("priority")}
            />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddTodo;
