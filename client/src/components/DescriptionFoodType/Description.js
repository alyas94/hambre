import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/MenuItem";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Description extends React.Component {
  state = {
    foodType: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes, theme } = this.props;
    const ListOfFoodType = ["Asian", "BBQ", "Chinese", "Coffee", "Creole", "Cuban", "Dessert", "Filipino", "French", "Fusion", "German", "Greek", "Halal", "Indian", "Italian", "Jamaican", "Japanese", "Korean", "Mexican", "Middle Eastern", "Mongolian", "Pizza", "South American", "Thai", "Vegetarian", "Vietnamese", "Other"];
    const listItems = ListOfFoodType.map(list => (
      <MenuItem value={list}>{list}</MenuItem>
    ));
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            Description
          </Typography>
          <TextField
            required
            id="required"
            label="200 Characters"
            inputProps={{ maxLength: 200 }}
            multiline="true"
            fullWidth="true"
          />
          <Divider />
          <FormControl className={classes.formControl}>
            <Typography htmlFor="age-helper" variant="headline" component="h3">
              Food Type
            </Typography>
            <Select
              value={this.state.foodType}
              onChange={this.handleChange}
              input={<Input name="foodType" id="foodType" />}
            >
              {listItems}
            </Select>
            <FormHelperText>Please Pick One</FormHelperText>
          </FormControl>
        </Paper>
      </div>
    );
  }
}
Description.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Description);
