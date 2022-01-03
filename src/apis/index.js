import axios from "axios";

export const API_END_POINT = "http://localhost:6969";

export const instance = axios.create({
  baseURL: API_END_POINT,
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.setToken = ({ accessToken, refreshToken }) => {
  instance.defaults.headers["Authorization"] = `Beaer ${accessToken}`;
  window.localStorage.setItem("accessToken", accessToken);
  window.localStorage.setItem("refreshToken", refreshToken);
};

instance.interceptors.request.use((config) => {
  const accessToken = window.localStorage.getItem("accessToken");
  config.headers["Authorization"] = `Bearer ${accessToken}`;
  return config;
});

instance.interceptors.response.use(
  async (response) => {
    if (response.status === 401) {
      const refreshToken = window.localStorage.getItem("refreshToken");
      try {
        const res = await getRefreshToken(refreshToken);
        instance.setToken({
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        });
        const config = response.config;
        config.headers["Authorization"] = `Bearer ${res.data.accessToken}`;
        return instance(config);
      } catch (error) {
        Promise.reject(error);
      }
    }

    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    if (error.response) {
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        return instance(originalConfig);
      }
    }

    Promise.reject(error);
  }
);

export const getRefreshToken = (refreshToken) =>
  instance.post("/auth/refresh-token", {
    refreshToken,
  });
export const loginRequest = (body) => instance.post("/user/login", body);
export const registerRequest = (body) => instance.post("/user/register", body);
export const createTodoRequest = (body) => instance.post("/todo/add", body);
export const updateTodoRequest = (body) => {
  const { id, ...values } = body;
  return instance.patch("/todo/edit/" + id, values);
};
export const deleteTodoRequest = (id) => instance.delete("/todo/" + id);
export const getTodoRequest = () => instance.get("/todo");
export const isAuthenticatedRequest = () =>
  instance.get("/user/isAuthenticated");
export const getTodoByIdRequest = (id) => instance.get("/todo/" + id);
export const logoutRequest = (body) => instance.delete("/user/logout", body);
