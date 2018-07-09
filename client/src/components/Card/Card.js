import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Card.css";

class Card extends Component {
  // card component

  render() {
    return (
      <div className="container">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className="card-body">
              <Paper className="card-header">
                <i className="far fa-heart" />
              </Paper>
              <p className="subheading">Favorited</p>
              <h4 className="heading">0</h4>
              <h6 className="footer">
                The number of Foodies who favorite your truck
              </h6>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className="card-body">
              <Paper className="card-header">
                <i className="fas fa-eye" />
              </Paper>
              <p className="subheading">Views</p>
              <h4 className="heading">0</h4>
              <h6 className="footer">
                The number of Foodies who viewed your truck
              </h6>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className="card-body">
              <Paper className="card-header">
                <i className="fas fa-dollar-sign" />
              </Paper>
              <p className="subheading">Revenue</p>
              <h4 className="heading">$0</h4>
              <h6 className="footer">Revenue you've made through Hambre</h6>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className="card-body">
              <Paper className="card-header">
                <i className="far fa-envelope" />
              </Paper>
              <p className="subheading">Messages</p>
              <h4 className="heading">0</h4>
              <h6 className="footer">Messages from Foodies</h6>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Card;
