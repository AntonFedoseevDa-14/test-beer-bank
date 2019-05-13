export default theme => ({
  wrapper: {
    backgroundColor: theme.palette.secondary.main,
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  listItem: {
    width: 'auto',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: 12,
  },
});
