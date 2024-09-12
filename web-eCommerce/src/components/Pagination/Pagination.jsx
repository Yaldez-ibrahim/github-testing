import React from 'react'
import './Pagination.css'

function Pagination(props) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(props.totalProducts / props.productsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => props.paginate(number)}
            className={`page-item ${props.currentPage === number ? 'active' : ''}`}
          >
            {number}
          </button>
        ))}
        <button 
          onClick={() => props.paginate(props.currentPage + 1)} 
          className="page-item"
          disabled={props.currentPage === pageNumbers.length}
        >
          Next
        </button>
      </div>
    );
  }

export default Pagination