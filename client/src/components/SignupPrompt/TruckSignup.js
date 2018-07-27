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
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";
import Navbar from "../Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
import ownerAPI from "../../utils/ownerAPI";
import loginPageStyle from "../SignupLogin/loginPage.jsx";

class TruckSignup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    foodType: "",
    description: "",
  };
  componentDidMount() {
    setTimeout(
      function() {
        this.scrollToForm();
      }.bind(this),
      900
    );
  }

  scrollToForm = () => {
    let mapDiv = ReactDOM.findDOMNode(document.getElementById("scrollToRef"));
    mapDiv.scrollIntoView({ behavior: "smooth" }, true);
  };

  handleChange = event => {
    const stateName = event.target.name;
    this.setState({
      [stateName]: event.target.value,
    });
  };

  handleSubmit = event => {
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
    ownerAPI.createOwner(ownerData).then(response => {
      localStorage.setItem("tacoJwt", response.data.tacoJwt);
      window.location.href = "/dashboard/owner";
    });
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
        <Grid container justify="center">
          <Grid xs={12} sm={12} md={5}>
            <Card id="scrollToRef" className="containment">
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
                        <Input name="foodType" id="foodType" fullWidth={true} />
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
                    onClick={this.handleSubmit}
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

export default withStyles(loginPageStyle)(TruckSignup);
