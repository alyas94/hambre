import React, { Component } from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./ActiveSwitch.css";
import API from "../../utils/ownerAPI";
const jwt = require("jsonwebtoken");

class ToggleActive extends Component {
  state = {
    checked: false, // will change with the DB
    id: "", //changes with the storage saved
    currentLocation: {},
  };

  componentDidMount() {
    // update switch function will find out if the users truck is currently true or false
    this.getCurrentLocation();
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

  getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      var currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.setState({
        centerLat: position.coords.latitude,
        centerLng: position.coords.longitude,
        currentLocation: currentPosition,
      });
    });
  };

  grabInfo = () => {
    API.currentLocation(this.state.id)
      .then(response =>
        this.setState({
          checked: response.data[0].truckActive,
          name: response.data[0].truckName,
        })
      )
      .catch(err => console.log(err));
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.updateActive();
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
          <h3>Let foodies find you!</h3>
        </Paper>
        <Paper className="paper">
          <div className="card-content">
            <div className="wording">
              <h4 className="active-heading">
                {this.state.checked ? "You're live!" : "You're offline!"}
              </h4>
              <p className="active-subheading">
                {this.state.checked
                  ? "Users can now see your truck"
                  : "Hit the switch so foodies can find you!"}
              </p>
            </div>
            <label htmlFor="normal-switch" className="switch-section">
              <i className="fas fa-truck shake" />
              <Switch
                className="switches"
                checked={this.state.checked}
                onChange={this.handleChange("checked")}
              />
            </label>
          </div>
          <h6 className="switch-footer">
            In order to help Users, please turn this switch
            {this.state.checked
              ? " off when you're done working!"
              : " on before you start working!"}
          </h6>
        </Paper>
      </div>
    );
  }
}

export default ToggleActive;
