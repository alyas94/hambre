import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SelectTruckSU from "../components/SignupPrompt/SelectTruckSU";
import SelectUserSU from "../components/SignupPrompt/SelectUserSU";
import Navbar from "../components/Navbar/Navbar";
import TruckSignup from "../components/SignupPrompt/TruckSignup";
import UserSignup from "../components/SignupPrompt/UserSignup";
import ownerAPI from "../utils/ownerAPI";

class SignupPrompt extends Component {
  state = {
    consumerType: "",
  };
  userSelected = event => {
    console.log("user");
    this.setState({
      consumerType: "user",
    });
  };
  truckSelected = event => {
    console.log("truck");
    this.setState({
      consumerType: "truck",
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <Grid container spacing={0}>
          <Grid
            sx={12}
            sm={6}
            onClick={this.userSelected}
            className="selection-container"
            id="user-select"
          >
            <SelectUserSU />
          </Grid>
          <Grid
            sx={12}
            sm={6}
            onClick={this.truckSelected}
            className="selection-container"
            id="truck-select"
          >
            <Grid>
              <SelectTruckSU />
            </Grid>
          </Grid>
          <Grid xs={12} className="signin-form-container">
            {this.state.consumerType ? (
              this.state.consumerType === "user" ? (
                <UserSignup />
              ) : (
                <TruckSignup />
              )
            ) : null}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SignupPrompt;
