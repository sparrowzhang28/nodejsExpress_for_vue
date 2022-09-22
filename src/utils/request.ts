import axios from "axios";
/* eslint-disable */
const request = axios.create({
  baseURL: "http://localhost:5555",
  timeout: 5000,
});

request.interceptors.request.use(
  (config: any) => {
    config.headers["Content-Type"] = "application/json;charset=utf-8";
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response: any) => {
    let res = response.data;
    if (response.config.responseType === "blob") {
      return res;
    }
    if (typeof res === "string") {
      res = res ? JSON.parse(res) : res;
    }
    return res;
  },
  (error: any) => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  },
);
export default request;
