import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import alt from "../../static/alt.jpg";
import "./detailPage.scss";
import { useState } from "react";
import {
  getMovieDetailThunk,
  getSimilarMoviesThunk,
  rateMovieThunk,
} from "../../redux/movies/moviesThunk";
import Loader from "../../components/loader/Loader";
export const baseURL = "https://image.tmdb.org/t/p/w500/";

const Detailpage = ({ currentPage, movieDetail, isLoading }) => {
  const { id } = useParams();
  const [star, setStar] = useState(null);
  const dispatch = useDispatch();
  const { similarMovies } = useSelector((state) => state.movies);
  const simlirM = similarMovies.results?.slice(0, 5);

  useEffect(() => {
    dispatch(
      rateMovieThunk({
        id,
        rating: star,
        sessionID: "e953b8b98213793ad747dcd0b64760ea",
      })
    );
  }, [star]);

  const movieRating = {
    value: movieDetail?.vote_average,
    size: 15,
    count: 10,
    color: "white",
    activeColor: "yellow",
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      setStar(newValue);
    },
  };

  useEffect(() => {
    if (id) {
      dispatch(getMovieDetailThunk({ id }));
      if (id && currentPage) {
        dispatch(getSimilarMoviesThunk({ id, currentPage }));
      }
    }
  }, [id]);

  return (
    <div className="page_detail">
      <div className="movie_detail">
        {movieDetail ? (
          <>
            <img
              className="movie_detail_poster"
              src={
                movieDetail.backdrop_path
                  ? `${baseURL}${movieDetail.backdrop_path}`
                  : alt
              }
              alt=""
            />
            <div className="movie_description">
              <div className="main_description">
                <div className="movie_title">{movieDetail?.original_title}</div>
                <div className="movie_release_date">
                  <span className="description_title">Release Date:</span>{" "}
                  &nbsp;({movieDetail?.release_date})
                </div>
                <div className="sub_desciption">
                  <div>
                    <div className="movie_language">
                      <span className="description_title">Language:</span>
                      &nbsp;&nbsp;
                      {movieDetail?.original_language}
                    </div>
                    <div className="movie_runtime">
                      <span className="description_title">Movie Duration:</span>
                      &nbsp;&nbsp; {movieDetail?.runtime}
                    </div>
                    <div className="movie_popularity">
                      <span className="description_title">Popularity:</span>
                      &nbsp;&nbsp;
                      {movieDetail?.popularity}
                    </div>
                  </div>
                  <div>
                    <div className="movie_revenue">
                      <span className="description_title">Revenue:</span>{" "}
                      &nbsp;&nbsp;{movieDetail?.revenue}
                    </div>
                    <div className="movie_vote_count">
                      <span className="description_title">Votes:</span>
                      &nbsp;&nbsp;{movieDetail?.vote_count}
                    </div>
                  </div>
                </div>

                <div className="movie_overview">
                  <span className="description_title">Overview: </span>
                  &nbsp;&nbsp;{movieDetail?.overview}
                </div>
              </div>
              <div className="movie_rating_form">
                <div className="movie_rating">
                  <ReactStars {...movieRating} />
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {isLoading && <Loader />}
      <div className="similar_Movies_text">Related Movies</div>
      <div className="similar_movies_main_div">
        {simlirM?.map((x) => (
          <div className="similar_movies">
            <Link to={`/detail/${x.id}`} key={x?.id}>
              <img
                src={`${baseURL}${x.poster_path}`}
                alt=""
                key={x?.id}
                className="similar_movie_poster"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detailpage;
