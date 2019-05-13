import React, { Component } from 'react';

import { Provider } from './Context';
import Content from './Content';
import Api from '../../utils/api';
import { ITEMS_PER_PAGE, BEER_LIST_ID } from './constants';

class HomepageContainer extends Component {
  state = {
    beerList: [],
    initialLoading: true,
    lazyLoading: false,
  };

  lazyLoadingTimeout = null;

  componentDidMount () {
    Api.beer.getList({ page: 1, per_page: ITEMS_PER_PAGE })
      .then(response => {
        this.setState({ beerList: response.data, initialLoading: false });
        this.addLazyLoading();
      });
  }

  addLazyLoading = () => {
    document.addEventListener('scroll', () => {
      const { lazyLoading } = this.state;

      if (this.lazyLoadingTimeout) {
        clearTimeout(this.lazyLoadingTimeout);
      }

      this.lazyLoadingTimeout = setTimeout(() => {
        if (!lazyLoading && this.isLoadMore) {
          this.loadMore();
        }
      }, 100);
    });
  }

  get isLoadMore() {
    const scroll = window.scrollY || window.pageYOffset;
    const listWrapper = document.getElementById(BEER_LIST_ID);
    const boundsTop = listWrapper.getBoundingClientRect().top + scroll
    
    const viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight,
    }
    
    const bounds = {
      bottom: boundsTop + listWrapper.clientHeight,
    }

    return bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom;
  }

  loadMore = () => {
    const { beerList } = this.state;
    this.setState({ lazyLoading: true });

    const page = Math.floor(beerList.length / ITEMS_PER_PAGE) + 1;

    Api.beer.getList({ page, per_page: ITEMS_PER_PAGE })
      .then(response => {
        this.setState({
          beerList: beerList.concat(response.data),
          lazyLoading: false,
        });
      });
  }

  searchHandler = value => {
    console.log('searchHander', value);
  };

  beerOnClick = beerData => {
    console.log('beerData', beerData);
  }

  render() {
    const { initialLoading, beerList, lazyLoading } = this.state;

    return (
      <Provider
        value={{
          searchHandler: this.searchHandler,
          beerOnClick: this.beerOnClick,
        }}
      >
        <Content
          initialLoading={initialLoading}
          lazyLoading={lazyLoading}
          beerList={beerList}
          beerOnClick={this.beerOnClick}
        />
      </Provider>
    );
  }
}

export default HomepageContainer;
