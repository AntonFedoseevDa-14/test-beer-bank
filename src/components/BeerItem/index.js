import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Paper } from '@material-ui/core';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import GradeIcon from '@material-ui/icons/Grade';

import styles from './styles';

class BeerItem extends Component {
  static propTypes = {
    classes: PropTypes.object,
    item: PropTypes.object,
    itemOnClick: PropTypes.func,
  };

  state = {
    featured: false,
  }

  featuredIconOnClick = event => {
    event.stopPropagation();

    this.setState(state => ({ featured: !state.featured }));
  }

  itemLocalOnClick = () => {
    const { itemOnClick, item } = this.props;
    itemOnClick(item);
  };

  render() {
    const {
      state: { featured },
      props: { classes, item },
    } = this;

    const Icon = featured ? GradeIcon : GradeOutlinedIcon;

    return (
      <Paper className={classes.paper} onClick={this.itemLocalOnClick}>
        <img src={item.image_url} className={classes.image} alt="beer" />
        <div className={classes.title}>{item.name}</div>
        <div className={classes.tagline}>{item.tagline}</div>
        <Icon
          className={`${classes.featuredIcon} ${featured ? classes.iconChecked : ''}`}
          onClick={this.featuredIconOnClick}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(BeerItem);
