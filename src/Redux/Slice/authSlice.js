import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios";
const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
};

export const login = createAsyncThunk("auth/login", async (formData) => {

  console.log({ formData });
  const res = await api.post(`/api/user/login`, formData, {
    withCredentials: true,
  });

  return res.data;
});
export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  const res = await api.get(`/api/user/checktoken`, {
    withCredentials: true,
  });
  console.log(res.data)
  return res.data;
})
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload || "An error occurred";
      });
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
