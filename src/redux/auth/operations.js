import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestSignUp,
  requestSignIn,
  requestGetCurrentUser,
  requestLogOut,
  setToken,
  requestUpdate,
} from "../../services/authApi.js";
import { toast } from "react-toastify";

export const apiRegisterUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignUp(formData);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignIn(formData);
      toast.success("You have successfully signed in");
      return data;
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logInWithGoogle = createAsyncThunk(
  "auth/googleLogin",
  async (formData, thunkAPI) => {
    try {
      // const data = await requestGoogleSignUp(formData);
      // toast.success(data.message);

      return { token: formData };
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

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
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await requestLogOut();
      setToken(null);
      return;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiUpdateUser = createAsyncThunk(
  "user/update",
  async (body, thunkAPI) => {
    try {
      const response = await requestUpdate(body);
      return response.data.user;
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
