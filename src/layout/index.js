import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import { Header } from './components';
import styles from './styles';

const DefaultLayout = ({ classes, children }) => (
  <div className={classes.wrapper}>
    <Header />
    <div className={classes.pageContainer}>
      {children}
    </div>
  </div>
);

DefaultLayout.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(DefaultLayout);
