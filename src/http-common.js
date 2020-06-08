import axios from "axios";
import config from "./config.js";

const token = localStorage.getItem('token') || '';
if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export default axios.create({
  baseURL: config.test.domain,
});