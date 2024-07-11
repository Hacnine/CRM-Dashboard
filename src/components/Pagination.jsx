import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Pagination = ({ totalEntries, entriesPerPage, paginate, setProductAmount, productAmount }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (page) => {
    setCurrentPage(page);
    paginate(page);
  };

  const increaseProductAmount = () => {
    setProductAmount(productAmount+10)
  }

  const decreaseProductAmount = () => {
    setProductAmount(productAmount-10)
  }

  const renderPageNumbers = () => {
    return pageNumbers.map((number) => {
      if (number === currentPage) {
        return (
          <li key={number} className="px-2 py-1 mx-1 border rounded bg-purple-500 text-white cursor-pointer" onClick={() => handleClick(number)}>
            {number}
          </li>
        );
      } else {
        return (
          <li key={number} className="px-2 py-1 mx-1 border rounded bg-gray-100 text-gray-700 cursor-pointer" onClick={() => handleClick(number)}>
            {number}
          </li>
        );
      }
    });
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <span className="text-gray-600">
        Showing data 1 to {entriesPerPage} of {totalEntries} entries
      </span>
      <ul className="flex items-center">
        <li className={`px-2 py-1 mx-1 border rounded ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-100 text-gray-700 cursor-pointer'}`} onClick={() => {handleClick(currentPage - 1), decreaseProductAmount()}}>
          <FiChevronLeft />
        </li>
        {/* {renderPageNumbers()} */}
        <li className={`px-2 py-1 mx-1 border rounded ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-100 text-gray-700 cursor-pointer'}`} onClick={() => {handleClick(currentPage + 1), increaseProductAmount()}}>
          <FiChevronRight />
        </li>
      </ul>
    </div>
  );
}

export default Pagination
