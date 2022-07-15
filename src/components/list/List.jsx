import React from "react";
import { Link } from "react-router-dom";
import ListItem from "../listItem/ListItem";
import "./movieList.scss";

const List = ({ movies }) => {
  return (
    <div className="movie_list">
      {movies &&
        movies.map((movie) => (
          <Link
            to={`/detail/${movie.id}`}
            key={movie?.id}
            className="link_detail_list_item"
          >
            <ListItem movie={movie} />
          </Link>
        ))}
    </div>
  );
};

export default List;
