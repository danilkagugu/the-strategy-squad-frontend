import { instance } from "./authApi";

export const getCustomers = async () => {
  const { data } = await instance.get("/api/customers");
  return data;
};
