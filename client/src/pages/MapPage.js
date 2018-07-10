import React, { Component } from "react";
import MapContainer from "../components/Map/MapComponent";
import MapSidebar from "../components/Map/MapSidebar";
import Navbar from "../components/Navbar/Navbar";
import { LandingLogo } from "../components/Logo/LandingLogo";
import { MissionStatement } from "../components/MissionStatement/MissionStatement";
import Grid from "@material-ui/core/Grid";
// import FilterDrawer from "../components/FilterDrawer/FilterDrawer";

class MapPage extends Component {
  render() {
    return (
      <div className="row map-page-wrapper">
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Navbar />
          </Grid>
          <div className="parallax-wrapper">
            <section className="section parallax bg1">
              <Grid item xs={12}>
                <LandingLogo />
              </Grid>
            </section>
            <section className="section">
              <Grid item xs={4} sm={12}>
                <MapSidebar />
              </Grid>
              <Grid item xs={8} sm={12}>
                <MapContainer />
              </Grid>
            </section>
            <section className="section parallax bg2" />
            <section className="section">
              <Grid item xs={12}>
                <MissionStatement />
              </Grid>
            </section>
            {/* <section className="section parallax bg4" /> */}
          </div>
        </Grid>
      </div>
    );
  }
}

export default MapPage;
