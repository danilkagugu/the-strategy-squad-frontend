import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:3030",
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
