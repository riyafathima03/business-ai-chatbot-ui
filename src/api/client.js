import axios from "axios";

// change this to your backend URL
const API_BASE_URL = "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
