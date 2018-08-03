import React, { Component } from "react";
import ReactDOM from "react-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardBody from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardFooter from "@material-ui/core/CardActions";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";
import Navbar from "../Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
import userAPI from "../../utils/userAPI";
import loginPageStyle from "../SignupLogin/loginPage.jsx";

class usersignup extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      foodType: "",
      description: "",
    };
  }

  handleChange = event => {
    const stateName = event.target.name;
    this.setState({
      [stateName]: event.target.value,
    });
  };

  handleSumbit = event => {
    event.preventDefault();
    if (!this.state.name) {
      return alert("Please enter a name.");
    } else if (!this.state.email) {
      return alert("Please enter an email address for your username");
    } else if (!this.state.password) {
      return alert("Please enter a password.");
    } else if (!this.state.confirmPassword) {
      return alert("Please confirm your password.");
    } else if (this.state.password != this.state.confirmPassword) {
      return alert("Your passwords do not match");
    }
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    userAPI
      .createUser(userData)
      .then(response => localStorage.setItem("userJwt", response.data.userJwt));
  };

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears

    setTimeout(
      function() {
        // scroll.scrollTo(580);
        this.scrollToForm();
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      900
    );
  }

  scrollToForm = () => {
    // console.log("click");
    let mapDiv = ReactDOM.findDOMNode(document.getElementById("scrollToRef"));
    // console.log(mapDiv);
    mapDiv.scrollIntoView({ behavior: "smooth" }, true);
    // mapDiv.scrollTop;
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container justify="center">
          <Grid xs={12} sm={12} md={5}>
            <Card id="scrollToRef" className={classes[this.state.cardAnimaton]}>
              <Paper>
                <h2 className="cardHeader">Sign Up</h2>
              </Paper>
              <form className={classes.form}>
                <CardBody>
                  <TextField
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                    id="name"
                    label="Your Name..."
                    className={classes.textField}
                    type="text"
                    margin="normal"
                    fullWidth={true}
                  />
                  <TextField
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                    name="email"
                    id="email"
                    label="Email"
                    className={classes.textField}
                    type="text"
                    margin="normal"
                    fullWidth={true}
                  />
                  <TextField
                    required
                    value={this.state.password}
                    onChange={this.handleChange}
                    name="password"
                    id="password"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth={true}
                  />
                  <TextField
                    required
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    name="confirmPassword"
                    label="Confirm Password"
                    className={classes.textField}
                    type="password"
                    margin="normal"
                    fullWidth={true}
                  />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button
                    simple
                    color="primary"
                    size="lg"
                    onClick={this.handleSumbit}
                  >
                    Get started
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(usersignup);
