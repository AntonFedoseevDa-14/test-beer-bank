import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import SearchBlock from '../SearchBlock';
import styles from './styles';

const TopBlock = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.pageTitle}>The Beer Bank</div>
    <div className={classes.subTitle}>Find your favorite beer here</div>
    <SearchBlock />
  </div>
);

TopBlock.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(TopBlock);
