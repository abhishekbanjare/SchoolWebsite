import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice"; // Import the courseSlice reducer
import galleryReducer from "./gallerySlice";
export const store = configureStore({
  reducer: {
    courses: courseReducer, // Adding courseReducer to the Redux store
    galleries: galleryReducer,

  },
});

export default store;
