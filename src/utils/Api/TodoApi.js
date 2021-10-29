import { midpoint } from "../../constant/api";
import axiosApi from "./getApi";
const todoApi = {
  getAll() {
    return axiosApi.get(midpoint.todo);
  },
  deleteTodo(id) {
    return axiosApi.delete(`${midpoint.todo}/${id}`);
  },
  updateTodo(data) {
    return axiosApi.patch(`${midpoint.todo}/${data.id}`, data);
  },
  todoDetail(id) {
    return axiosApi.get(`${midpoint.todo}/${id}`);
  },
  addTodo(data){
    return axiosApi.post(`${midpoint.todo}`,data);
  }
};

export default todoApi;
