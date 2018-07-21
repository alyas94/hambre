import React, { Component } from "react";
import ReactDOM from "react-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardBody from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardFooter from "@material-ui/core/CardActions";
import Paper from "@material-ui/core/Typography";
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ownerAPI from "../utils/ownerAPI";
import loginPageStyle from "../components/SignupLogin/loginPage.jsx";

class LoginPage extends Component {
  state = {
    // cardAnimaton: "cardHidden",
    email: "",
    password: "",
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.checked,
    });
  };

  handleInputChange = event => {
    const stateName = event.target.name;
    this.setState({
      [stateName]: event.target.value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    ownerAPI
      .login(data)
      .then(response => {
        localStorage.setItem("tacoJwt", response.data.tacoJwt);
        window.location.href = "/dashboard/owner";
      })
      .catch(e =>
        alert(
          "Your email or password is incorrect.\n\rEmail is case sensitive. We're working on that still.\n\rSorry about that.\n\rPasswords are always case senstive."
        )
      );
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
    let mapDiv = ReactDOM.findDOMNode(document.getElementById("scrollToRef"));
    mapDiv.scrollIntoView({ behavior: "smooth" }, true);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Navbar />
        <div
          className={classes.pageHeader}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <Grid
            container
            className={classes.grid + " " + classes.container}
            justify="center"
          >
            <Card id="scrollToRef" className={classes.card + " containment"}>
              <Paper>
                <h2 className="cardHeader">Login Page</h2>
              </Paper>
              <form className={classes.form}>
                <CardBody>
                  <TextField
                    value={this.state.email}
                    onCahnge={this.handleInputChange}
                    name="email"
                    type="text"
                    placeholder="Email"
                    className={classes.textField}
                    margin="normal"
                    fullWidth={true}
                  />
                  <br />
                  <TextField
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    id="password"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth={true}
                  />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button
                    simple
                    color="primary"
                    size="lg"
                    onClick={this.handleFormSubmit}
                  >
                    Submit
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </Grid>
        </div>
      </div>
    );
  }
}
export default withStyles(loginPageStyle)(LoginPage);
