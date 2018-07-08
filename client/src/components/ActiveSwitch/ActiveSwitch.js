import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./ActiveSwitch.css";
import API from "../../utils/ownerAPI";

class ToggleActive extends Component {
  state = {
    checked: true, // will change with the DB
    id: "5b4256d5a80c1d8da7596250", //changes with the storage saved
    name: "",
    currentLocation: {},
  };

  componentDidMount() {
    // update switch function will find out if the users truck is currently true or false
    this.grabInfo();
    this.getCurrentLocation();
  }

  getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      var currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      console.log(currentPosition);
      this.setState({
        centerLat: position.coords.latitude,
        centerLng: position.coords.longitude,
        currentLocation: currentPosition,
      });
      console.log(this.state.currentLocation);
    });
  };

  grabInfo = () => {
    API.currentLocation(this.state.id)
      .then(
        response =>
          this.setState({
            checked: response.data[0].truckActive,
            name: response.data[0].truckName,
          }),
        response => console.log(response.data)
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
        <Paper className="card-head blue">
          <h2>Let foodies find you!</h2>
        </Paper>
        <Paper className="paper">
          <h3>
            {this.state.checked
              ? "You're live! Users can now see your truck"
              : "Hit the switch so foodies can find you !"}
          </h3>
          <label htmlFor="normal-switch">
            <i className="fas fa-arrow-right" />
            <Switch
              className="switches"
              checked={this.state.checked}
              onChange={this.handleChange("checked")}
            />
          </label>
          <p>
            <span>
              {this.state.checked
                ? "Be sure to turn your truck off when you're done working!"
                : ""}
            </span>
          </p>
        </Paper>
      </div>
    );
  }
}

export default ToggleActive;
