import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./adminConstants/Sidebar";
import Sidenav from "./adminConstants/Sidenav";
import { ApiUrl } from '../layout/constants/ApiUrl';
import  axiosWithAuth  from '../account/axiosWithAuth';

const AdCategory = () => {
  const [categories, setCategories] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [id, setId] = useState(0);
  const [Name, setName] = useState("");
  const [IsDeleted, setIsDeleted] = useState(true);

  // GET Category
  const fetchCategory = () => {
    axiosWithAuth().get(ApiUrl.Api + "Category")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
  
  useEffect(() => {
    fetchCategory();
  }, []);

  // POST Category
  const addClick = () => {
    setModalTitle("Thêm mới danh mục");
    setId(0);
    setName("");
    setIsDeleted(true);
  };

  const createClick = () => {
    const requestBody = {
      name: Name,
      isDeleted: IsDeleted
    };

    axiosWithAuth().post(ApiUrl.Api + 'Category', requestBody)
      .then(response => {
        console.log(response.data);
        alert("Thêm danh mục thành công!");
        window.location.href = '/admin/categories';
      })
      .catch(error => {
        console.error(error.response.data); 
        alert("Thêm danh mục thất bại!");
      });
  };

  // PUT Category
  const editCategory = (category) => {
    setModalTitle("Cập nhật danh mục");
    setId(category.id);
    setName(category.name);
    setIsDeleted(category.isDeleted);
  };

  const updateCategory = () => {
    const requestBody = {
      id: id,
      name: Name,
      isDeleted: IsDeleted
    };

    axios.put(ApiUrl.Api + "Category/" + id, requestBody)
      .then((response) => {
        console.log(response.data);
        alert("Cập nhật danh mục thành công!");
        window.location.href = "/admin/categories";
      })
      .catch((error) => {
        console.error(error.response.data);
        alert("Cập nhật danh mục thất bại!");
      });
  };

  // DELETE Category
  const deleteCategory = (id) => {
    if (window.confirm('Bạn có muốn xóa danh mục không?')) {
      axios.delete(ApiUrl.Api + "Category/" + id)
        .then((response) => {
          console.log(response.data);
          window.location.href = "/admin/categories";
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
      <button type="button" className="btn btn-primary" style={{ position: "absolute", left: "1370px", top: "120px" }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={addClick}>
        Thêm danh mục
      </button>

      <h1 style={{ position: "absolute", left: "680px", top: "80px" }}>Danh mục sản phẩm</h1>
      <div style={{ position: "absolute", left: "240px", top: "150px" }}>
        <div className="container mt-3">
          <table className="table table-bordered table-hover" style={{ border: "1px solid black", width: "100%" }}>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên danh mục</th>
                <th>Id danh mục</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                  <td>{category.id}</td>
                  <td>
                    <button type="button" className="bth bth-light mr-1"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => editCategory(category)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                      </svg>
                    </button>

                    <button type="button" className="bth bth-light mr-1"
                      onClick={() => deleteCategory(category.id)}>
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
                <span className="input-group-text">Tên danh mục</span>
                <input type="text" className="form-control"
                  value={Name}
                  onChange={(e) => setName(e.target.value)} />
              </div>

              {id === 0 ?
                <button type="button" className="btn btn-primary float-start" onClick={createClick}>
                  Tạo danh mục
                </button>
                :
                <button type="button" className="btn btn-primary float-start" onClick={updateCategory}>
                  Cập nhật danh mục
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

export default AdCategory;
