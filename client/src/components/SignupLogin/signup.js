import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// core components
import GridContainer from "./GridContainer.jsx";
import GridItem from "./GridItem.jsx";
import Button from "./Button.jsx";
import exampleStyle from "./exampleStyle.jsx";

import truckOwner from "./img/truckOwner.jpeg";
import foodie from "./img/foodie.jpg";
// import { Typography } from "@material-ui/core";
// import LoginPage from "./usersignup";
 

class signup extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
                <img
                    src={truckOwner}
                   
                    alt="..."
       
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid +
                    " " +
                    classes.imgTruck
                  }
                            
                        />
              <div className={classes.Text}>
                {
                  < Button color = "primary"
                  size = "lg"
                  justify = "center" >
                                    Are you a Truck Owner?
                                  </Button>
                }

      </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <img
            
                  src={foodie}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid +
                    " " +
                    classes.imgTruck
                  }
                
 />
                             <div className={classes.Text}>
                {
                  < Button color = "primary"
                  size = "lg"
                  justify = "center" >
                                    Are you a foodie?
                                  </Button>
                }

      </div>
            </GridItem>
          </GridContainer>
        {/* < LoginPage /> */}
        </div>
      </div>
    );
  }
}

export default withStyles(exampleStyle)(signup);
