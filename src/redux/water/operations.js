import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createWaterRecord,
  recordsPerDay,
  recordsPerMonth,
  removeWaterRecord,
  updateWaterRecord,
} from "../../services/waterApi";

export const getWaterPerDay = createAsyncThunk(
  "water/perDay",
  async (_, thunkAPI) => {
    try {
      const response = await recordsPerDay();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getWaterPerMonth = createAsyncThunk(
  "water/perMonth",
  async (_, thunkAPI) => {
    try {
      const response = await recordsPerMonth();
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
  async ({ id, body }, thunkAPI) => {
    try {
      const response = await updateWaterRecord(id, body);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
