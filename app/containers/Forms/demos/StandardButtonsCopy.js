import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import FileUpload from '@material-ui/icons/CloudUpload';
import KeyboardVoice from '@material-ui/icons/KeyboardVoice';
import Save from '@material-ui/icons/Save';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';


const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  field: {
    margin: `${theme.spacing.unit * 3}px 5px`,
  },
  button: {
    margin: theme.spacing.unit,
  },
  inputUpload: {
    display: 'none',
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

function doSomething(event) {
  alert(event.currentTarget.getAttribute('data-something'));
}

class StandardButtonsCopy extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid
          container
          alignItems="center"
          justify="flex-start"
          direction="row"
          spacing={16}
        >
          {/* <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Raised Button</Typography>
            <Typography className={classes.divider}>
              Raised buttons are rectangular-shaped buttons. They may be used inline. They lift and display ink reactions on press.
            </Typography>
            <Button variant="contained" className={classes.button}>
              Default
            </Button>
            <Button variant="contained" color="primary" className={classes.button}>
              Primary
            </Button>
            <Button variant="contained" color="secondary" className={classes.button}>
              Secondary
            </Button>
            <Button variant="contained" color="secondary" disabled className={classes.button}>
              Disabled
            </Button>
            <input
              accept="image/*"
              className={classes.inputUpload}
              id="raised-button-file"
              multiple
              type="file"
            />
            <Button variant="contained" component="span" className={classes.button}>
              Upload
            </Button>
          </Grid> */}
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Question 1: Solve the problem</Typography>
            <Button variant="outlined" className={classes.button}>
              Answer 1
            </Button>
            <Button variant="outlined" color="primary" className={classes.button}>
              Answer 2
            </Button>
            <Button variant="outlined" color="secondary" className={classes.button}>
              Answer 3
            </Button>
            <Button variant="outlined" color="green" className={classes.button}>
              Answer 4
            </Button>
            {/* <Button variant="outlined" href="#outlined-buttons" className={classes.button}>
              Link
            </Button>
            <input
              accept="image/*"
              className={classes.inputUpload}
              id="outlined-button-file"
              multiple
              type="file"
            />
            <Button variant="outlined" component="span" className={classes.button}>
              Upload
            </Button> */}
          </Grid>
          {/* <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Icon Button</Typography>
            <Typography className={classes.divider}>
              Icon buttons are commonly found in app bars and toolbars.
            </Typography>
            <IconButton className={classes.button} aria-label="Delete">
              <DeleteIcon />
            </IconButton>
            <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
              <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
              <Icon>alarm</Icon>
            </IconButton>
            <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
            <input accept="image/*" className={classes.inputUpload} id="icon-button-file" type="file" />
            <IconButton color="primary" className={classes.button} component="span">
              <PhotoCamera />
            </IconButton>
          </Grid> */}
          {/* <Grid
            item
            md={12}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Icon Raised Button</Typography>
            <Typography className={classes.divider}>
              Icon buttons are commonly found in app bars and toolbars.
            </Typography>
            <Button className={classes.button} variant="contained" color="secondary">
              Delete
              <DeleteIcon className={classes.rightIcon} />
            </Button>
            <Button className={classes.button} variant="contained" color="primary">
              Send
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
            <Button className={classes.button} variant="contained" color="default">
              Upload
              <FileUpload className={classes.rightIcon} />
            </Button>
            <Button className={classes.button} variant="contained" disabled color="secondary">
              <KeyboardVoice className={classes.leftIcon} />
              Talk
            </Button>
            <Button className={classes.button} variant="contained" size="small">
              <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
              Save
            </Button>
          </Grid> */}
        </Grid>
      </Fragment>
    );
  }
}

StandardButtonsCopy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StandardButtonsCopy);
