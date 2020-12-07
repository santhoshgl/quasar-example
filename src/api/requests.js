import axios from "axios";
import qs from "qs";
import authRefreshInterceptor from "axios-auth-refresh";

import { setToken, getToken } from "@utils/auth";

const Authorization = getToken();
const baseURL = `${process.env.API}/v1`;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization
  },
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: "brackets" });
  },
  transformResponse: [
    apiData => {
      if (apiData && apiData !== "") {
        const { data } = JSON.parse(apiData);
        return data;
      }
      return apiData;
    }
  ]
});

const refreshToken = failedRequest => {
  return axiosInstance.post(`${baseURL}/users/token`, {}).then(({ data }) => {
    const token = data.idToken;
    setToken(token);
    axiosInstance.interceptors.request.use(function(config) {
      config.headers.Authorization = token;
      return config;
    });
    failedRequest.response.config.headers["Authorization"] = token;
    return Promise.resolve();
  });
};

authRefreshInterceptor(axiosInstance, refreshToken);

export const formRequest = {
  post: (url, data) =>
    axiosInstance.post(url, data, {
      "Content-Type": "multipart/form-data"
    }),
  put: (url, data) =>
    axiosInstance.put(url, data, {
      "Content-Type": "multipart/form-data"
    })
};

const request = {
  get: (url, params) => axiosInstance.get(url, { params }),
  post: (url, body) => axiosInstance.post(url, body),
  put: (url, body) => axiosInstance.put(url, body),
  patch: (url, body) => axiosInstance.patch(url, body),
  del: url => axiosInstance.delete(url),
  delWithData: (url, data) => axiosInstance.delete(url, { data })
};

export default request;
