import React from 'react';

export const Sidenav = () => {

  return (
    <div className="container-flut">
      <div className="row">
        <div className="col-md-2 bg-dark text-white" style={{ minHeight: '100vh' }}>
          <div className="list-group ">
          <h5 className="list-group-item list-group-item-action list-group-item-dark bg-danger text-white">Bảng điều khiển</h5>
            <a href="/admin/categories" className="list-group-item list-group-item-action list-group-item-dark">Danh mục sản phẩm</a>
            <a href="/admin/products" className="list-group-item list-group-item-action list-group-item-dark">Quản lý sản phẩm</a>
            <a href="/admin/accounts" className="list-group-item list-group-item-action list-group-item-dark">Quản lý tài khoảng</a>
            <a href="/admin/customers" className="list-group-item list-group-item-action list-group-item-dark">Khách hàng</a>
            <a href="/admin/carts" className="list-group-item list-group-item-action list-group-item-dark">Giỏ hàng</a>
            <a href="/admin/orders" className="list-group-item list-group-item-action list-group-item-dark">Đơn hàng</a>
            <a href="/admin/feedbacks" className="list-group-item list-group-item-action list-group-item-dark">Bình luận</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;