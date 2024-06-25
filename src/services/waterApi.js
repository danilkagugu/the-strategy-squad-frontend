import { instance } from "./authApi";

export const recordsPerDay = async (query) => {
  const params = {
    day: query,
  };
  const data = await instance.get("/api/water/day", { params });
  return data;
};

export const recordsPerMonth = async (query) => {
  const params = {
    month: query,
  };
  const data = await instance.get("/api/water/month", { params });
  return data;
};

export const createWaterRecord = async (body) => {
  const data = await instance.post("/api/water", body);
  return data;
};

export const removeWaterRecord = async (id) => {
  const data = await instance.delete(`/api/water/${id}`);
  return data;
};

export const updateWaterRecord = async (id, body) => {
  const data = await instance.put(`/api/water/${id}`, body);
  return data;
};
