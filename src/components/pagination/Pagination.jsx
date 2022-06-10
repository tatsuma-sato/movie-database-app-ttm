import React from "react";
import { useGlobalContext } from "../../context/context";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Pagination = () => {
  const { page, setPage, prevPage, nextPage, handlePage } = useGlobalContext();

  return (
    <div>
      <button onClick={prevPage}>&lt;Prev</button>
      {arr.map((_, index) => {
        return (
          <button key={index} onClick={() => handlePage(index + 1)}>
            {index + 1}
          </button>
        );
      })}
      <button onClick={nextPage}>&gt;Next</button>
    </div>
  );
};

export default Pagination;
