import React from "react";
import { CarT } from "../../utils/types/CarTypes";
import { PaginationType } from "../../utils/types/PaginationTypes";

function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: PaginationType) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const showPrevious = currentPage > 1;
  const showNext = currentPage < pageNumbers.length;

  return (
    <div className="space-x-2">
      <button onClick={() => paginate(1)}>&lt;&lt;</button>
      {currentPage !== 1 && (
        <button onClick={() => paginate(currentPage - 1)}>prev</button>
      )}
      {showPrevious && (
        <>
          <button
            onClick={() => paginate(currentPage - 1)}
            className="text-gray-800"
          >
            {currentPage - 1}
          </button>
        </>
      )}
      <button className="active text-gray-300">{currentPage}</button>
      {showNext && (
        <>
          <button
            onClick={() => paginate(currentPage + 1)}
            className="text-gray-800"
          >
            {currentPage + 1}
          </button>
        </>
      )}
      {currentPage !== pageNumbers.length && (
        <button onClick={() => paginate(currentPage + 1)}>next</button>
      )}
      <button onClick={() => paginate(pageNumbers.length)}>&gt;&gt;</button>
    </div>
  );
}

export default Pagination;
