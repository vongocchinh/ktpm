import { midpoint } from "../../constant/api";
import axiosApi from "./getApi";
const loginApi = {
  login(username, password) {
    return axiosApi.post(`${midpoint.todo}`, { username, password });
  },
  register(username, password) {
    return axiosApi.post(`${midpoint.todo}`, { username, password });
  },
};

export default loginApi;
