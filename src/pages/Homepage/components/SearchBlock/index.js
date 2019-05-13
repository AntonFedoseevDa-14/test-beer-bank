import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles, TextField } from '@material-ui/core';

import { withParentData } from '../../Context';
import styles from './styles';

class SearchBlock extends Component {
  static propTypes = {
    classes: PropTypes.object,
    searchHandler: PropTypes.func,
  };

  state = {
    value: '',
  };

  onChange = event => this.setState({ value: event.target.value });

  onKeyPress = event => {
    if (event.key !== 'Enter') {
      return;
    }

    const {
      state: { value },
      props: { searchHandler },
    } = this;

    searchHandler(value)
    this.setState({ value: '' });
  };

  render() {
    const {
      state: { value },
      props: { classes },
    } = this;

    return (
      <div className={classes.wrapper}>
        <TextField
          fullWidth
          variant="outlined"
          value={value}
          InputProps={{
            classes: {
              root: classes.inputRoot,
              input: classes.inputField,
            }
          }}
          // eslint-disable-next-line
          inputProps={{ onKeyPress: this.onKeyPress }}
          onChange={this.onChange}
          placeholder="Search for beer name"
        />
      </div>
    );
  }
}

const withStylesHoc = withStyles(styles);

export default compose(
  withStylesHoc,
  withParentData,
)(SearchBlock);
