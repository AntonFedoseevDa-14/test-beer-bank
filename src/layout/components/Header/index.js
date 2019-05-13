import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, withStyles } from '@material-ui/core';

import styles from './styles';

const headerNavigation = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Favorite',
    onClick: event => { event.preventDefault(); console.log('Favourite clicked') },
  }
];

const Header = ({ classes }) => (
  <List component="nav" classes={{ root: classes.wrapper }}>
    {headerNavigation.map(item => (
      <ListItem
        key={item.label}
        button
        component="a"
        {...item}
        classes={{ root: classes.listItem}}
      >
        {item.label}
      </ListItem>
    ))}
  </List>
);

Header.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Header);
