import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
// import TruckSignup from "../components/SignupLogin/TruckSignup";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 400,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 200,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.5,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`,
    fontSize: 35,
    color: theme.palette.common.white,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
});

const images = [
  {
    url: require("../img/sliders.jpg"),
    title: "Are you a Foodie?",
    width: "50%",
    path: "/signup-user",
  },
  {
    url: require("../img/truckOwner.jpeg"),
    title: "Are you a Truck Owner?",
    width: "50%",
    path: "/signup-truck",
  },
];

const SignUpPrompt =(props)=> {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Navbar />
        <div className={classes.root}>
          {images.map(image => (
            <ButtonBase
              focusRipple
              key={image.title}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: image.width,
              }}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Link to={image.path} style={{ textDecoration: "none" }}>
                  <Typography
                    component="span"
                    variant="subheading"
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                </Link>
              </span>
            </ButtonBase>
          ))}
        </div>
      </div>
    );
  }
}

SignUpPrompt.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpPrompt);
