import React from 'react';

const Pagination = ({ currentGroup, totalPages, prevPage, nextPage }) => {
  return (
    <div className="pagination">
      {currentGroup > 1 && (
        <button className="pagination button" onClick={prevPage}>
          Anterior
        </button>
      )}

      {currentGroup < totalPages && (
        <button className="pagination button" onClick={nextPage}>
          Siguiente
        </button>
      )}
    </div>
  );
};

export default Pagination;