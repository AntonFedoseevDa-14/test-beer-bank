import { createMuiTheme } from '@material-ui/core/styles';

const globalTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#565050',
    },
    secondary: {
      main: '#ff9800',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default globalTheme;
