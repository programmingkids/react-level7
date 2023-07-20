import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import { deepPurple } from '@mui/material/colors';
import { teal } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette : {
    mode: 'light',
    primary : {
      main: deepPurple.A400,
      light: deepPurple.A200,
      dark: deepPurple.A700,
    },
    secondary: {
      main: teal.A400,
      light: teal.A200,
      dark: teal.A700,
    },
    background: {
      default : '#ececec',
    },
    iconButtonLink: {
      main: pink.A400,
      light: pink.A200,
      dark: pink.A700,
      contrastText: 'white',
    },
  },
  typography : {
    subtitle1: {
      fontSize: 24,
    },
    subtitle2: {
      fontSize: 14,
    },
    subtitle3: {
      fontSize: 18,
      color:'white',
      fontWeight: 'normal',
    },
  },
});

export const AppTheme = (props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {props.children}
  </ThemeProvider>
);
