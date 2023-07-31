import React, { Component } from "react";
import Navbav from "./constants/Navbav";
import ProductList from "./constants/ProductList";
import Footer2 from "./constants/Footer2";
class Products extends Component {
  render() {
    return (
      <div className="hero_area">
        { /*header section*/ }
        <Navbav></Navbav>
        { /*inner page section*/ }
        <section className="inner_page_head">
            <div className="container_fuild">
              <div className="row">
                  <div className="col-md-12">
                    <div className="full">
                        <h3>UKULELE THẢO NGUYỄN</h3>
                    </div>
                  </div>
              </div>
            </div>
        </section>
        { /*product section*/ }
        <ProductList></ProductList>
        
        { /*Footer section*/ }
        <Footer2></Footer2>
      </div>
    );
  }
}

export default Products;
