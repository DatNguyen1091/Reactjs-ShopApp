import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./adminConstants/Sidebar";
import Sidenav from "./adminConstants/Sidenav";
import { ApiUrl } from '../layout/constants/ApiUrl';

const AdUser = () => {
  const [users, setPsers] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [id, setId] = useState(0);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [IsAdmin, setIsAdmin] = useState(true);

  // GET Product
  const fetchProducts = () => {
    axios.get(ApiUrl.Api + "Users")
      .then((response) => {
        setPsers(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  // POST Product
  const addClick = () => {
    setModalTitle("Thêm mới tài khoảng");
    setId(0);
    setUsername("");
    setPassword("");
    setEmail("");
    setIsAdmin(false);
  };

  const createClick = () => {
    const requestBody = {
      username: Username,
      password: Password,
      email: Email,
      isAdmin: IsAdmin
    };

    axios.post(ApiUrl.Api + 'Users', requestBody)
      .then(response => {
        console.log(response.data);
        alert("Thêm tài khoảng thành công!");
        window.location.href = '/admin/accounts';
      })
      .catch(error => {
        console.error(error.response.data); 
        alert("Thêm tài khoảng thất bại!");
      });
  };

  // PUT Product
  const editProduct = (user) => {
    setModalTitle("Cập nhật tài khoảng");
    setId(user.id);
    setUsername(user.username);
    setPassword(user.password);
    setEmail(user.email);
    setIsAdmin(user.isAdmin);
  };

  const updateProduct = () => {
    const requestBody = {
      id: id,
      username: Username,
      password: Password,
      email: Email,
      isAdmin: IsAdmin,
    };

    axios.put(ApiUrl.Api + "Users/" + id, requestBody)
      .then((response) => {
        console.log(response.data);
        alert("Cập nhật danh mục thành công!");
        window.location.href = "/admin/accounts";
      })
      .catch((error) => {
        console.error(error.response.data);
        alert("Cập nhật danh mục thất bại!");
      });
  };

  // DELETE Product
  const deleteProduct = (id) => {
    if (window.confirm('Bạn có muốn xóa danh mục không?')) {
      axios.delete(ApiUrl.Api + "Users/" + id)
        .then((response) => {
          console.log(response.data);
          window.location.href = "/admin/accounts";
        })
        .catch((error) => {
          console.error(error.response.data);
        });
    }
  };

  return (
    <div className="container-flut">
      {/* Sidebar */}
      <Sidebar></Sidebar>
      {/* Heading */}
      <button type="button" className="btn btn-primary" style={{ position: "absolute", left: "1155px", top: "150px" }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={addClick}>
        Thêm tài khoảng
      </button>

      <h1 style={{ position: "absolute", left: "680px", top: "80px" }}>Quản lý tài khoảng</h1>
      <div style={{ position: "absolute", left: "440px", top: "200px" }}>
        <div className="container mt-3">
          <table className="table table-bordered table-hover" style={{ border: "1px solid black", width: "100%" }}>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên tài khoảng</th>
                <th>Mật khẩu</th>
                <th>Email</th>
                <th>Quản trị viên</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.email}</td>
                  <td>{user.isAdmin}</td>
                  <td>
                    <button type="button" className="bth bth-light mr-1"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => editProduct(user)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                      </svg>
                    </button>

                    <button type="button" className="bth bth-light mr-1"
                      onClick={() => deleteProduct(user.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" >
          <div className="modal-content" >
            <div className="modal-header">
              <h5 className="modal-title">{modalTitle}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span className="input-group-text">Tên tài khoảng</span>
                <input type="text" className="form-control"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)} />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Mật khẩu</span>
                <input type="text" className="form-control"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)} />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Email</span>
                <input type="text" className="form-control"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Quản trị viên</span>
                <input type="text" className="form-control"
                  value={IsAdmin}
                  onChange={(e) => setIsAdmin(e.target.value)} />
              </div>

              {id === 0 ?
                <button type="button" className="btn btn-primary float-start" onClick={createClick}>
                  Tạo tài khoảng
                </button>
                :
                <button type="button" className="btn btn-primary float-start" onClick={updateProduct}>
                  Cập nhật tài khoảng
                </button>
              }
            </div>
          </div>
        </div>
      </div>
      {/* Sidenav */}
      <Sidenav></Sidenav>
    </div>
  );
};

export default AdUser;
