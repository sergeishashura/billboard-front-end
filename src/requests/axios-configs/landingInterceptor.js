import axios from "axios";

const landingInterceptor = axios.create();

landingInterceptor.interceptors.request.use(
  (config) => {
    config.headers.authorization = "Bearer " + localStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default landingInterceptor;
