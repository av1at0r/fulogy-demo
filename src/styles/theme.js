import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import defaultShadows from "@material-ui/core/styles/shadows";

// Create a theme instance.

const shadows = [...defaultShadows];
shadows[1] = `0px 4px 10px rgba(0, 0, 0, 0.15)`;
const defaultTheme = createMuiTheme({});

const theme = createMuiTheme({
  typography: {
    fontFamily: [`"Open Sans"`, `"Segoe UI"`, `Tahoma`, `sans-serif`].join(","),
    h5: {
      fontSize: '1.875rem',
      lineHeight: 16 / 40,
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.5rem',
      lineHeight: 2,
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: 24 / 16,
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 24 / 16,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '0.875rem',
      }
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 19 / 16,
      fontWeight: 400,
    },
    body2: {
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 19 / 16,
    }
  },
  palette: {
    primary: {
      main: "#01BDA7",
      contrastText: "#fff",
    },
    secondary: {
      main: "#1A78C2",
      contrastText: "#fff",
    },
    error: {
      main: "#EB5757",
    },
    background: {
      default: "#fff",
    },
    text: {
      secondary: "#fff",
    },
    grey: {
      c70: `rgba(49, 49, 49, 0.7)`,
      c70: `rgba(49, 49, 49, 0.7)`,
    },
  },
  shape: {
    borderRadius: 10,
  },
  shadows,
});

export default responsiveFontSizes(theme);
