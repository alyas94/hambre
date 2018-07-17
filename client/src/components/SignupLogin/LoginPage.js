import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
// core components
// import Header from "./components/Header/Header.jsx";
// import HeaderLinks from "./components/Header/HeaderLinks.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import TextField from "@material-ui/core/TextField";
import GridContainer from "./components/Grid/GridContainer.jsx";
import GridItem from "./components/Grid/GridItem.jsx";
import Button from "./components/CustomButtons/Button.jsx";
import Card from "./components/Card/Card.jsx";
import CardBody from "./components/Card/CardBody.jsx";
import CardHeader from "./components/Card/CardHeader.jsx";
import CardFooter from "./components/Card/CardFooter.jsx";
import CustomInput from "./components/CustomInput/CustomInput.jsx";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import loginPageStyle from "./loginPage.jsx";

import ownerAPI from "../../utils/ownerAPI";
import userAPI from "../../utils/userAPI";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: "",
      password: "",
      userType: "",
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

    // ownerAPI
    //   .login(data)
    //   .then(response => {
    //     localStorage.setItem("tacoJwt", response.data.tacoJwt);
    //     window.location.href = "/dashboard/owner";
    //   })
    //   .catch(e =>
    //     alert(
    //       "Your email or password is incorrect.\n\rEmail is case sensitive. We're working on that still.\n\rSorry about that.\n\rPasswords are always case senstive."
    //     )
    //   );

    userAPI
      .login(data)
      .then(response => {
        localStorage.setItem("tacoJwt", response.data.tacoJwt);
        window.location.href = "/";
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
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
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
