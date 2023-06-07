import axios from "axios";
import { getLocalStorage } from "./localStorage.service";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["Authorization"] = getLocalStorage("token") || "";
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error.response?.data);
  }
);

export default axiosInstance;
