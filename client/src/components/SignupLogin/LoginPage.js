import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import TextField from "@material-ui/core/TextField";
import GridContainer from "@material-ui/core/GridContainer";
import GridItem from "@material-ui/core/GridItem";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardBody from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardFooter from "@material-ui/core/CardActions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import loginPageStyle from "./loginPage.jsx";

import ownerAPI from "../../utils/ownerAPI";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: "",
      password: "",
    };
  }

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
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

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
          <div className={classes.container}>
          <Grid container {...rest} className={classes.grid + " " + className} justify="center">
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h2>Login Page</h2>
                    </CardHeader>

                    {/*   */}
                    <CardBody>
                      <TextField
                        value={this.state.email}
                        onChange={this.handleInputChange}
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
              </GridItem>
            </GridContainer>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
