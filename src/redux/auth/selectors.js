export const selectUserData = (state) => state.auth.userData;
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefresh = (state) => state.auth.isRefresh;
export const selectLoading = (state) => state.auth.loading;
export const selectError = (state) => state.auth.error;
