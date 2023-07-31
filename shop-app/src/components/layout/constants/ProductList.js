import React from 'react';

const ProductList = () => {
  return (
    <section className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Sản Phẩm <span>Của chúng tôi</span>
          </h2>
        </div>
        <div className="row">
          {/* Thêm các thành phần sản phẩm ở đây */}
        </div>
        <div className="btn-box">
          <a href="/products">Xem tất cả sản phẩm</a>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
