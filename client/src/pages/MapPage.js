import React, { Component } from "react";
import MapContainer from "../components/Map/MapComponent";
import MapSidebar from "../components/Map/MapSidebar";
import Navbar from "../components/Navbar/Navbar";
// import FilterDrawer from "../components/FilterDrawer/FilterDrawer";

class MapPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MapContainer />
        <MapSidebar />
        {/* <FilterDrawer /> */}
      </div>
    );
  }
}

export default MapPage;
