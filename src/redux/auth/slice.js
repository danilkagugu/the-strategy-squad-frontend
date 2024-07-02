import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  apiRegisterUser,
  apiLoginUser,
  apiRefreshUser,
  apiLogoutUser,
  apiUpdateUser,
  getUserInfo,
  logInWithGoogle,

} from "./operations";


const INITIAL_STATE = {
  userData: null,
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefresh: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,

  extraReducers: (builder) =>
    builder
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(logInWithGoogle.fulfilled, (state, action) => {
        console.log(action)
        state.loading = false;
        // state.userData = action.payload.user;
        state.token = action.payload.token;

      })

      .addCase(apiLogoutUser.fulfilled, () => {
        return INITIAL_STATE;
      })

      .addCase(apiRefreshUser.pending, (state) => {
        state.isRefresh = true;
        state.error = false;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isRefresh = false;
        state.userData = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(apiRefreshUser.rejected, (state) => {
        state.isRefresh = false;
        state.error = true;
      })

      .addCase(apiUpdateUser.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.loading = false;
      })

      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.loading = false;
      })

      .addMatcher(
        isAnyOf(
          apiRegisterUser.pending,
          apiLoginUser.pending,
          apiLogoutUser.pending,
          apiUpdateUser.pending,
          getUserInfo.pending
        ),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          apiRegisterUser.rejected,
          apiLoginUser.rejected,
          apiLogoutUser.rejected,
          apiUpdateUser.rejected,
          getUserInfo.rejected
        ),
        (state) => {
          state.loading = false;
          state.error = true;
        }
      ),
});

export const authReducer = authSlice.reducer;
