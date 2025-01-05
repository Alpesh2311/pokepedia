import React from "react";
import "./Pagination.css";

function Pagination({ nextPage, previousPage, disableNextPage, disablePreviousPage, more }) {
  return (
    <div className={`pagination ${more ? "blur" : ""}`}>
      <button className="btn previous" disabled={disablePreviousPage == null} onClick={previousPage}>
        Previous
      </button>
      <button className=" btn next" disabled={disableNextPage == null} onClick={nextPage}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
