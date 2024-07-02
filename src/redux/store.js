import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { waterReducer } from "./water/slice";
import { setUpAxiosInterceptors } from "./auth/operations";

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "refreshToken"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    water: waterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

setUpAxiosInterceptors(store);

export const persistor = persistStore(store);
