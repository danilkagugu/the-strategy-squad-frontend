import axios from "axios";

export const BASE_URL = "https://the-strategy-squad-backend.onrender.com";

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const requestSignUp = async (formData) => {
  const { data } = await instance.post("/api/users/register", formData);

  return data;
};
export const requestSignIn = async (formData) => {
  const { data } = await instance.post("/api/users/login", formData);
  setToken(data.token);
  return data;
};

export const requestGetCurrentUser = async () => {
  const { data } = await instance.get("/api/users/current");

  return data;
};

export const requestLogOut = async () => {
  const { data } = await instance.post("/api/users/logout");

  return data;
};

export const requestUpdate = async (body) => {
  const data = await instance.patch("/api/users/update", body);

  return data;
};

export const requestGoogleSignUp = async () => {
  const { data } = await instance.get("/api/auth/google");
  setToken(data.token);
};
