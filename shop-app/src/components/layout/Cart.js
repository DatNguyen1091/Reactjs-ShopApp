import React, { Component } from "react";
import Navbav from "./constants/Navbav";
import Footer2 from "./constants/Footer2";

class Cart extends Component {
  
  render() {
    return (
      <div className="hero_area">
        { /*header section*/ }
        <Navbav></Navbav>
        
        
        { /*Footer section*/ }
        <Footer2></Footer2>
        
      </div>
    );
  }
}

export default Cart;
