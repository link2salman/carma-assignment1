import React from "react";
import { usePagination } from "../utils/usePagination";
import "./pagination.scss";

const Pagination = (props) => {
  const {
    setCurrentPage,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  let islast = currentPage === Math.ceil(totalCount / pageSize);
  let isfirst = currentPage === 1;

  const pagesCount = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || pagesCount?.length < 2) {
    return null;
  }

  const onNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const onPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="pagination">
      <button
        className={`btn previous ${isfirst ? "disabled" : ""}`}
        onClick={onPrevious}
        disabled={isfirst}
      >
        Previous
      </button>
      {pagesCount &&
        pagesCount.map((elem) => (
          <button
            className={`btn btns ${currentPage === elem ? "active" : ""}`}
            key={elem}
            disabled={currentPage === elem || typeof elem !== "number"}
            onClick={() => setCurrentPage(elem)}
          >
            {elem}
          </button>
        ))}

      <button
        className={`btn next ${islast ? "disabled" : ""}`}
        onClick={onNext}
        disabled={islast}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
