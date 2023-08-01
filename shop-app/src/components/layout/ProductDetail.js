import React, { Component } from "react";
import Navbav from "./constants/Navbav";
import Footer2 from "./constants/Footer2";
import GetProductDetail from "./constants/GetProductDetail";

class ProductDetail extends Component {

  render() {
    return (
      <div className="container-flut">
        { /*header section*/ }
        <Navbav></Navbav>
        {/* detail content */}
        <GetProductDetail></GetProductDetail>
        { /*Footer section*/ }
        <Footer2></Footer2>
      </div>
    );
  }
}

export default ProductDetail;
