import axios from "axios";

const instance = axios.create({
  baseURL: "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/",
  withCredentials: true,
});

instance.defaults.headers.common["Content-Type"] = "application/json";

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const urlParams = (data) => {
  return Object.entries(data)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");
};

export { instance as default, urlParams };