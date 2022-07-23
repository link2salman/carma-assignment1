import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  const [queryString, setQueryString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortQuery, setSortQuery] = useState("");
  const [genreid, setGenreId] = useState("");
  const { movieDetail, isLoading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const location = useLocation();
  const isShow = location.pathname?.indexOf("detail") === -1;

  useEffect(() => {
    if (queryString) {
      setGenreId("");
      setSortQuery("");
      dispatch(getMoviesbySearchThunk({ queryString, page: currentPage }));
    } else {
      if (!sortQuery && !genreid)
        dispatch(getMoviesThunk({ page: currentPage }));
    }
  }, [queryString, currentPage]);

  useEffect(() => {
    dispatch(getMoviesGenreThunk());
  }, []);

  useEffect(() => {
    if (genreid) {
      setSortQuery("");
      setQueryString("");
      dispatch(
        getfilteredMoviesbyGenreThunk({ page: currentPage, id: genreid })
      );
    }
  }, [genreid, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [genreid, queryString, sortQuery]);

  return (
    <div className="movie_app">
      <Navbar setQueryString={setQueryString} />
      <div className="maincontainer">
        {isShow && (
          <Sidebar
            currentPage={currentPage}
            sortQuery={sortQuery}
            setSortQuery={setSortQuery}
            setGenreId={setGenreId}
            setQueryString={setQueryString}
          />
        )}
        <div className="maindiv">
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  sortQuery={sortQuery}
                  setSortQuery={setSortQuery}
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
      </div>
    </div>
  );
};

export default App;
