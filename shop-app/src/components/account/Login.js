import React, { useState } from 'react';
import Footer2 from "../layout/constants/Footer2";
import axios from 'axios';
import { ApiUrl } from '../layout/constants/ApiUrl';

const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const [id, setId] = useState(0);
    const [username, setUsername] = useState('');
     // eslint-disable-next-line no-unused-vars
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     // eslint-disable-next-line no-unused-vars
    const [isAdmin, setIsAdmin] = useState(false);
     // eslint-disable-next-line no-unused-vars
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));

    const handleLogin = () => {
        const loginData = {
          id : setId,
          username: username,
          email: setEmail,
          password: password,
          isAdmin: setIsAdmin,
        };
        axios.post(ApiUrl.Api + 'Users/Login', loginData)
        .then(response => {
          const token = response.data.data;
          localStorage.setItem('accessToken', token);
          setIsLoggedIn(true);
          localStorage.setItem('isLoggedIn', 'true');
          console.log(response.data);
          window.location.href = '/home';
        })
        .catch(error => {
          setIsLoggedIn(false);
          localStorage.setItem('isLoggedIn', 'false');
          console.error(error.response.data); 
          alert("Đăng nhập thất bại!");
        });
    };
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
                                <a className="nav-link" href="register">
                                    <button className='btn btn-danger'>Đăng ký</button>
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
                        <h1>Đăng nhập</h1>

                        <div className="input-group mb-3">
                        <span className="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                            </svg>
                        </span>
                        <input className="form-control" type="text" placeholder="Tên tài khoảng" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>
                            </span>
                            <input className="form-control" type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <button className="btn btn-block btn-success" type="button" onClick={handleLogin}>Đăng nhập</button>
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

export default Login;
