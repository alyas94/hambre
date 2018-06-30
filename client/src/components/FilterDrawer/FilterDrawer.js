import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from '@material-ui/core';
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
    },
    button: {
      marginLeft: 5
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});

class FilterDrawer extends React.Component {
  state = {
    open: false,
    anchor: 'left',
    Mexican: false,
    Indian: false,
     Asian: false,
  };
  
handleChange = name => event => {
      this.setState({
          [name]: event.target.checked
      });
  };
    
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        < div className = {
            classes.drawerHeader
        } > <h4 > Filters </h4>
          <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    
          </IconButton>
        </div>
        <Divider />
       <FormControl component="fieldset">
        <FormLabel component="legend"> Food Type</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.Mexican}
                onChange={this.handleChange("Mexican")}
                value="Mexican"
              />
            }
            label="Mexican"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.Indian}
                onChange={this.handleChange("Indian")}
                value="Indian"
              />
            }
            label="Indian"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.antoine}
                onChange={this.handleChange("Asian")}
                value="Asian"
              />
            }
            label="Asian"
          />
        </FormGroup>
      </FormControl>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
            <Toolbar disableGutters={!open}>
              <Button
               variant = "contained"
                size = "medium"
                color = "primary"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.button, open && classes.hide)}
              >
                Filters
              </Button>
            </Toolbar>
          {before}
          {after}
        </div>
      </div>
    );
  }
}

FilterDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FilterDrawer);