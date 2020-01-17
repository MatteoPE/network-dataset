import React, { Component } from "react";
import {
  Card as MUICard,
  CardHeader,
  Typography,
  CardContent,
  CardActions,
  Button,
  Link
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  description: {
    whiteSpace: "pre-wrap"
  },
  card: {
    backgroundColor: theme.palette.secondary.light
  }
});

class Card extends Component {
  render() {
    const { url, title, description } = this.props.dataset;

    const { classes } = this.props;

    return (
      <MUICard className={classes.card}>
        <CardHeader
          title={
            <Typography variant="h4" color="primary">
              {title}
            </Typography>
          }
        ></CardHeader>
        <CardContent>
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.description}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link underline="none" href={url}>
            <Button variant="contained" color="primary">
              GO THERE!
            </Button>
          </Link>
        </CardActions>
      </MUICard>
    );
  }
}

export default withStyles(styles)(Card);
