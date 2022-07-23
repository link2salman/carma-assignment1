import { Api } from "./index";

export const getMovies = ({ page }) => {
  const request = Api.get(`/discover/movie`, {
    params: { page: page, api_key: process.env.REACT_APP_API_KEY },
  });
  return request;
};

export const getMoviesbySearch = ({ queryString, page }) => {
  const request = Api.get(`/search/movie`, {
    params: {
      query: queryString,
      api_key: process.env.REACT_APP_API_KEY,
      page: page,
    },
  });
  return request;
};

export const getMovieDetail = ({ id }) => {
  const request = Api.get(`/movie/${id}`, {
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return request;
};

export const getSortedMovies = ({ type, page }) => {
  const request = Api.get(`/discover/movie`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      sort_by: type,
      page: page,
    },
  });
  return request;
};

export const getfilteredMovies = ({ type, page }) => {
  const request = Api.get(`/discover/movie`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      sort_by: type,
      page: page,
    },
  });
  return request;
};

export const getMoviesGenre = () => {
  const request = Api.get(`/genre/movie/list`, {
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return request;
};

export const getfilteredMoviesbyGenre = ({ id, page }) => {
  const request = Api.get(`/discover/movie`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      with_genres: id,
      page: page,
    },
  });
  return request;
};

export const getSimilarMovies = ({ id, page }) => {
  const request = Api.get(`/movie/${id}/similar`, {
    params: { api_key: process.env.REACT_APP_API_KEY, page: page },
  });
  return request;
};

export const rateMovie = ({ id, rating, sessionID }) => {
  if (rating) {
    const request = Api.post(
      `/movie/${id}/rating?api_key=${process.env.REACT_APP_API_KEY}&guest_session_id=${sessionID}&value=${rating}`
    );
    return request;
  }
};
