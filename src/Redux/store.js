import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import authReducer from "./Slice/authSlice";
import cartReducer from "./Slice/cartSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { version } from "react";
const persistConfig = {
  key: "auth",
  storage, 
  version:1
};
const presistedAuthReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
  reducer: {
    user: userReducer,
    auth:presistedAuthReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], 
      },
    }),
});
export const persistor = persistStore(store);
export default store;