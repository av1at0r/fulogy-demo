import { createMuiTheme } from "@material-ui/core/styles";
import defaultShadows from "@material-ui/core/styles/shadows";

// Create a theme instance.

const shadows = [...defaultShadows];
shadows[1] = `0px 4px 10px rgba(0, 0, 0, 0.15)`;

const theme = createMuiTheme({
  typography: {
    fontFamily: [`"Open Sans"`, `"Segoe UI"`, `Tahoma`, `sans-serif`].join(","),
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

export default theme;
