import axiosApi from "./getApi";
import { localhost } from './../../constant/api';
const loginApi = {
  login(username, password) {
    return axiosApi.post(`${localhost}/user/login`, { username, password });
  },
  register(username, password) {
    return axiosApi.post(`${localhost}/register`, { username, password });
  },
};

export default loginApi;
