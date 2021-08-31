import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './landingStyle-jss';

class Title extends React.Component {
  render() {
    const {
      classes,
      title,
      desc,
      align,
      nomargin,
      monocolor
    } = this.props;
    const getAlignment = alignment => {
      switch (alignment) {
        case 'center':
          return classes.center;
        case 'right':
          return classes.right;
        default:
          return classes.left;
      }
    };
    return (
      <div
        className={
          classNames(
            classes.title,
            getAlignment(align),
            nomargin && classes.nomargin,
            monocolor ? classes.mono : classes.color
          )
        }
      >
        <Typography component="h2" variant="h4" gutterBottom>{title}</Typography>
        {desc !== '' && (<Typography component="p" variant="h5">{desc}</Typography>)}
      </div>
    );
  }
}

Title.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  align: PropTypes.string,
  nomargin: PropTypes.bool,
  monocolor: PropTypes.bool,
};

Title.defaultProps = {
  desc: '',
  align: 'left',
  nomargin: false,
  monocolor: false
};

export default withStyles(styles)(Title);
