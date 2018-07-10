import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { HambreLogo } from "../Logo/Logo";
import { Link } from "react-router-dom";

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

class Navbar extends Component {
  state = {
    loggedIn: false,
  };

  componentDidMount() {
    //check the JWT to see if user is logged in or out. Updates the state
    if (localStorage.tacoJwt) {
      this.setState({
        loggedIn: true,
      });
    } else {
      this.setState({
        loggedIn: true,
      });
      this.setState({
        loggedIn: false,
      });
    }
  }

  handleSignout = () => {
    // removes the JWT from the local storage and will cause the user to be signed out.
    localStorage.clear(localStorage.tacoJwt);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" style={styles.backgroundColor}>
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              <a id="logo" href="/">
                Hambre{" "}
              </a>
            </Typography>
            <div>
              {" "}
              {this.state.loggedIn ? (
                <Link to="/dashboard/owner" style={{ textDecoration: "none" }}>
                  <Button style={styles.button} color="inherit">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button style={styles.button} color="inherit">
                    Login
                  </Button>
                </Link>
              )}
            </div>
            <div>
              {" "}
              {this.state.loggedIn ? (
                <a href="/" style={{ textDecoration: "none" }}>
                  <Button
                    className="signout"
                    style={styles.button}
                    color="inherit"
                    onClick={() => {
                      this.handleSignout();
                    }}
                  >
                    SIGN OUT
                  </Button>
                </a>
              ) : (
                <Button
                  style={styles.button}
                  id="signup"
                  color="inherit"
                  href="/signup"
                >
                  Sign UP{}
                </Button>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
