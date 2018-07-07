import React, { Component } from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Card.css";

class Card extends Component {
  // card component

  render() {
    return (
      <div className="container">
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <Paper className="card-header red">
              <i className="far fa-heart" />
            </Paper>
            <Paper className="card-body">
              <p className="subheading">Favorited</p>
              <h4 className="heading">0</h4>
              <h6 className="footer">
                The number of foodies who favorite your truck will show here
              </h6>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="card-header blue">
              <i className="far fa-heart" />
            </Paper>
            <Paper className="card-body">
              <p className="subheading">Favorited</p>
              <h4 className="heading">0</h4>
              <h6 className="footer">
                The number of foodies who favorite your truck will show here
              </h6>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="card-header orange">
              <i className="far fa-heart" />
            </Paper>
            <Paper className="card-body">
              <p className="subheading">Favorites</p>
              <h4 className="heading">0</h4>
              <h6 className="footer">
                The number of foodies who favorite your truck will show here
              </h6>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Card;
