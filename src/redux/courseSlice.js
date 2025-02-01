import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the API URL
const API_URL = "http://localhost:5000/courses";

// Create async thunk to fetch courses
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    try {
      // console.log("Fetching courses from:", API_URL); // ✅ Debug API URL
      const response = await axios.get(API_URL);
      // console.log("API Responsefor Course:", response.data); // ✅ Debugging API Response
      return response.data.data;
    } catch (error) {
      // console.error("Fetch Courses Error:", error); // ✅ Debugging error
      throw error;
    }
  }
);

// Course slice to handle actions related to courses
const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [], // Will hold the fetched courses
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true; // Set loading to true when fetching
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when fetching is complete
        state.courses = action.payload; // Store the fetched courses in state
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle errors
      });
  },
});

export default courseSlice.reducer; // Export the reducer to use in the store
