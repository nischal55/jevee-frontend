import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios";
const initialState = {
  banners: [],
  isLoading: false,
  error: null,
};

export const getAllBanners = createAsyncThunk(
  "banner/getAllBanners",
  async () => {
    const res = await api.get("api/inventory/getallmainbanner");
    return res.data;
  }
);
export const createMainBanner = createAsyncThunk(
  "banner/createMainBanner",
  async (formData) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await api.post("api/inventory/createmainbanner", formData, config);
    return res.data;
  }
);


const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBanners.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllBanners.fulfilled, (state, action) => {
        state.isLoading = false;
        state.banners = action.payload.success ? action.payload.data : [];
      })
      .addCase(getAllBanners.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }).addCase(createMainBanner.pending, (state) => {
        state.isLoading = true;
      }).addCase(createMainBanner.fulfilled, (state, action) => {
        state.isLoading = false;
      }).addCase(createMainBanner.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
})
// export const { setReduxUserlogout } = userSlice.actions;

export default bannerSlice.reducer;
