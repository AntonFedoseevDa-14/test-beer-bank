export default theme => ({
  paper: {
    padding: '20px 15px 60px',
    boxShadow: '1px 1px 8px -1px rgba(0,0,0,0.3)',
    textAlign: 'center',
    width: '100%',
    maxWidth: 270,
    margin: '10px 10px',
    cursor: 'pointer',
    transition: 'box-shadow 0.3s',
    position: 'relative',
    '&:hover': {
      boxShadow: '1px 1px 10px -1px rgba(0,0,0,6)',
    }
  },
  image: {
    height: 200,
  },
  title: {
    color: theme.palette.secondary.main,
    fontSize: 26,
    margin: '10px 0',
    fontWeight: 600,
  },
  tagline: {
    fontSize: 16,
    color: '#c7c7c7',
  },
  featuredIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
    cursor: 'pointer',
    color: '#c1c1c1',
  },
  iconChecked: {
    color: theme.palette.secondary.main,
  },
});
