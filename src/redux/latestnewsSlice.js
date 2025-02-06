import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "http://localhost:5000/api/latestnews";

export const fetchLatestNews = createAsyncThunk(
  "latestnews/fetchLatestNews",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data.data || [];
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch Latest News"
      );
    }
  }
);

// **Latest News Slice........................
const latestNewsSlice = createSlice({
  name: "latestNews",
  initialState: {
    newsList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLatestNews.fulfilled, (state, action) => {
        state.loading = false;
        state.newsList = action.payload || [];
      })
      .addCase(fetchLatestNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default latestNewsSlice.reducer;
