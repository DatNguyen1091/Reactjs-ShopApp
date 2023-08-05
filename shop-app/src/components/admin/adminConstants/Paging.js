import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const Paging = () => {

  // Sử dụng useState để lưu trữ trang hiện tại
  const [currentPage, setCurrentPage] = useState(1);
  
  // Hàm xử lý khi nhấn nút trang sau
  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  // Hàm xử lý khi nhấn nút trang trước
  const handlePrevPage = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
  };

  // Hàm xử lý khi nhấn nút trang cụ thể
  const handlePageClick = (event) => {
    const pageValue = parseInt(event.target.value, 10);
    setCurrentPage(pageValue);
  };

  // Tạo một mảng các trang cho phân trang 
  const totalPages = 5;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  //////////////////////////////////
  return (
      <ul className="pagination" style={{position:"absolute", left:"252px", top:"120px"}}>
        <li className="page-item" style={{ border: '1px solid black'}}>

          <Link to={`/admin/products/${currentPage - 1}`}>
            <button type="button" className={`page-link ${currentPage === 1 ? 'disabled' : ''}`} 
              onClick={handlePrevPage}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
            </button>
          </Link>
        </li>

        {pages.map((page) => (
          <li key={page} className="page-item" style={{ border: '1px solid black'}}>
          <Link to={`/admin/products/${page}`}>
            <button
              type="button"
              className={`page-link ${currentPage === page ? 'active' : ''}`}
              value={page}
              onClick={handlePageClick}
              >{page}
            </button>
            </Link>
          </li>
        ))}

        <li className="page-item" style={{ border: '1px solid black'}}>
          <Link to={`/admin/products/${currentPage + 1}`}>
            <button type="button" className={`page-link ${currentPage === totalPages ? 'disabled' : ''}`} 
              onClick={handleNextPage}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </button>
          </Link>
        </li>
      </ul>
  );
};

export default Paging;