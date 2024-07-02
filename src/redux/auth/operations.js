import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestSignUp,
  requestSignIn,
  requestGetCurrentUser,
  requestLogOut,
  setToken,
  requestUpdate,
  requestRefreshToken,
  clearToken,
  instance,

} from "../../services/authApi.js";
import { toast } from "react-toastify";
import axios from "axios";

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
  "auth/refreshing",
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



export const apiRefreshToken = createAsyncThunk(
  "user/refreshing",
  async (_, thunkAPI) => {
    try {
      const data = await requestRefreshToken();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);




export const setUpAxiosInterceptors = (store) => {
  console.log(axios.interceptors.request)
  instance.interceptors.request.use((config) => {
    const state = store.getState();
    console.log(state)
    const token = state.auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      console.log("djjdn")
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const { data } = await store.dispatch(apiRefreshToken());
          setToken(data.token);
          originalRequest.headers.Authorization = `Bearer ${data.token}`;
          return axios(originalRequest);
        } catch (refreshError) {
          store.dispatch(apiLogoutUser());
          clearToken();
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
};

// export const setUpAxiosInterceptors = (store) => {
//   axios.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       const originalRequest = error.config;
//       if (error.response.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;
//         try {
//           const { refreshToken } = store.getState().auth;
//           const { data } = await axios.post('/api/users/refreshing', { refreshToken });

//           setToken(data.token);
//           store.dispatch(setToken({ token: data.token, refreshToken: data.refreshToken }));
//           originalRequest.headers.Authorization = `Bearer ${data.token}`;
//           return axios(originalRequest);
//         } catch (err) {
//           return Promise.reject(err);
//         }
//       }
//       return Promise.reject(error);
//     }
//   );
// };
