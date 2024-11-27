import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import authReducer from "./Slice/authSlice";
import cartReducer from "./Slice/cartSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    auth:authReducer,
    cart: cartReducer
  },
});