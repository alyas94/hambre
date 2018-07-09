import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./ActiveSwitch.css";
import API from "../../utils/ownerAPI";
// extras for table
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// const styles = theme => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing.unit * 3,
//     overflowX: "auto",
//   },
//   table: {
//     minWidth: 700,
//   },
// });

// let id = 0;
// function createData(vars, truckInfo) {
//   id += 1;
//   return { vars, truckInfo };
// }

// const data = [
//   createData("Truck Name:", 159),
//   createData("Email Address:", 237),
//   createData("Food Type:", 262),
//   createData("Description:", 305),
// ];

class OwnerInfo extends Component {
  state = {
    id: "5b3c4aec487e595bfa80e135", //changes with the storage saved
    name: "",
    email: "",
    foodType: "",
    description: "",
  };

  componentWillMount() {
    // update switch function will find out if the users truck is currently true or false
    this.grabInfo();
  }

  grabInfo = () => {
    console.log("hi Im doing stuff");
    API.currentLocation(this.state.id)
      .then(response =>
        this.setState({
          name: response.data[0].truckName,
          email: response.data[0].email,
          foodType: response.data[0].foodType,
          description: response.data[0].description,
        })
      )
      .catch(err => console.log(err));
  };

  updateActive = () => {
    if (this.state.checked) {
      API.truckInactive(this.state.id)
        .then(respose => console.log("DB set to false"))
        .catch(err => console.log(err));
    } else {
      API.truckActive(this.state.id)
        .then(respose => console.log("DB set to  true"))
        .catch(err => console.log(err));
      API.newLocation(this.state.id, this.state.currentLocation)
        .then(respose => console.log("location Updated!"))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="tracker">
        <Paper className="switch-head">
          <h3>Your truck information:</h3>
        </Paper>
        <Paper className="paper">
          <div className="table-row">
            <h4 className="table-const">Truck's Name:</h4>
            <p className="table-state">{this.state.name}</p>
          </div>
          <br className="clear-it" />
          <div className="table-row">
            <h4 className="table-const">Email:</h4>
            <h6 className="table-state">{this.state.email}</h6>
          </div>
          <br className="clear-it" />
          <div className="table-row">
            <h4 className="table-const">Food Type:</h4>
            <h6 className="table-state">{this.state.foodType}</h6>
          </div>
          <br className="clear-it" />
          <div className="table-row">
            <h4 className="table-const">Description:</h4>
            <h6 className="table-state">{this.state.description}</h6>
          </div>
          <br className="clear-it" />
          <h6 className="switch-footer">
            Click the settings gear to change your trucks info!
          </h6>
        </Paper>
      </div>
    );
  }
}

export default OwnerInfo;
