import axios from "axios";
import qs from "qs";

const AUTH_TOKEN = ""; //Read auth token from env or localStorage

const getInstance = axios.create({
  baseURL: "/", //Change this to the API URL
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: AUTH_TOKEN
  },
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: "brackets" });
  }
});

function axiosInstance(method, url, data, contentType) {
  return axios({
    method,
    baseURL: "/",
    url,
    data,
    headers: {
      "Content-Type": contentType || "application/json",
      "X-CSRF-TOKEN": localStorage.getItem("access_token")
    }
  });
}

const updateInstance = {
  post: (url, data) => axiosInstance("post", url, data),
  put: (url, data) => axiosInstance("put", url, data),
  del: url => axiosInstance("delete", url),
  delWidthData: (url, data) => axiosInstance("delete", url, data)
};

export const formRequest = {
  post: (url, data) => axiosInstance("post", url, data, "multipart/form-data"),
  put: (url, data) => axiosInstance("put", url, data, "multipart/form-data")
};

const request = {
  get: (url, params) => getInstance.get(url, { params }),
  post: (url, body) => updateInstance.post(url, body),
  put: (url, body) => updateInstance.put(url, body),
  del: url => updateInstance.del(url),
  delWithData: (url, data) => updateInstance.delWithData(url, { data })
};

export default request;
