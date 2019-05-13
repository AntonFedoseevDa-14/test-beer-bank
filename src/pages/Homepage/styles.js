export default () => ({
  pageContentWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  loaderWrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContentWrapper: {
    padding: '60px 15px',
    '@media(max-width: 900px)': {
      padding: '40px 15px',
    },
    '@media(max-width: 610px)': {
      padding: '20px 15px',
    },
  },
  lazyLoadingWrapper: {
    height: 100,
    display: 'flex',
  },
});
