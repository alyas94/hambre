import React, { Component } from "react";
import MapContainer from "../components/Map/MapComponent";
import MapSidebar from "../components/Map/MapSidebar";
import Navbar from "../components/Navbar/Navbar";
// import FilterDrawer from "../components/FilterDrawer/FilterDrawer";

class MapPage extends Component {
  render() {
    return (
      <div className="abcd">
        <div className="dcba">
          <Navbar />
          <MapContainer />
          <MapSidebar />
          {/* <FilterDrawer /> */}
        </div>
      </div>
    );
  }
}

export default MapPage;
