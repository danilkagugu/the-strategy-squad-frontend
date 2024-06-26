import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    requestSignUp,
    requestSignIn,
    requestGetCurrentUser,
    requestLogOut,
    setToken,
} from "../../services/authApi.js";
import { toast } from 'react-toastify';

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

            return;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);