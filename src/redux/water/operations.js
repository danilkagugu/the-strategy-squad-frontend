import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createWaterRecord,
  recordsPerDay,
  recordsPerMonth,
  removeWaterRecord,
  updateWaterRecord,
} from "../../services/waterApi";

import { toast } from "react-toastify";

export const getWaterPerDay = createAsyncThunk(
  "water/perDay",
  async (query, thunkAPI) => {
    try {
      const response = await recordsPerDay(query);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getWaterPerMonth = createAsyncThunk(
  "water/perMonth",
  async (query, thunkAPI) => {
    try {
      const response = await recordsPerMonth(query);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addWaterRecord = createAsyncThunk(
  "water/addRecord",
  async (body, thunkAPI) => {
    try {
      const response = await createWaterRecord(body);
      return response.data;
    } catch (e) {
      toast.error(e.message || "Something went wrong");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteWaterRecord = createAsyncThunk(
  "water/deleteRecord",
  async (id, thunkAPI) => {
    try {
      const response = await removeWaterRecord(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editWaterRecord = createAsyncThunk(
  "water/editRecord",
  async (editData, thunkAPI) => {
    try {
      const response = await updateWaterRecord(editData);

      return response.data;
    } catch (e) {
      toast.error(e.message || "Something went wrong");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
