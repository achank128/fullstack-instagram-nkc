const BASE_URL = "https://instagram-api-nkc.herokuapp.com/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

const token = localStorage.getItem("token");

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
  },
});
