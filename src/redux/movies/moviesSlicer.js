import { createSlice } from "@reduxjs/toolkit";
import {
  getMoviesThunk,
  getMoviesbySearchThunk,
  getMovieDetailThunk,
  getSortedMoviesThunk,
  getMoviesGenreThunk,
  getfilteredMoviesbyGenreThunk,
  getSimilarMoviesThunk,
  rateMovieThunk,
} from "./moviesThunk";

const initialState = {
  isLoading: false,
  data: {},
  error: undefined,
  genreList: {},
  movieDetail: {},
  similarMovies: {},
  rateStatus: {},
};

const moviesSlicer = createSlice({
  name: "moviesSlicer",
  initialState: initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMoviesThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getMoviesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getMoviesbySearchThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMoviesbySearchThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getMoviesbySearchThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getMovieDetailThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovieDetailThunk.fulfilled, (state, action) => {
        state.movieDetail = action.payload;
        state.isLoading = false;
      })
      .addCase(getMovieDetailThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getSortedMoviesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSortedMoviesThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getSortedMoviesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getMoviesGenreThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMoviesGenreThunk.fulfilled, (state, action) => {
        state.genreList = action.payload;
        state.isLoading = false;
      })
      .addCase(getMoviesGenreThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getfilteredMoviesbyGenreThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getfilteredMoviesbyGenreThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getfilteredMoviesbyGenreThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getSimilarMoviesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSimilarMoviesThunk.fulfilled, (state, action) => {
        state.similarMovies = action.payload;
        state.isLoading = false;
      })
      .addCase(getSimilarMoviesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(rateMovieThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(rateMovieThunk.fulfilled, (state, action) => {
        state.rateStatus = action.payload;
        state.isLoading = false;
      })
      .addCase(rateMovieThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const moviesReducer = moviesSlicer.reducer;
