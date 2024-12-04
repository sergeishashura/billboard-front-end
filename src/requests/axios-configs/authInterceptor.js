import axios from "axios";

const authInterceptor = axios.create();

authInterceptor.interceptors.request.use(
  (config) => {
    config.headers.authorization = "Bearer " + localStorage.getItem("token");
    config.headers.user = localStorage.getItem("userId");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authInterceptor;
