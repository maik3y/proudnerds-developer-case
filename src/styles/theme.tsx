import { createMuiTheme } from '@material-ui/core/styles';
import { amber, yellow, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[600],
    },
    secondary: {
      main: red[500],
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '1.6rem',
      fontWeight: 'bold',
      color: amber[500],
    },
    body1: {
      fontSize: '1.4rem',
      color: '#ffffff',
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
