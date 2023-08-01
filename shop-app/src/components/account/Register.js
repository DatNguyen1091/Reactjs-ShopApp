import React from 'react';
import Footer2 from "../layout/constants/Footer2";

const Register = () => {
  return (
    <div>
        <header className="header_section" style={{backgroundColor: "aqua"}}>
            <div className="container">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <a className="navbar-brand" href="/home" style={{ float: "left" }}>
                    <img width="30" height="30" src="images/logoUku.png" alt="#"/>
                    <p style={{ color: "black" }}>Ukulele Thảo Nguyễn</p>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/login">
                                    <button className='btn btn-danger'>Đăng nhập</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mb-4 mx-4">
                    <div className="card-body p-4">
                        <h1>Đăng ký</h1>
                        <p className="text-medium-emphasis">Tạo tài khoảng của bạn</p>

                        <div className="input-group mb-3">
                        <span className="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                            </svg>
                        </span>
                        <input className="form-control" type="text" placeholder="Tên tài khoảng" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                </svg>
                            </span>
                            <input className="form-control" type="text" placeholder="Email" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>
                            </span>
                            <input className="form-control" type="password" placeholder="Mật khẩu" />
                        </div>

                        <div className="input-group mb-4">
                        <span className="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg>
                        </span>
                            <input className="form-control" type="password" placeholder="Nhập lại mật khẩu" />
                        </div>

                        <button className="btn btn-block btn-success" type="button">Tạo tài khoảng</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <Footer2></Footer2>
    </div>
  );
};

export default Register;
