import React, { useEffect } from "react";
import SearchMovie from "../search/SearchMovie";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSortedMoviesThunk } from "../../redux/movies/moviesThunk";
import "./navBar.scss";

const Navbar = ({
  setQueryString,
  currentPage,
  sortQuery,
  setSortQuery,
  setGenreId,
  setFilterQuery,
}) => {
  const location = useLocation();
  const isShow = location.pathname?.indexOf("detail") === -1;

  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.movies.genreList);

  const popularitysortHandler = (e) => {
    setSortQuery(e.target.value);
  };
  const titlesortHandler = (e) => {
    setSortQuery(e.target.value);
  };

  useEffect(() => {
    if (sortQuery) {
      setFilterQuery("");
      dispatch(getSortedMoviesThunk({ type: sortQuery, page: currentPage }));
    }
  }, [sortQuery]);

  return (
    <div className="navbar">
      <div className="nav_main_links">
        <Link to="/" className="nav_home_link">
          Home
        </Link>
        {isShow && (
          <>
            <SearchMovie setQueryString={setQueryString} />
            <div className="sort_movies_types">
              <select
                className="sort_by_popularity"
                value={sortQuery}
                onChange={popularitysortHandler}
              >
                <option value="">Sort by Popularity</option>
                <option value="popularity.asc"> Ascending</option>
                <option value="popularity.desc"> Descending</option>
              </select>
              <select
                className="sort_by_title"
                value={sortQuery}
                onChange={titlesortHandler}
              >
                <option value="">Sort by Title</option>
                <option value="title.asc"> Ascending</option>
                <option value="title.desc"> Descending</option>
              </select>
            </div>
          </>
        )}
      </div>
      {isShow && (
        <div className="movie_genre_list">
          {genres &&
            genres.map((type) => (
              <button
                className="movie_genre_list_button"
                key={type?.id}
                onClick={() => setGenreId(type.id)}
              >
                {type.name}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
