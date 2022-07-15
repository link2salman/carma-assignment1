import React from "react";
import "./ListItem.scss";
import { baseURL } from "../../pages/detail/Detailpage";
import alt from "../../static/alt.jpg";

const ListItem = ({ movie }) => {
  return (
    <div className="movie_list_item">
      <img
      className="movie_list_item_poster"
        key={movie?.id}
        src={movie.poster_path ? `${baseURL}${movie?.poster_path}` : alt}
        alt=""
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default ListItem;
