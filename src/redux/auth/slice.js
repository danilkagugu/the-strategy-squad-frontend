import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
    apiRegisterUser,
    apiLoginUser,
    apiRefreshUser,
    apiLogoutUser,
} from "./operations";


const INITIAL_STATE = {
    userData: null,
    token: null,
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
            .addCase(apiRegisterUser.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(apiLoginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
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

            .addMatcher(
                isAnyOf(
                    apiRegisterUser.pending,
                    apiLoginUser.pending,
                    apiLogoutUser.pending
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
                    apiLogoutUser.rejected
                ),
                (state) => {
                    state.loading = false;
                    state.error = true;
                }
            ),
});

export const authReducer = authSlice.reducer;
