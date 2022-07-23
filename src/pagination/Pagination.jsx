import React from "react";
import { usePagination } from "../utils/usePagination";
import "./pagination.scss";
import prev from "../static/prev.png";
import nxt from "../static/nxt.png";

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
        <img src={prev} alt="" />
      </button>
      {pagesCount &&
        pagesCount.map((elem, idx) => (
          <button
            className={`btn btns ${currentPage === elem ? "active" : ""}`}
            key={idx}
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
        <img src={nxt} alt="" />
      </button>
    </div>
  );
};

export default Pagination;
