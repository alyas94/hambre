import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import TruckLogo from "@material-ui/icons/LocalShipping";
// core components
// import Header from "./components/Header/Header.jsx";
// import HeaderLinks from "./components/Header/HeaderLinks.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import GridContainer from "./components/Grid/GridContainer.jsx";
import GridItem from "./components/Grid/GridItem.jsx";
import Button from "./components/CustomButtons/Button.jsx";
import Card from "./components/Card/Card.jsx";
import CardBody from "./components/Card/CardBody.jsx";
import CardHeader from "./components/Card/CardHeader.jsx";
import CardFooter from "./components/Card/CardFooter.jsx";
import CustomInput from "./components/CustomInput/CustomInput.jsx";

import loginPageStyle from "./loginPage.jsx";

import ownerAPI from "../../utils/ownerAPI";

import SignUpPrompt from "../SignupPrompt/Login-Signup";

class TruckSignUP extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      foodType: "",
      description: "",
    };
  }

  // handleChange = name => event => {
  //     this.setState({
  //         [name]: event.target.checked
  //     });
  // };

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
    } else if (!this.state.foodType) {
      return alert("Please enter the type of food you serve.");
    } else if (!this.state.description) {
      return alert("Please give us a brief description of your food truck.");
    } else if (this.state.password != this.state.confirmPassword) {
      return alert("Your passwords do not match");
    }
    const ownerData = {
      truckName: this.state.name,
      email: this.state.email,
      password: this.state.password,
      foodType: this.state.foodType,
      description: this.state.description,
    };
    ownerAPI
      .createOwner(ownerData)
      .then(response => localStorage.setItem("tacoJwt", response.data.tacoJwt));
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
        <SignUpPrompt />
        <div
          className={classes.pageHeader}
          style={{
            // backgroundImage: "url(" + image + ")",
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
                      <h2>Sign Up</h2>
                    </CardHeader>

                    {/*   */}
                    <CardBody>
                      <input
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name"
                        type="text"
                        placeholder="Name"
                      />
                      <br />
                      <input
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                        type="text"
                        placeholder="Email"
                      />
                      <br />
                      <input
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                        type="text"
                        placeholder="Password"
                      />
                      <br />
                      <input
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        name="confirmPassword"
                        type="text"
                        placeholder="Confirm Password"
                      />
                      <br />
                      <input
                        value={this.state.foodType}
                        onChange={this.handleChange}
                        name="foodType"
                        type="text"
                        placeholder="Food Type"
                      />
                      <br />
                      <input
                        value={this.state.description}
                        onChange={this.handleChange}
                        name="description"
                        type="text"
                        placeholder="Give us a Description"
                      />
                      <br />
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
              </GridItem>
            </GridContainer>
          </div>
          {/* <Footer whiteFont /> */}
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(TruckSignUP);
