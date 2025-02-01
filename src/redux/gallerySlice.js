import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the API URL
const API_URL = "http://localhost:5000/gallery";

// Create async thunk to fetch courses
export const fetchGallery = createAsyncThunk(
  "gallery/fetchGallery",
  async () => {
    try {
      console.log("Fetching gallery from:", API_URL); // ✅ Debug API URL
      const response = await axios.get(API_URL);
      console.log("API Response:", response.data); // ✅ Debugging API Response
      return response.data.data;
    } catch (error) {
      console.error("Fetch Courses Error:", error); // ✅ Debugging error
      throw error;
    }
  }
);

// **5️⃣ Course Slice**
const gallerySlice = createSlice({
  name: "galleries",
  initialState: {
    galleries: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGallery.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGallery.fulfilled, (state, action) => {
        state.loading = false;
        state.galleries = action.payload;
      })
      .addCase(fetchGallery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default gallerySlice.reducer; // Export the reducer to use in the store
