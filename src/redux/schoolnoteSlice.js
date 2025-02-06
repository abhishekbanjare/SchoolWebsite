import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "http://localhost:5000/api/schoolnote";

export const fetchSchoolNotes = createAsyncThunk(
  "schoolnote/fetchSchoolNotes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data.data || [];
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch school note"
      );
    }
  }
);

// **Latest News Slice........................
const schoolnoteSlice = createSlice({
  name: "schoolNote",
  initialState: {
    notesList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchoolNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSchoolNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notesList = action.payload || [];
      })
      .addCase(fetchSchoolNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default schoolnoteSlice.reducer;
