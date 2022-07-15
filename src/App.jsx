import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./app.scss";
import Detailpage from "./pages/detail/Detailpage";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./components/header/Navbar";
import {
  getfilteredMoviesbyGenreThunk,
  getMoviesbySearchThunk,
  getMoviesThunk,
  getMoviesGenreThunk,
} from "./redux/movies/moviesThunk";

const App = () => {
  const [queryString, setQueryString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterQuery, setFilterQuery] = useState("");
  const [sortQuery, setSortQuery] = useState("");
  const [genreid, setGenreId] = useState("");
  const { movieDetail, isLoading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (queryString) {
      setGenreId("");
      dispatch(getMoviesbySearchThunk({ queryString, page: currentPage }));
    } else {
      if (!filterQuery && !sortQuery && !genreid)
        dispatch(getMoviesThunk({ page: currentPage }));
    }
  }, [queryString, currentPage]);

  useEffect(() => {
    dispatch(getMoviesGenreThunk());
  }, []);
  
  useEffect(() => {
    if (genreid) {
      setFilterQuery("");
      dispatch(
        getfilteredMoviesbyGenreThunk({ page: currentPage, id: genreid })
      );
    }
  }, [genreid, currentPage]);

  return (
    <div className="movie_app">
      <Navbar
        setQueryString={setQueryString}
        currentPage={currentPage}
        filterQuery={filterQuery}
        setFilterQuery={setFilterQuery}
        sortQuery={sortQuery}
        setSortQuery={setSortQuery}
        setGenreId={setGenreId}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={
            <Detailpage
              currentPage={currentPage}
              movieDetail={movieDetail}
              isLoading={isLoading}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
