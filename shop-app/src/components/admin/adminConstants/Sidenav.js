import React from 'react';

export const Sidenav = () => {

  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#!">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Users
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Products
            </a>
          </li>
          {/* Add more items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Sidenav;

