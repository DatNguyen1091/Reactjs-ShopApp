import React, { Component } from "react";
import Sidebar from "./adminConstants/Sidebar";
import Sidenav from "./adminConstants/Sidenav";

class AdFeedback extends Component {

  render() {
    return (
        <div className="container-flut">
            {/* Sidebar */}
            <Sidebar></Sidebar>
            
            {/* Sidenav */}
            <Sidenav></Sidenav>

        </div>
    );
  }
}

export default AdFeedback;
