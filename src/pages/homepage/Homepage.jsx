import React from "react";
import { useSelector } from "react-redux";
import List from "../../components/list/List";
import Pagination from "../../pagination/Pagination";
import "./homePage.scss";

const Homepage = ({ setCurrentPage, currentPage, sortQuery, setSortQuery }) => {
  const siblingCount = 1;
  const { isLoading, data, error } = useSelector((state) => state.movies);
  const { total_results, results } = data || {};

  const popularitysortHandler = (e) => {
    setSortQuery(e.target.value);
  };
  const titlesortHandler = (e) => {
    setSortQuery(e.target.value);
  };

  return (
    <div className="home_page">
      <div className="sort_movie_div">
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
      </div>
      <div className="movies_list_container">
        <List isLoading={isLoading} movies={results} error={error} />
      </div>

      <div className="pagination">
        <Pagination
          setCurrentPage={setCurrentPage}
          totalCount={total_results}
          siblingCount={siblingCount}
          currentPage={currentPage}
          pageSize={20}
        />
      </div>
    </div>
  );
};

export default Homepage;
