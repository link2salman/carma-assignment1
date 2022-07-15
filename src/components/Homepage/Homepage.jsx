import React from "react";
import { useSelector } from "react-redux";
import List from "../../models/List/List";
import Pagination from "../../pagination/Pagination";
import Outlet from "../../utils/Outlet";
import Loader from "../loader/Loader";
import "./homePage.scss";

const Homepage = ({ setCurrentPage, currentPage }) => {
  const siblingCount = 1;
  const { isLoading, data, error } = useSelector((state) => state.movies);
  const { total_results, results } = data || {};

  return (
    <div className="home_page">
      {isLoading && <Loader />}
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
