import React, { Component } from "react";
import MapContainer from "../components/Map/MapComponent";
import MapSidebar from "../components/Map/MapSidebar";

class MapPage extends Component {
  render() {
    return (
      <div>
        <MapContainer />
        <MapSidebar />
      </div>
    );
  }
}

export default MapPage;
