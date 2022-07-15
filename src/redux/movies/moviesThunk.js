import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMovieDetail,
  getMovies,
  getMoviesbySearch,
  getSortedMovies,
  getfilteredMovies,
  getMoviesGenre,
  getfilteredMoviesbyGenre,
  getSimilarMovies,
  rateMovie,
} from "../../api/moviesApi";

export const getMoviesThunk = createAsyncThunk(
  "getMoviesThunk",
  async ({ page }) => {
    const { data } = await getMovies({ page });
    return data;
  }
);

export const getMoviesbySearchThunk = createAsyncThunk(
  "getmovies/bySearch",
  async ({ queryString, page }) => {
    const { data } = await getMoviesbySearch({ queryString, page });
    return data;
  }
);

export const getMovieDetailThunk = createAsyncThunk(
  "getmovie/detail",
  async ({ id }) => {
    const { data } = await getMovieDetail({ id });
    return data;
  }
);

export const getSortedMoviesThunk = createAsyncThunk(
  "getmovie/sorted",
  async ({ type, page }) => {
    const { data } = await getSortedMovies({ type, page });
    return data;
  }
);

export const getfilteredMoviesThunk = createAsyncThunk(
  "getmovie/filtered",
  async ({ type, page }) => {
    const { data } = await getfilteredMovies({ type, page });
    return data;
  }
);

export const getfilteredMoviesbyGenreThunk = createAsyncThunk(
  "getmoviesfilter/genre",
  async ({ page, id }) => {
    const { data } = await getfilteredMoviesbyGenre({ page, id });
    return data;
  }
);

export const getMoviesGenreThunk = createAsyncThunk(
  "getmovies/genre",
  async () => {
    const { data } = await getMoviesGenre();
    return data;
  }
);

export const getSimilarMoviesThunk = createAsyncThunk(
  "getmovies/similar",
  async ({ id, page }) => {
    const { data } = await getSimilarMovies({ id, page });
    return data;
  }
);

export const rateMovieThunk = createAsyncThunk(
  "rate/movie",
  async ({ id, rating, sessionID }) => {
    const { data } = await rateMovie({ id, rating, sessionID });
    return data;
  }
);
