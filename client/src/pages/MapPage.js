import React, { Component } from "react";
import MapContainer from "../components/Map/MapComponent";
import MapSidebar from "../components/Map/MapSidebar";
import Navbar from "../components/Navbar/Navbar";
import { LandingLogo } from "../components/Logo/LandingLogo";
import { MissionStatement } from "../components/MissionStatement/MissionStatement";
import Footer from "../components/Footer/Footer";
// import FilterDrawer from "../components/FilterDrawer/FilterDrawer";

class MapPage extends Component {
  render() {
    return (
      <div className="row map-page-wrapper">
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
          <section className="section">
            <MissionStatement />
          </section>
          {/* <section className="section parallax bg4" /> */}
        </div>
      </div>
    );
  }
}

export default MapPage;
