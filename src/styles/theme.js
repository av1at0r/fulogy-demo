import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: [`"Open Sans"`, `"Segoe UI"`, `Tahoma`, `sans-serif`].join(","),
  },
  palette: {
    primary: {
      main: "#01BDA7",
    },
    secondary: {
      main: "#fff",
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
  },
});

export default theme;
