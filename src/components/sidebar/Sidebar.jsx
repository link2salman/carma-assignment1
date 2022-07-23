import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSortedMoviesThunk } from "../../redux/movies/moviesThunk";
import "./sidebar.scss";

const Sidebar = ({ currentPage, sortQuery, setGenreId, setQueryString }) => {
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.movies.genreList);

  useEffect(() => {
    if (sortQuery) {
      setGenreId("");
      setQueryString("");
      dispatch(getSortedMoviesThunk({ type: sortQuery, page: currentPage }));
    }
  }, [sortQuery, currentPage]);

  return (
    <aside className="sidebar">
      <span className="sidebar_filter_head">Filter By Genre</span>
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
    </aside>
  );
};

export default Sidebar;
