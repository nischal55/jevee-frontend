import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import authReducer from "./Slice/authSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    auth:authReducer
  },
});