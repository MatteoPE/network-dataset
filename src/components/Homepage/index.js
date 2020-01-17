import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";

import { datasetsArray } from "../../constants/datasetInfo";
import Card from "../Card";

class Homepage extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Grid container spacing={4}>
          {datasetsArray.map(d => (
            <Grid key={d.url} item xs={12}>
              <Card dataset={d} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default Homepage;
