import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import frog from "./frog.jpg";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 600,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
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
  imageLabel: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 200}px`,
    position: "inherit",
    fontSize: 45,
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
    url: frog,
    title: "Let's Go Back",
    label: "Error: Page Not Found!",
    width: "100%",
    path: "/",
  },
];

class Error extends React.Component {
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
              <Typography
                component="span"
                variant="heading"
                className={classes.imageLabel}
              >
                {image.label}
              </Typography>

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
        <Footer />
      </div>
    );
  }
}

Error.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Error);
