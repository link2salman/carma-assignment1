import React from "react";
import ListItem from "../listItem/ListItem";
import Loader from "../loader/Loader";
import "./movieList.scss";

const List = ({ movies, isLoading }) => {

  return (
    <div className="movie_list">
      {isLoading && <Loader />}
      {movies && movies.map((movie) => <ListItem movie={movie} key={movie.id}/>)}
    </div>
  );
};

export default List;
