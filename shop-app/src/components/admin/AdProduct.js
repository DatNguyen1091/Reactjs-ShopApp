import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./adminConstants/Sidebar";
import Sidenav from "./adminConstants/Sidenav";
import Paging from "./adminConstants/Paging";
import { ApiUrl } from '../layout/constants/ApiUrl';
import { useParams } from "react-router-dom";

const AdProduct = () => {
  const [products, setProducts] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [id, setId] = useState(0);
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState(0);
  const [OldPrice, setOldPrice] = useState(0);
  const [ImageUrl, setImageUrl] = useState("");
  const [Quantity, setQuantity] = useState(0);
  const [CategoryId, setCategoryId] = useState(0);
  const [IsDeleted, setIsDeleted] = useState(true);
  const { page } = useParams();

  // GET Product
  const fetchProducts = () => {
    axios.get(ApiUrl.Api + "Products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProducts = () => {
      axios.get(ApiUrl.Api + "Products?page=" + page)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
    };
  
    fetchProducts();
  }, [page]);

  // POST Product
  const addClick = () => {
    setModalTitle("Thêm mới sản phẩm");
    setId(0);
    setName("");
    setDescription("");
    setPrice(0);
    setOldPrice(0);
    setImageUrl("");
    setQuantity(0);
    setCategoryId(0);
    setIsDeleted(true);
  };

  const createClick = () => {
    const requestBody = {
      name: Name,
      description: Description,
      price: parseInt(Price),
      oldPrice: parseInt(OldPrice),
      imageUrl: ImageUrl,
      quantity: parseInt(Quantity),
      categoryId: CategoryId,
      isDeleted: IsDeleted
    };

    axios.post(ApiUrl.Api + 'Products', requestBody)
      .then(response => {
        console.log(response.data);
        alert("Thêm sản phẩm thành công!");
        window.location.href = '/admin/products';
      })
      .catch(error => {
        console.error(error.response.data); 
        alert("Thêm sản phẩm thất bại!");
      });
  };

  // PUT Product
  const editProduct = (product) => {
    setModalTitle("Cập nhật sản phẩm");
    setId(product.id);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setOldPrice(product.oldPrice);
    setImageUrl(product.imageUrl);
    setQuantity(product.quantity);
    setCategoryId(product.categoryId);
    setIsDeleted(product.isDeleted);
  };

  const updateProduct = () => {
    const requestBody = {
      id: id,
      name: Name,
      description: Description,
      price: parseInt(Price),
      oldPrice: parseInt(OldPrice),
      imageUrl: ImageUrl,
      quantity: parseInt(Quantity),
      categoryId: CategoryId,
      isDeleted: IsDeleted
    };

    axios.put(ApiUrl.Api + "Products/" + id, requestBody)
      .then((response) => {
        console.log(response.data);
        alert("Cập nhật sản phẩm thành công!");
        window.location.href = "/admin/products";
      })
      .catch((error) => {
        console.error(error.response.data);
        alert("Cập nhật sản phẩm thất bại!");
      });
  };

  // DELETE Product
  const deleteProduct = (id) => {
    if (window.confirm('Bạn có muốn xóa sản phẩm không?')) {
      axios.delete(ApiUrl.Api + "Products/" + id)
        .then((response) => {
          console.log(response.data);
          window.location.href = "/admin/products";
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
      <Paging></Paging>
      <button type="button" className="btn btn-primary" style={{ position: "absolute", left: "1370px", top: "120px" }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={addClick}>
        Thêm sản phẩm
      </button>

      <h1 style={{ position: "absolute", left: "680px", top: "80px" }}>Danh mục sản phẩm</h1>
      <div style={{ position: "absolute", left: "240px", top: "150px" }}>
        <div className="container mt-3">
          <table className="table table-bordered table-hover" style={{ border: "1px solid black" }}>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên Sản Phẩm</th>
                <th>Mô tả</th>
                <th>Giá</th>
                <th>Giá cũ</th>
                <th>Hình ảnh</th>
                <th>Số lượng</th>
                <th>Danh mục</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.oldPrice}</td>
                  <td><img src={product.imageUrl} alt="" style={{ width: "70px", height: "80px" }} /></td>
                  <td>{product.quantity}</td>
                  <td>{product.categoryId}</td>
                  <td>
                    <button type="button" className="bth bth-light mr-1"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => editProduct(product)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                      </svg>
                    </button>

                    <button type="button" className="bth bth-light mr-1"
                      onClick={() => deleteProduct(product.id)}>
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
                <span className="input-group-text">Tên Sản Phẩm</span>
                <input type="text" className="form-control"
                  value={Name}
                  onChange={(e) => setName(e.target.value)} />
              </div>

              </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Mô tả</span>
                  <input type="text" className="form-control" 
                    value = {Description}
                    onChange={(e) => setDescription(e.target.value)}/>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Giá</span>
                  <input type="text" className="form-control" 
                    value = {Price}
                    onChange={(e) => setPrice(e.target.value)}/>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Giá cũ</span>
                  <input type="text" className="form-control"
                    value = {OldPrice}
                    onChange={(e) => setOldPrice(e.target.value)}/>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Hình ảnh</span>
                  <input type="text" className="form-control" 
                    value = {ImageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}/>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Số lượng</span>
                  <input type="text" className="from-control" 
                    value = {Quantity}
                    onChange={(e) => setQuantity(e.target.value)}/>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Danh mục</span>
                  <input type="text" className="form-control"
                    value = {CategoryId}
                    onChange={(e) => setCategoryId(e.target.value)}/>
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">IsDeleted</span>
                <input type="text" className="form-control" 
                  value = {IsDeleted}
                  onChange={(e) => setIsDeleted(e.target.value)}/>
                </div>

                {id === 0 ?
                  <button type="button" className="btn btn-primary float-start" onClick={createClick}>
                    Tạo sản phẩm
                  </button>
                  :
                  <button type="button" className="btn btn-primary float-start" onClick={updateProduct}>
                    Cập nhật sản phẩm
                  </button>
                }
            </div>
          </div>
        </div> 
      {/* Sidenav */}
      <Sidenav></Sidenav>
    </div>
  );
};

export default AdProduct;
