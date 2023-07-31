import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:7249/api/Products');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Uku<span>lele</span>
          </h2>
        </div>
        <div className="row">
          {data.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="box">
                  <div className="option_container">
                    <div className="options">
                      <a href="/" className="option1">
                      Xem chi tiết
                      </a>
                      <a href="/" className="option2">
                      Mua ngay
                      </a>
                  </div>
                  </div>
                  <div className="img-box">
                    <img src={product.imageUrl} alt=""/>
                  </div>
                  <div className="detail-box" style={{display: "flex" ,justifyContent: "center"}}>
                    <h5>
                        {product.name}
                        <h6>Giá: {product.price} vnd</h6>
                        <h6>Giá cũ: {product.oldPrice} vnd </h6>
                    </h5>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductList;