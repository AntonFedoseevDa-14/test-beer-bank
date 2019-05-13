export default () => ({
  listWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 870,
    '@media(max-width: 900px)': {
      maxWidth: 580,
    },
    '@media(max-width: 610px)': {
      justifyContent: 'center',
    },
  }
});
