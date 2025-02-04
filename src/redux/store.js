import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice"; // Import the courseSlice reducer
import galleryReducer from "./gallerySlice";
import slidersectionReducer from "./slidersectionSlice";
export const store = configureStore({
  reducer: {
    courses: courseReducer, // Adding courseReducer to the Redux store
    galleries: galleryReducer,
    sliders: slidersectionReducer,
  },
});

export default store;
