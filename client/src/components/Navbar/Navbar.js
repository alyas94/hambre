import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { HambreLogo } from "../Logo/Logo";

const styles = {
  backgroundColor: { backgroundColor: "#fffff0" },
  button: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    // borderRadius: 3,
    // border: 0,
    color: "black",
    // height: 48,
    marginTop: "30px",
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={styles.backgroundColor}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <a id="logo" href="/">
              Hambre
            </a>
          </Typography>
          <Button style={styles.button} color="inherit">
            Login
          </Button>
          <Button style={styles.button} id="signup" color="inherit" href="/signup">
            Sign UP{}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
