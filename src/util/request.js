import axios from "axios";

const request = axios.create({
  withCredentials: true,
  timeout: 10000,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  ({ status, statusText, data }) => {
    if (status !== 200) {
      Promise.reject(new Error(`网络出错，请重试！${statusText}`));
    } else {
      return data;
    }
  },
  (error) => {
    console.error(error);
    throw error;
  }
);

export default request;
