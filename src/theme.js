import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#003da5"
    },
    secondary: {
      main: "#5bc2e7"
    },
    error: {
      main: "#ed8b00"
    },
    background: {
      default: "#fff"
    }
  }
});

export default theme;
