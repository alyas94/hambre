import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import truckOwner from "./img/truckOwner.jpeg";
import foodie from "./img/foodie.jpg";



const styles = theme => ({
  imgFluid: {
    marginRight: 10,
    paddingTop: 10,
    maxWidth: "100%",
     height: 400
  },
  imgTruck: {
  height: 400
  },
  titleBar: {
    color: "black",
    position: "relative"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow:
      " 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },

});

class Signup extends React.Component {


  

  render() {
    const { classes } = this.props;

    return (
          <div className={classes.section}>
        <div className={classes.container}>
          <div xs={12} sm={6} md={6} >
            <img 
              src = {truckOwner}
                className = {
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid +
                  " " +
                  classes.imgTruck
                }
          />


            <img 
              src = {foodie}
                className = {
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid +
                  " " +
                  classes.imgTruck
                }
          />
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);
