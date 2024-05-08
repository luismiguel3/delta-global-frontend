import axios from "axios";
import { logout } from "../hooks/useAuth";

let abortController = new AbortController();
let { signal } = abortController;

const __API__ = "http://localhost:8080";

const defaultConfig = {
  baseURL: __API__,
  withCredentials: true,
};

const api = axios.create(defaultConfig);

api.interceptors.request.use(
  async (config) => {
    let user: any = localStorage.getItem("auth");
    user = JSON.parse(user);
    if (user) {
      config.headers.Authorization = `${user.token}`;
    }
    return { ...config, signal };
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status !== 403) {
      return Promise.reject(error.response.data);
    }
    if (error?.response?.status === 403) {
      logout();
    }
    if (error?.message === "request_cancelled") {
      return Promise.reject(error.response.data);
    }
  }
);

export function cancelRequest() {
  abortController.abort();
  abortController = new AbortController();
  signal = abortController.signal;
}

export default api;
