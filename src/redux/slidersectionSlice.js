import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the API URL
const API_URL = "http://localhost:5000/api/banner";

// Create async thunk to fetch courses
export const fetchSlider = createAsyncThunk(
  "api/banner/fetchSlider",
  async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

// Slider slice to handle actions related to slider
const slidersectionSlice = createSlice({
  name: "sliders",
  initialState: {
    sliders: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlider.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSlider.fulfilled, (state, action) => {
        state.loading = false;
        state.sliders = action.payload;
      })
      .addCase(fetchSlider.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default slidersectionSlice.reducer;
