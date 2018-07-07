import React, { Component } from "react";
import MapContainer from "../components/Map/MapComponent";
import Navbar from "../components/Navbar/Navbar";
import ActiveSwitch from "../components/ActiveSwitch/ActiveSwitch";
import Grid from "@material-ui/core/Grid";

// import FilterDrawer from "../components/FilterDrawer/FilterDrawer";

class OwnerPage extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Navbar />
          </Grid>
          <Grid item xs={3}>
            {" "}
            <ActiveSwitch />
          </Grid>
          <Grid item xs={7}>
            {" "}
            {/* <MapContainer /> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default OwnerPage;
