import { BASE_URL } from "./data.js";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
  },
});
