import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import BeerItem from '../BeerItem';
import styles from './styles';

const BeerList = ({ classes, list, itemOnClick }) => (
  <div className={classes.listWrapper}>
    {list.map(item => (
      <BeerItem item={item} key={item.id} itemOnClick={itemOnClick} />
    ))}
  </div>
);

BeerList.propTypes = {
  classes: PropTypes.object,
  list: PropTypes.array,
  itemOnClick: PropTypes.func,
};

export default withStyles(styles)(BeerList);
