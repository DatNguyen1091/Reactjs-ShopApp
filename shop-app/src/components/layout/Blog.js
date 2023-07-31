import React, { Component } from "react";
import Navbav from "./constants/Navbav";

class Home extends Component {
  render() {
    return (
      <div className="hero_area">
        { /*header section*/ }
        <Navbav></Navbav>
        
      </div>
    );
  }
}

export default Home;
