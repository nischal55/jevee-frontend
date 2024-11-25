import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const fakeApiResponse = {
        id: 1,
        name: "Rohan karki",
        email: "reeyaskarki@gmail.com",
        role: "admin",
      };
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return fakeApiResponse;
    } catch (error) {
      return rejectWithValue("Failed to login");
    }
  }
);

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
