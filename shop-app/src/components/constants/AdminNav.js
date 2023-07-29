import React from 'react';

export const AdminNav = () => {

  return (
    <ul className="nav nav-pills" role="tablist">
        <li className="nav-item">
            <a className="nav-link" href="/">Trang chủ</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/admin/category">Danh mục</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/admin/productsList">Sản phẩm</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/admin/order">Đơn hàng</a>
        </li>
    </ul>
  );
};

export default AdminNav;

