import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});
function MapCLButton(props) {
  const { classes } = props;
  return (
    <Button variant="contained" color="secondary" className={classes.button}>
      <SearchIcon className={classes.leftIcon} />
      Get Current Location
    </Button>
  );
}

MapCLButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapCLButton);
