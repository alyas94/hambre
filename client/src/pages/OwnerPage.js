import React, { Component } from "react";
import MapContainer from "../components/Map/MapComponent";
import Navbar from "../components/Navbar/Navbar";
import ActiveSwitch from "../components/ActiveSwitch/ActiveSwitch";
import Card from "../components/Card/Card";
import Grid from "@material-ui/core/Grid";

// import FilterDrawer from "../components/FilterDrawer/FilterDrawer";
const style = {
  backgroundColor: "#eee",
};

class OwnerPage extends Component {
  render() {
    return (
      <div style={style}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Navbar />
          </Grid>

          <Grid item xs={12}>
            <Card />
          </Grid>
          <Grid item xs={6}>
            {" "}
            <ActiveSwitch />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default OwnerPage;
