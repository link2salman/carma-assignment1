import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../redux/movies/moviesSlicer";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
