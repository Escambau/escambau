import axios from "axios";

const api = axios.create({
  baseURL: "https://escambau-api.herokuapp.com",
  timeout: 10000,
});

export default api;
