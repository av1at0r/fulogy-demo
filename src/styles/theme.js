import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import defaultShadows from "@material-ui/core/styles/shadows";

// Create a theme instance.

const shadows = [...defaultShadows];
shadows[1] = `0px 4px 10px rgba(0, 0, 0, 0.15)`;
export const defaultTheme = createMuiTheme({});

const theme = createMuiTheme({
  typography: {
    fontFamily: [`"Open Sans"`, `"Segoe UI"`, `Tahoma`, `sans-serif`].join(","),
    h5: {
      fontSize: defaultTheme.typography.pxToRem(30),
      lineHeight: 40 / 30,
      fontWeight: 600,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: defaultTheme.typography.pxToRem(14),
        lineHeight: 19 / 14,
      }
    },
    h6: {
      fontSize: defaultTheme.typography.pxToRem(24),
      lineHeight: 32/24,
      fontWeight: 600,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: defaultTheme.typography.pxToRem(18),
        lineHeight: 25 / 18,
      }
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: defaultTheme.typography.pxToRem(18),
      lineHeight: 24 / 18,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: defaultTheme.typography.pxToRem(14),
        lineHeight: 19 / 14,
      }
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: defaultTheme.typography.pxToRem(18),
      lineHeight: 24 / 18,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: defaultTheme.typography.pxToRem(14),
        lineHeight: 19 / 14,
      }
    },
    body1: {
      fontSize: defaultTheme.typography.pxToRem(14),
      lineHeight: 19 / 14,
      fontWeight: 400,
    },
    body2: {
      fontSize: defaultTheme.typography.pxToRem(14),
      lineHeight: 19 / 14,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: defaultTheme.typography.pxToRem(12),
        lineHeight: 16 / 12,
      }
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
