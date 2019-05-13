import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, CircularProgress } from '@material-ui/core';

import { BeerList } from '../../components';
import { TopBlock } from './components';
import { BEER_LIST_ID } from './constants';
import styles from './styles';

class HomepageContent extends Component {
  static propTypes = {
    initialLoading: PropTypes.bool,
    lazyLoading: PropTypes.bool,
    beerList: PropTypes.arrayOf(PropTypes.object),
    beerOnClick: PropTypes.func,
  };

  renderLoader = () => {
    const { classes } = this.props;

    return (
      <div className={classes.loaderWrapper}>
        <CircularProgress />
      </div>
    );
  }

  renderBeerList = () => {
    const { initialLoading, classes, beerList, beerOnClick, lazyLoading } = this.props;

    if (initialLoading) {
      return this.renderLoader();
    }

    return (
      <div className="pageContainer">
        <div className={classes.mainContentWrapper} id={BEER_LIST_ID}>
          <BeerList list={beerList} itemOnClick={beerOnClick} />
          {lazyLoading && (
            <div className={classes.lazyLoadingWrapper}>
              {this.renderLoader()}
            </div>
          )}
        </div>
      </div>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.pageContentWrapper}>
        <TopBlock />
        {this.renderBeerList()}
      </div>
    );
  }
}

export default withStyles(styles)(HomepageContent);
