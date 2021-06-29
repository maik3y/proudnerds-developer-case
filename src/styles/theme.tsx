import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[800],
    },
    success: {
      main: green[500],
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
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
