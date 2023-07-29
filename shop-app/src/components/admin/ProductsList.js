import React,{Component}  from "react";
import {variables} from '../constants/Variables.js';
import Pagination from "../constants/Pagination.js";
import AdminNav from "../constants/AdminNav.js";

export class ProductsList extends Component{
    
    constructor(props){
        super(props);

        this.state={
            products:[],
            Id: 0,
            Name: "",
            Slug: "",
            Description: "",
            MetaDescription: "",
            MetaKeywords: "",
            Sku: "",
            Model: "",
            Price: 0,
            OldPrice: 0,
            ImageUrl: "",
            IsBestseller: true,
            IsFeatured: true,
            Quantity: 0,
            ProductStatus: "active",
            IsDeleted: true,
        }
    }

    // GET Product
    refreshList(){
        fetch(variables.API_URL+'Products?page=' + 1)
        .then(response => response.json())
        .then(data => {
            this.setState({products: data})
        })
        .catch(error => console.log('Error fetching products:', error));
        
    }

    componentDidMount(){
        this.refreshList();
    }

    // Post Product
    addClick(){
        this.setState({
            modalTitle:"Thêm sản phẩm",
            Id: 0,
            Name: "",
            Slug: "",
            Description: "",
            MetaDescription: "",
            MetaKeywords: "",
            Sku: "",
            Model: "",
            Price: 0,
            OldPrice: 0,
            ImageUrl: "",
            IsBestseller: true,
            IsFeatured: true,
            Quantity: 0,
            ProductStatus: "active",
            IsDeleted: true
        });
    }
    changeProductName = (e) => {
        this.setState({Name: e.target.value});
    };
    changeProductSlug = (e) => {
        this.setState({Slug: e.target.value});
    };
    changeProductDescription = (e) => {
        this.setState({Description: e.target.value});
    };
    changeProductMetaDescription = (e) => {
        this.setState({MetaDescription: e.target.value});
    };
    changeProductMetaKeywords = (e) => {
        this.setState({MetaKeywords: e.target.value});
    };
    changeProductSku = (e) => {
        this.setState({Sku: e.target.value});
    };
    changeProductModel = (e) => {
        this.setState({Model: e.target.value});
    };
    changeProductPrice = (e) => {
        this.setState({Price: e.target.value});
    };
    changeProductOldPrice = (e) => {
        this.setState({OldPrice: e.target.value});
    };
    changeProductImageUrl = (e) => {
        this.setState({ImageUrl: e.target.value});
    };
    changeProductIsBestseller = (e) => {
        this.setState({IsBestselle: e.target.value});
    };
    changeProductIsFeatured = (e) => {
        this.setState({IsFeatured: e.target.value});
    };
    changeProductQuantity = (e) => {
        this.setState({Quantity: e.target.value});
    };
    changeProductProductStatus = (e) => {
        this.setState({ProductStatus: e.target.value});
    };
    changeProductIsDeleted = (e) => {
        this.setState({IsDeleted: e.target.value});
    };
    createClick() {
        const requestBody = {
            name: this.state.Name,
            slug: this.state.Slug,
            description: this.state.Description,
            metaDescription: this.state.MetaDescription,
            metaKeywords: this.state.MetaKeywords,
            sku: this.state.Sku,
            model: this.state.Model,
            price: parseInt(this.state.Price),
            oldPrice: parseInt(this.state.OldPrice),
            imageUrl: this.state.ImageUrl,
            isBestseller: this.state.IsBestseller,
            isFeatured: this.state.IsFeatured,
            quantity: parseInt(this.state.Quantity),
            productStatus: this.state.ProductStatus,
            isDeleted: this.state.IsDeleted
        }
        fetch(variables.API_URL + 'Products', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody),
        })
        .then(res => res.json())
        .then((result) => {
          alert(JSON.stringify(result));
          this.refreshList();
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    };

    // PUT Product
    editClick(dep) {
        this.setState({
            Id: dep.id,
            Name: dep.name,
            Slug: dep.slug,
            Description: dep.description,
            MetaDescription: dep.metaDescription,
            MetaKeywords: dep.metaKeywords,
            Sku: dep.sku,
            Model: dep.model,
            Price: dep.price,
            OldPrice: dep.oldPrice,
            ImageUrl: dep.imageUrl,
            IsBestseller: dep.isBestseller,
            IsFeatured: dep.isFeatured,
            Quantity: dep.quantity,
            ProductStatus: dep.productStatus,
            IsDeleted: dep.isDeleted,
        }); 
    };
    updateClick() {
        const requestBody = {
            id: this.state.Id,
            name: this.state.Name,
            slug: this.state.Slug,
            description: this.state.Description,
            metaDescription: this.state.MetaDescription,
            metaKeywords: this.state.MetaKeywords,
            sku: this.state.Sku,
            model: this.state.Model,
            price: parseInt(this.state.Price),
            oldPrice: parseInt(this.state.OldPrice),
            imageUrl: this.state.ImageUrl,
            isBestseller: this.state.IsBestseller,
            isFeatured: this.state.IsFeatured,
            quantity: parseInt(this.state.Quantity),
            productStatus: this.state.ProductStatus,
            isDeleted: this.state.IsDeleted
        }
        fetch(variables.API_URL + 'Products/' + requestBody.id, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody),
        })
        .then(res => res.json())
        .then((result) => {
          alert(result);
          this.refreshList();
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    };

    // DELETE Product
    deleteClick(id) {
        if(window.confirm('Bạn có muốn xóa sản phẩm không?')){
            fetch(variables.API_URL + 'Products/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            })
            .then(res => res.json())
            .then(() => {
            this.refreshList();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    };

///////////////////////////////////////////

    render(){
        const{
            products,
            modalTitle,
            Id,
            Name,
            Slug,
            Description,
            MetaDescription,
            MetaKeywords,
            Sku,
            Model,
            Price,
            OldPrice,
            ImageUrl,
            IsBestseller,
            IsFeatured,
            Quantity,
            ProductStatus,
            IsDeleted 
        } = this.state;

        return(   
        <div className="container-xxl">
        
            {/* NAV */}
            <AdminNav/>

            <div className="text-center"> 
                <div className="d-inline-block">
                    <h1>DANH SÁCH SẢN PHẨM</h1>
                </div>
            </div>
            
            {/* Thêm mới sản phẩm */}
            <button type="button" className="btn btn-primary m-3 float-end"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.addClick()}> 
                Thêm mới sản phẩm  
            </button>
            
            {/* Truyền hàm xử lý cho Pagination */}
            <div className="m-3">
                <Pagination/>
            </div>

            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Mô tả</th>
                        <th>Giá</th>
                        <th>Giá cũ</th>
                        <th>Hình ảnh</th>
                        <th>Số lượng</th>
                        <th>Chỉnh sửa</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(dep => 
                        <tr key={dep.id}>
                            <td>{dep.id}</td>
                            <td>{dep.name}</td>
                            <td>{dep.description}</td>
                            <td>{dep.price}</td>
                            <td>{dep.oldPrice}</td>
                            <td>
                            <img src={dep.imageUrl} alt={dep.name} width="100" height="100" />
                            </td>
                            <td>{dep.quantity}</td>
                            <td>
                                <button type="button" className="bth btn-light mr-1"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={()=>this.editClick(dep)}
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                                </button>

                                <button type="button" className="bth btn-light mr-1"
                                onClick={()=>this.deleteClick(dep.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                                </button>
                            </td>
                        </tr>
                        )}
                </tbody>
            </table>

            <div className="modal fade" id ="exampleModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" >
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h5 className="modal-title">{modalTitle}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <div className="input-group mb-2">
                                <span className="input-group-text">Name</span>
                                <input
                                    type="text"
                                    className="form-control w-80" 
                                    value={Name}
                                    onChange={this.changeProductName}
                                />
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text">Slug</span>
                                <input
                                    type="text"
                                    className="form-control w-80" 
                                    value={Slug}
                                    onChange={this.changeProductSlug}
                                />
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text">Description</span>
                                <input
                                    type="text"
                                    className="form-control w-80" 
                                    value={Description}
                                    onChange={this.changeProductDescription}
                                />
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text">MetaDescription</span>
                                <input
                                    type="text"
                                    className="form-control w-80" 
                                    value={MetaDescription}
                                    onChange={this.changeProductMetaDescription}
                                />
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text">MetaKeywords</span>
                                <input
                                    type="text"
                                    className="form-control w-80" 
                                    value={MetaKeywords}
                                    onChange={this.changeProductMetaKeywords}
                                />
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text">Sku</span>
                                <input
                                    type="text"
                                    className="form-control w-80" 
                                    value={Sku}
                                    onChange={this.changeProductSku}
                                />
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text">Model</span>
                                <input
                                    type="text"
                                    className="form-control w-80" 
                                    value={Model}
                                    onChange={this.changeProductModel}
                                />
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text">Price</span>
                                <input
                                    type="text"
                                    className="form-control w-80" 
                                    value={Price}
                                    onChange={this.changeProductPrice}
                                />
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text">OldPrice</span>
                                <input
                                    type="text"
                                    className="form-control w-80" 
                                    value={OldPrice}
                                    onChange={this.changeProductOldPrice}
                                />
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text">ImageUrl</span>
                                <input
                                    type="text"
                                    className="form-control w-80" 
                                    value={ImageUrl}
                                    onChange={this.changeProductImageUrl}
                                />
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text">IsBestseller</span>
                                <input
                                    type="text"
                                    className="form-control w-80" 
                                    value={IsBestseller}
                                    onChange={this.changeProductIsBestseller}
                                />
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text">IsFeatured</span>
                                <input
                                    type="text"
                                    className="form-control w-80" 
                                    value={IsFeatured}
                                    onChange={this.changeProductIsFeatured}
                                />
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text">Quantity</span>
                                <input
                                    type="text"
                                    className="form-control w-80" 
                                    value={Quantity}
                                    onChange={this.changeProductQuantity}
                                />
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text">ProductStatus</span>
                                <input
                                    type="text"
                                    className="form-control w-80" 
                                    value={ProductStatus}
                                    onChange={this.changeProductProductStatus}
                                />
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text">IsDeleted</span>
                                <input
                                    type="text"
                                    className="form-control w-80" 
                                    value={IsDeleted}
                                    onChange={this.changeProductIsDeleted}
                                />
                            </div>
                        </div>
                        {
                            Id===0 ? <button type="button" className="btn btn-primary float-start" 
                            onClick={() => this.createClick()}>
                            Tạo mới</button>:null
                        }
                        {
                            Id!==0 ? <button type="button" className="btn btn-primary float-start"
                            onClick={() => this.updateClick()}>
                            Cập nhật</button>:null
                        }                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default ProductsList;