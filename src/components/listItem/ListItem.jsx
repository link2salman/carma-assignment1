import React from "react";
import "./ListItem.scss";
import { baseURL } from "../../pages/detail/Detailpage";
import alt from "../../static/alt.jpg";
import { Link } from "react-router-dom";

const ListItem = ({ movie }) => {
  
  return (
    <div className="movie_list_item">
      <Link
        to={`/detail/${movie.id}`}
        key={movie?.id}
        className="link_detail_list_item"
        style={{ width: "100%" }}
      >
        <img
          className="movie_list_item_poster"
          key={movie?.id}
          src={movie.poster_path ? `${baseURL}${movie?.poster_path}` : alt}
          alt=""
        />
      </Link>
    </div>
  );
};

export default ListItem;
