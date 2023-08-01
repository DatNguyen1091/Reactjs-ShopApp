import React, { Component } from "react";
import Navbav from "./constants/Navbav";
import Footer2 from "./constants/Footer2";

class ProductDetail extends Component {
  state = {
    quantity: 0, 
  };


  handleQuantityChange = (event) => {
    this.setState({ quantity: event.target.value });
  };

  render() {

    return (
      <div className="hero_area">
        { /*header section*/ }
        <Navbav></Navbav>
        
        {/* Block content */}
        <div className="container">
          <div className="container mt-4">
            <div style={{ border: "1px solid black" }}>
              <div className="container-fliud">
                <form>
                  <div className="wrapper row">
                    <div className="preview col-md-6">
                      <a href="/" className="">
                      <img width={"500px"} height={"500px"} src="images/p2.png" alt=""/>
                      </a>
                    </div>
                    <div className="details col-md-6">
                      <br></br> <br></br>

                      <h3>Ukulele</h3>

                      <p>Ukulele</p>
                      
                      <small className="text-muted">Giá cũ: <s><span> vnđ</span></s></small>
                      <h4>Giá hiện tại: <span> vnđ</span></h4>

                      <p>
                        <strong>100%</strong> hàng <strong>Chất lượng</strong>, đảm bảo <strong>Uy tín</strong>!
                      </p>
                      <label>Số lượng đặt mua:</label>
                      <div className="form-inline" style={{justifyContent: "center"}}> 
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control form-control-sm" 
                            id="soluong"
                            name="soluong"
                            value={this.state.quantity}
                            onChange={this.handleQuantityChange}
                          />
                        </div>
                      </div>

                      <div className="action">
                        <button className="btn btn-danger" id="btnThemVaoGioHang" >
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <br></br> <br></br>
            <div className="card">
              <div className="container-fluid">
                <h3>Thông tin chi tiết về sản phẩm</h3>
                <div className="row">
                  <div className="col"> Ukulele </div>
                </div>
              </div>
            </div>

            <br></br> <br></br>
            <div className="card">
              <div className="container-fluid">
                <h3>Bình luận về sản phẩm</h3>
                <div className="row">
                  <div className="col"> Ukulele </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        { /*Footer section*/ }
        <Footer2></Footer2>
        
      </div>
    );
  }
}

export default ProductDetail;
