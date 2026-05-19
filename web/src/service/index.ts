import axios from "axios"

const API_PORT = import.meta.env.VITE_API_PORT

export const api = axios.create({
  baseURL: `http://localhost:${API_PORT}`,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
})