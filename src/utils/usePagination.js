import { range } from "./helper";
import { useMemo } from "react";

export const Ellipsis = "...";

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount,
  currentPage,
}) => {
  const pagesCount = useMemo(() => {
    const totalPages = Math.ceil(totalCount / pageSize);
    const minimumPages = siblingCount + 5;

    if (minimumPages >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
    const isLeftEllipsis = leftSiblingIndex > 2;
    const isRightEllipsis = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!isLeftEllipsis && isRightEllipsis) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, Ellipsis, totalPages];
    }

    if (isLeftEllipsis && !isRightEllipsis) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPages - rightItemCount + 1, totalPages);

      return [firstPageIndex, Ellipsis, ...rightRange];
    }

    if (isLeftEllipsis && isRightEllipsis) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [
        firstPageIndex,
        Ellipsis,
        ...middleRange,
        Ellipsis,
        lastPageIndex,
      ];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return pagesCount;
};
