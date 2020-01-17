import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">Network Datasets Collection</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
