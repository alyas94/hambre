import React, { Component } from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./ActiveSwitch.css";
import API from "../../utils/ownerAPI";

class ToggleActive extends Component {
  state = {
    checked: false, //change for the DB
    id: "5b3c4aec487e595bfa80e135", //changes with the storage saved
  };

  componentDidMount() {
    console.log("component mounted!");
    this.updateSwitch();
  }

  updateSwitch = () => {
    API.currentLocation(this.state.id)
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.updateActive(this.state.id);
  };

  updateActive = id => {
    if (this.state.checked) {
      API.truckActive(id)
        .then(respose => console.log("DB set to  true"))
        .catch(err => console.log(err));
    } else {
      API.truckInactive(id)
        .then(respose => console.log("DB set to false"))
        .catch(err => console.log(err));
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="tracker">
        <Paper className="paper">
          <h2>Let foodies find you!</h2>
          <h3>
            {this.state.checked
              ? "You're live! foodies can now see your truck"
              : "Hit the switch so foodies can find you !"}
          </h3>
          <label htmlFor="normal-switch">
            get to work!
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
