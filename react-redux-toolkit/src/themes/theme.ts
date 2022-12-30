import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#b97735',
    },
    secondary: {
      main: '#5c565c',
    },
    error: {
      main: '#623b39',
    },
    warning: {
      main: '#f7d111',
    },
    info: {
      main: '#668ba8',
    },
    success: {
      main: '#7bbf7e',
    },
  },
});
