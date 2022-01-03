import { createReducer } from "@reduxjs/toolkit";

import {
  getTodoRequest,
  getTodoSuccess,
  getTodoFailure,
  createTodoRequest,
  createTodoSuccess,
  createTodoFailure,
  updateTodoRequest,
  updateTodoSuccess,
  updateTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
  getTodoByIdRequest,
  getTodoByIdSuccess,
  getTodoByIdFailure,
} from "../actions/todoAction";

const INITITAL_STATE = {
  todos: [],
  todo: null,
  selected: null,
  isLoading: false,
};

const todoReducer = createReducer(INITITAL_STATE, (builder) => {
  builder
    .addCase(getTodoRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(getTodoSuccess, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    })
    .addCase(getTodoFailure, (state) => {
      state.isLoading = false;
      state.todos = [];
    })
    .addCase(createTodoRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(createTodoSuccess, (state, action) => {
      state.isLoading = false;
      state.todos.push(action.payload);
    })
    .addCase(createTodoFailure, (state) => {
      state.isLoading = false;
    })
    .addCase(updateTodoRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(updateTodoSuccess, (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    })
    .addCase(updateTodoFailure, (state) => {
      state.isLoading = false;
    })
    .addCase(deleteTodoRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(deleteTodoSuccess, (state, action) => {
      state.isLoading = false;
      // state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    })
    .addCase(deleteTodoFailure, (state) => {
      state.isLoading = false;
    })
    .addCase(getTodoByIdRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(getTodoByIdSuccess, (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    })
    .addCase(getTodoByIdFailure, (state) => {
      state.isLoading = false;
    });
});

export default todoReducer;
