import React, { Component } from "react";
import Sidebar from "./adminConstants/Sidebar";
import Sidenav from "./adminConstants/Sidenav";

class Dashboard extends Component {

  render() {
    return (
        <div className="container-flut">
            {/* sgdgds */}
            <Sidebar></Sidebar>
            {/* sgdgds */}
            <Sidenav></Sidenav>
        </div>
    );
  }
}

export default Dashboard;
