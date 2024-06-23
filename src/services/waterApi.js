import { instance } from "./authApi";
instance.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Nzg4YTJlYWQzZTBhM2VmMWQ2ZTJmNSIsImlhdCI6MTcxOTE3NTc0MCwiZXhwIjoxNzE5MjU4NTQwfQ.AcR1SObyYIyO5AOaEKlHwQbuvxbII74_73-TBPwF_LE`;

export const recordsPerDay = async (query) => {
  const params = {
    day: query,
  };
  const data = await instance.get("/water/day", { params });
  return data;
};

export const recordsPerMonth = async (query) => {
  const params = {
    month: query,
  };
  const data = await instance.get("/water/month", { params });
  return data;
};

export const createWaterRecord = async (body) => {
  const data = await instance.post("/water", body);
  return data;
};

export const removeWaterRecord = async (id) => {
  const data = await instance.delete(`/water/${id}`);
  return data;
};

export const updateWaterRecord = async (id, body) => {
  const data = await instance.delete(`/water/${id}`, body);
  return data;
};
