import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestSignUp,
  requestSignIn,
  requestGetCurrentUser,
  requestLogOut,
  setToken,
  requestUpdate,
} from "../../services/authApi.js";

export const apiRegisterUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignUp(formData);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignIn(formData);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setToken(token);
    try {
      const data = await requestGetCurrentUser();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiLogoutUser = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await requestLogOut();
            setToken(null);
            return;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
  }
);

export const apiUpdateUser = createAsyncThunk(
  "user/update",
  async (body, thunkAPI) => {
    try {
      const response = await requestUpdate(body);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "user/info",
  async (_, thunkAPI) => {
    try {
      const response = await requestGetCurrentUser();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
