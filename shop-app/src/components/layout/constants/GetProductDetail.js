import React, { useEffect, useState } from "react";
import { ApiUrl } from './ApiUrl';
import { useParams } from "react-router-dom";

const GetProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = () => {
      fetch(ApiUrl.Api + 'Products/' + id)
        .then(response => response.json())
        .then(data => {
          setProduct(data);
        })
        .catch(error => {
          alert(error);
        });
    };
  
    fetchProductDetail();
  }, [id]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="hero_area">
      {/* Block content */}
      {product && (
        <div className="container">
          <div className="container mt-4">
            <div style={{ border: "1px solid black" }}>
              <div className="container-fliud">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <a href="/" className="">
                        <img width={"500px"} height={"500px"} src={product.imageUrl} alt=""/>
                      </a>
                    </div>
                    <div className="col-md-6">
                      <br /> <br />

                      <h3>{product.name}</h3>

                      <p>Số lượng: {product.quantity}</p>
                      
                      <small className="text-muted">Giá cũ: <s><span>{product.oldPrice} vnđ</span></s></small>
                      <h4>Giá hiện tại: <span>{product.price} vnđ</span></h4>

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
                            value={quantity}
                            onChange={handleQuantityChange}
                          />
                        </div>
                      </div>

                      <div className="action">
                        <button className="btn btn-danger">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <br /> <br />
            <div className="card">
              <div className="container-fluid">
                <h3>Thông tin chi tiết về sản phẩm</h3>
                <div className="row">
                  <div className="col"> {product.description} </div>
                </div>
              </div>
            </div>

            <br /> <br />
            <div className="card">
              <div className="container-fluid">
                <h3>Bình luận về sản phẩm</h3>
                <div className="row">
                  <div className="col"> OK </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetProductDetail;
