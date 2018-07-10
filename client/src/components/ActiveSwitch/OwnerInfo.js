import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import "./ActiveSwitch.css";
import API from "../../utils/ownerAPI";
const jwt = require("jsonwebtoken");

class OwnerInfo extends Component {
  state = {
    id: "", //changes with the storage saved
    name: "",
    email: "",
    foodType: "",
    description: "",
  };

  componentDidMount() {
    // update switch function will find out if the users truck is currently true or false
    this.DecodeUserID();
  }

  componentDidUpdate() {
    this.grabInfo();
  }

  DecodeUserID = () => {
    const decoder = jwt.decode(localStorage.tacoJwt);
    const decodedID = decoder.id;
    this.setState({
      id: decodedID,
    });
  };

  grabInfo = () => {
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
            <h6 className="table-state user-desc">{this.state.description}</h6>
          </div>
          <br className="clear-it" />
        </Paper>
      </div>
    );
  }
}

export default OwnerInfo;
