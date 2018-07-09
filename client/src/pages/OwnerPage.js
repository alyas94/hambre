import React, { Component } from "react";
import MapContainer from "../components/Map/MapComponent";
import Navbar from "../components/Navbar/Navbar";
import ActiveSwitch from "../components/ActiveSwitch/ActiveSwitch";
import OwnerInfo from "../components/ActiveSwitch/OwnerInfo";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Grid from "@material-ui/core/Grid";

const style = {
  backgroundColor: "#eee",
  minHeight: "100vh",
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
          <Grid item xs={12} sm={6} m={6}>
            {" "}
            <ActiveSwitch />
          </Grid>
          <Grid item xs={12} sm={6} m={6}>
            {" "}
            <OwnerInfo />
          </Grid>

          {/* <Grid item xs={12}>
            <Footer />
          </Grid> */}
        </Grid>
      </div>
    );
  }
}

export default OwnerPage;
