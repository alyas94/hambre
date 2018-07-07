import React, { Component } from "react";
import MapContainer from "../components/Map/MapComponent";
import MapSidebar from "../components/Map/MapSidebar";
import Navbar from "../components/Navbar/Navbar";
import { LandingLogo } from "../components/Logo/LandingLogo";
// import FilterDrawer from "../components/FilterDrawer/FilterDrawer";

class MapPage extends Component {
  render() {
    return (
      <div className="row">
        <Navbar />
        <div className="parallax-wrapper">
          <section className="section parallax bg1">
            <LandingLogo />
          </section>
          <section className="section">
            <MapSidebar />
            <MapContainer />
          </section>
          <section className="section parallax bg2" />
        </div>
      </div>
    );
  }
}

export default MapPage;
