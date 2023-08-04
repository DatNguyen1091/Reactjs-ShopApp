import React, { useState } from 'react';

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
      <ul className="pagination" style={{position:"absolute", left:"222px", top:"120px"}}>
        <li className="page-item" style={{ border: '1px solid black'}}>
          <button type="button" className={`page-link ${currentPage === 1 ? 'disabled' : ''}`} 
            onClick={handlePrevPage}>
            Trước
          </button>
        </li>

        {pages.map((page) => (
          <li key={page} className="page-item" style={{ border: '1px solid black'}}>
            <button
              type="button"
              className={`page-link ${currentPage === page ? 'active' : ''}`}
              value={page}
              onClick={handlePageClick}>{page}
            </button>
          </li>
        ))}

        <li className="page-item" style={{ border: '1px solid black'}}>
          <button type="button" className={`page-link ${currentPage === totalPages ? 'disabled' : ''}`} 
            onClick={handleNextPage}>
            Sau
          </button>
        </li>
      </ul>
  );
};

export default Paging;