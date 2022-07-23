import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import placeholderImage from "../../static/alt.jpg";
import "./detailPage.scss";
import { useState } from "react";
import {
  getMovieDetailThunk,
  getSimilarMoviesThunk,
  rateMovieThunk,
} from "../../redux/movies/moviesThunk";
import Loader from "../../components/loader/Loader";
import ReactStars from "react-stars";
import { LanguageCodes } from "../../utils/helper";
export const baseURL = "https://image.tmdb.org/t/p/w500/";

const Detailpage = ({ currentPage, movieDetail, isLoading }) => {
  const { id } = useParams();
  const [star, setStar] = useState(null);
  const dispatch = useDispatch();
  const { similarMovies, rateStatus } = useSelector((state) => state.movies);
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

  const ratingChanged = (value) => {
    setStar(value);
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
                  : placeholderImage
              }
              alt=""
            />
            <div className="movie_description">
              <img
                className="movie_description_poster"
                src={
                  movieDetail.backdrop_path
                    ? `${baseURL}${movieDetail.poster_path}`
                    : placeholderImage
                }
                alt=""
              />
              <div className="main_description">
                <div className="movie_title">{movieDetail?.original_title}</div>
                <div className="movie_release_date">
                  <span className="description_title">Release Date:</span>{" "}
                  &nbsp;({movieDetail?.release_date})
                </div>
                <div className="movie_rating_form">
                  <div className="movie_rating">
                    <ReactStars
                      count={10}
                      value={movieDetail?.vote_average}
                      onChange={ratingChanged}
                      size={20}
                      className="rating_stars"
                      color2={"#ffd700"}
                    />
                  </div>
                </div>
                <div className="sub_desciption">
                  <div>
                    <div className="movie_language">
                      <span className="description_title">Language</span>
                      <span className="description_data">
                        {" "}
                        {LanguageCodes[movieDetail?.original_language]}
                      </span>
                    </div>
                    <div className="movie_runtime">
                      <span className="description_title">Runtime</span>
                      <span className="description_data">
                        {" "}
                        {movieDetail?.runtime}
                      </span>
                    </div>
                    <div className="movie_popularity">
                      <span className="description_title">Popularity</span>
                      <span className="description_data">
                        {" "}
                        {movieDetail?.popularity}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="movie_revenue">
                      <span className="description_title">Revenue</span>{" "}
                      <span className="description_data">
                        {" "}
                        {movieDetail?.revenue}
                      </span>
                    </div>
                    <div className="movie_vote_count">
                      <span className="description_title">Votes</span>
                      <span className="description_data">
                        {" "}
                        {movieDetail?.vote_count}
                      </span>
                    </div>
                    <div className="movie_producers">
                      <span className="description_title">Producers</span>

                      {movieDetail?.production_companies?.map((x, idx) => (
                        <span className="description_data" key={`id-${idx}`}>
                          {x.name}
                          {idx < movieDetail?.production_companies.length - 1
                            ? " , "
                            : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="movie_overview">
                  <span className="description_title">Overview</span>
                  <span className="description_data">
                    {movieDetail?.overview}
                  </span>
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
        {simlirM?.map((movie, idx) => (
          <div className="similar_movies" key={`id-${idx}`}>
            <Link to={`/detail/${movie.id}`}>
              <img
                src={`${baseURL}${movie.poster_path}`}
                alt=""
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
