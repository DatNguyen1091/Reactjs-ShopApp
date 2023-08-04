import React, { Component } from "react";
import axios from "axios";
import Sidebar from "./adminConstants/Sidebar";
import Sidenav from "./adminConstants/Sidenav";
import Paging from "./adminConstants/Paging";
import { ApiUrl } from '../layout/constants/ApiUrl';

class AdProduct extends Component {
  state = {
    products: [],
    modalTitle: "",
    id: 0,
    Name: "",
    Description: "",
    Price: 0,
    OldPrice: 0,
    ImageUrl: "",
    Quantity: 0,
    CategoryId: 0,
    IsDeleted: true
  };

  // GET Product
  fetchProducts() {
    axios.get(ApiUrl.Api + "Products")
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }
  componentDidMount() {
    this.fetchProducts();
  }

  // POST Product
  changeProductName = (e) => {this.setState({Name: e.target.value});};
  changeProductDescription = (e) => {this.setState({Description: e.target.value});};
  changeProductPrice = (e) => {this.setState({Price: e.target.value});};
  changeProductOldPrice = (e) => {this.setState({OldPrice: e.target.value});};
  changeProductImageUrl = (e) => {this.setState({ImageUrl: e.target.value});};
  changeProductQuantity = (e) => {this.setState({Quantity: e.target.value});};
  changeProductCategoryId = (e) => {this.setState({CategoryId: e.target.value});};
  changeProductIsDeleted = (e) => {this.setState({IsDeleted: e.target.value});};

  addClick(){
    this.setState({
        modalTitle:"Thêm mới sản phẩm",
        Id:0,
        Name:"",
        Description: "",
        Price: 0,
        OldPrice: 0,
        ImageUrl: "",
        Quantity: 0,
        CategoryId: 0,
        IsDeleted: true
    });
  }
  createClick() {
    const requestBody = {
        name: this.state.Name,
        description: this.state.Description,
        price: parseInt(this.state.Price),
        oldPrice: parseInt(this.state.OldPrice),
        imageUrl: this.state.ImageUrl,
        quantity: parseInt(this.state.Quantity),
        categoryId: this.state.CategoryId,
        isDeleted: this.state.IsDeleted
    }
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
  }

  //PUT Product
  editProduct(product) {
    this.setState({
        modalTitle: "Cập nhật sản phẩm",
        Id: product.id,
        Name: product.name,
        Description: product.description,
        Price: product.price,
        OldPrice: product.oldPrice,
        ImageUrl: product.imageUrl,
        Quantity: product.quantity,
        CategoryId: product.categoryId,
        IsDeleted: product.isDeleted
    });
  }
  updateProduct() {
    const { Id, Name, Description, Price, OldPrice, ImageUrl, Quantity, CategoryId, IsDeleted } = this.state;
    const requestBody = {
      id: Id,
      name: Name,
      description: Description,
      price: parseInt(Price),
      oldPrice: parseInt(OldPrice),
      imageUrl: ImageUrl,
      quantity: parseInt(Quantity),
      categoryId: CategoryId,
      isDeleted: IsDeleted
    };;
    axios.put(ApiUrl.Api + "Products/" + Id, requestBody)
      .then((response) => {
        console.log(response.data);
        alert("Cập nhật sản phẩm thành công!");
        window.location.href = "/admin/products";
      })
      .catch((error) => {
        console.error(error.response.data);
        alert("Cập nhật sản phẩm thất bại!");
      });
  }

  // DELETE Product
  deleteProduct(id) {
    if(window.confirm('Bạn có muốn xóa sản phẩm không?'));
    axios.delete(ApiUrl.Api + "Products/" + id)
      .then((response) => {
        console.log(response.data);
        window.location.href = "/admin/products";
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  }

  render() {
    const { 
      products,
      modalTitle,
      Id,
      Name,
      Description,
      Price,
      OldPrice,
      ImageUrl,
      Quantity,
      CategoryId,
      IsDeleted 
     } = this.state;
    return (
        <div className="container-flut">
            {/* Sidebar */}
            <Sidebar></Sidebar>
            {/* Heading */}
            <Paging></Paging>
            <button type="button" className="btn btn-primary" style={{position:"absolute", left:"1200px", top:"120px"}}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={()=>this.addClick()}> 
            Thêm sản phẩm
            </button>

            <h1 style={{position:"absolute", left:"570px", top:"80px"}}>Danh mục sản phẩm</h1>
            <div style={{position:"absolute", left:"210px", top:"150px"}}>
              <div className="container mt-3">  
                <table className="table table-bordered table-hover" style={{border: "1px solid black"}}>
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
                        <td><img src={product.imageUrl} alt="" style={{width:"70px", height:"80px"}}/></td>
                        <td>{product.quantity}</td>
                        <td>{product.categoryId}</td>
                        <td>
                          <button type="button" className="bth bth-light mr-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={()=>this.editClick(product)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                              <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                          </button>

                          <button type="button" className="bth bth-light mr-1"
                          onClick={()=>this.deleteProduct(product.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                </table>
              </div>
            </div>

            <div className="modal fade" id ="exampleModal" tabIndex="-1" aria-hidden="true">
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
                            value = {Name}
                            onChange = {this.changeProductName}/>
                            </div>

                            </div>
                            <div className="input-group mb-3">
                            <span className="input-group-text">Mô tả</span>
                            <input type="text" className="form-control" 
                            value = {Description}
                            onChange = {this.changeProductDescription}/>
                            </div>

                            <div className="input-group mb-3">
                            <span className="input-group-text">Giá</span>
                            <input type="text" className="form-control" 
                            value = {Price}
                            onChange = {this.changeProductPrice}/>
                            </div>

                            <div className="input-group mb-3">
                            <span className="input-group-text">Giá cũ</span>
                            <input type="text" className="form-control"
                            value = {OldPrice}
                            onChange = {this.changeProductOldPrice}/>
                            </div>

                            <div className="input-group mb-3">
                            <span className="input-group-text">Hình ảnh</span>
                            <input type="text" className="form-control" 
                            value = {ImageUrl}
                            onChange = {this.changeProductImageUrl}/>
                            </div>

                            <div className="input-group mb-3">
                            <span className="input-group-text">Số lượng</span>
                            <input type="text" className="from-control" 
                            value = {Quantity}
                            onChange = {this.changeProductQuantity}/>
                            </div>

                            <div className="input-group mb-3">
                            <span className="input-group-text">Danh mục</span>
                            <input type="text" className="form-control"
                            value = {CategoryId}
                            onChange = {this.changeProductCategoryId}/>
                            </div>

                            <div className="input-group mb-3">
                            <span className="input-group-text">IsDeleted</span>
                            <input type="text" className="form-control" 
                            value = {IsDeleted}
                            onChange = {this.changeProductIsDeleted}/>
                            </div>
                            {
                                Id===0 ? ( <button type="button" className="btn btn-primary float-start" 
                                onClick={() => this.editProduct()}>
                                Tạo sản phẩm</button>) : null
                            }
                            {
                                Id!==0 ? <button type="button" className="btn btn-primary float-start"
                                onClick={() => this.updateProduct()}>
                                Cập nhật sản phẩm</button> : null
                            }
                        </div>
                    </div>
                </div>
            {/* Sidenav */}
            <Sidenav></Sidenav>
        </div>
    );
  }
}

export default AdProduct;
