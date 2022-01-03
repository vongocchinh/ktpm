import { createAction } from "@reduxjs/toolkit";

export const getTodoRequest = createAction("TODO/GET_TODO_REQUEST");
export const getTodoSuccess = createAction("TODO/GET_TODO_SUCCESS");
export const getTodoFailure = createAction("TODO/GET_TODO_FAILURE");
export const createTodoRequest = createAction("TODO/CREATE_TODO_REQUEST");
export const createTodoSuccess = createAction("TODO/CREATE_TODO_SUCCESS");
export const createTodoFailure = createAction("TODO/CREATE_TODO_FAILURE");
export const updateTodoRequest = createAction("TODO/UPDATE_TODO_REQUEST");
export const updateTodoSuccess = createAction("TODO/UPDATE_TODO_SUCCESS");
export const updateTodoFailure = createAction("TODO/UPDATE_TODO_FAILURE");
export const deleteTodoRequest = createAction("TODO/DELETE_TODO_REQUEST");
export const deleteTodoSuccess = createAction("TODO/DELETE_TODO_SUCCESS");
export const deleteTodoFailure = createAction("TODO/DELETE_TODO_FAILURE");
export const getTodoByIdRequest = createAction("TODO/GET_TODO_BY_ID_REQUEST");
export const getTodoByIdSuccess = createAction("TODO/GET_TODO_BY_ID_SUCCESS");
export const getTodoByIdFailure = createAction("TODO/GET_TODO_BY_ID_FAILURE");
