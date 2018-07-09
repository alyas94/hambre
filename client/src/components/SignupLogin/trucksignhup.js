import React from "react";
import ReactDOM from "react-dom";
// import * as Scroll from "react-scroll";
// import {
//   Link,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller,
// } from "react-scroll";
// @material-ui/core components
import GridContainer from "./components/Grid/GridContainer.jsx";
import GridItem from "./components/Grid/GridItem.jsx";
import Button from "./components/CustomButtons/Button.jsx";
import Card from "./components/Card/Card.jsx";
import CardBody from "./components/Card/CardBody.jsx";
import CardHeader from "./components/Card/CardHeader.jsx";
import CardFooter from "./components/Card/CardFooter.jsx";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Footer from "../Footer/Footer";
import ArrowUp from "@material-ui/icons/KeyboardArrowUp";

import loginPageStyle from "./loginPage.jsx";

import ownerAPI from "../../utils/ownerAPI";

import SignUpPrompt from "../SignupPrompt/Login-Signup";
import { FormInput } from "./components/input/FormInput";

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
    const ListOfFoodType = [
      "Asian",
      "BBQ",
      "Chinese",
      "Coffee",
      "Creole",
      "Cuban",
      "Dessert",
      "Filipino",
      "French",
      "Fusion",
      "German",
      "Greek",
      "Halal",
      "Indian",
      "Italian",
      "Jamaican",
      "Japanese",
      "Korean",
      "Mexican",
      "Middle Eastern",
      "Mongolian",
      "Pizza",
      "South American",
      "Thai",
      "Vegetarian",
      "Vietnamese",
      "Other",
    ];
    const listItems = ListOfFoodType.map(list => (
      <MenuItem value={list}>{list}</MenuItem>
    ));
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
            <GridContainer id="scrollToRef" justify="center">
              <GridItem xs={12} sm={12} md={5}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h2>Sign Up</h2>
                    </CardHeader>

                    {/*   */}
                    <CardBody>
                      <TextField
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name"
                        id="name"
                        label="Truck Name"
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
                      <TextField
                        required
                        value={this.state.description}
                        onChange={this.handleChange}
                        name="description"
                        id="description"
                        label="Description"
                        inputProps={{ maxLength: 200 }}
                        multiline={true}
                        fullWidth={true}
                      />
                      <FormControl className={classes.formControl}>
                        <InputLabel>Food Type </InputLabel>
                        <Select
                          fullWidth={true}
                          value={this.state.foodType}
                          onChange={this.handleChange}
                          input={
                            <Input
                              name="foodType"
                              id="foodType"
                              fullWidth={true}
                            />
                          }
                        >
                          {listItems}
                        </Select>
                        <FormHelperText>Please Select One</FormHelperText>
                      </FormControl>
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
            {/* <Button
              // onClick={() => {
              //   this.scrollToTop;
              // }}
              style={{
                position: "absolute",
                bottom: "5%",
                right: "20%",
              }}
              variant="fab"
              color="primary"
              aria-label="Arrow"
              className={classes.button}
            >
              <ArrowUp />
            </Button> */}
          </div>
          {/* <Footer whiteFont /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(TruckSignUP);
