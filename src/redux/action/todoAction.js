import * as types from "../../constant/todo";
import { push } from "connected-react-router";
import todoApi from "./../../utils/Api/TodoApi";

export const addTodo = (payload) => {
  return (dispatch) => {
    dispatch(AddTodoLoading());
    const response = todoApi.addTodo(payload);
    if (response.status === 200) {
      dispatch(AddTodoSuccess(response.data));
      dispatch(push("/"));
    } else {
      dispatch(AddTodoFail(response.message));
    }
  };
};

export const AddTodoSuccess = (payload) => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload: payload,
  };
};
export const AddTodoFail = (message) => {
  return {
    type: types.ADD_TODO_FAIL,
    payload: message,
  };
};
export const AddTodoLoading = () => {
  return {
    type: types.ADD_TODO_LOADING,
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch(deleteTodoLoading());
    const response = todoApi.deleteTodo(id);
    if (response.status === 200) {
      dispatch(deleteTodoSuccess(id));
    } else {
      dispatch(deleteTodoError());
    }
  };
};

export const deleteTodoLoading = () => ({
  type: types.REMOVE_TODO_LOADING,
});

export const deleteTodoError = (message) => ({
  type: types.REMOVE_TODO_FAIL,
  payload: message,
});

export const deleteTodoSuccess = (id) => ({
  type: types.REMOVE_TODO_SUCCESS,
  id,
});

export const updateTodoSuccess = (data) => ({
  type: types.UPDATE_TODO_SUCCESS,
  data,
});

export const updateTodoFail = (data) => ({
  type: types.UPDATE_TODO_FAIL,
  message: data,
});

export const updateTodoLoading = () => ({
  type: types.UPDATE_TODO_LOADING,
});

export const updateTodo = (payload) => {
  return (dispatch) => {
    dispatch(updateTodoLoading());
    const response = todoApi.updateTodo(payload);
    if (response.status === 200) {
      dispatch(push("/"));
      dispatch(updateTodoSuccess(payload));
    } else {
      dispatch(updateTodoFail(""));
    }
  };
};
