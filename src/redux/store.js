import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice"; // Import the courseSlice reducer
import galleryReducer from "./gallerySlice";
import slidersectionReducer from "./slidersectionSlice";
import schoolnoteReducer from "./schoolnoteSlice";
import latestNewsReducer from "./latestnewsSlice";
export const store = configureStore({
  reducer: {
    courses: courseReducer, // Adding courseReducer to the Redux store
    galleries: galleryReducer,
    sliders: slidersectionReducer,
    schoolNote: schoolnoteReducer,
    latestNews: latestNewsReducer,
  },
});

export default store;
