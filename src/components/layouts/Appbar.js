import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationImportantRounded from "@material-ui/icons/NotificationImportantRounded";
import {
  Grid,
  AppBar,
  Toolbar,
  Tooltip,
  Typography,
  IconButton,
  Hidden,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  appBar: {
    color: "black",
    background: grey[200],
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
}));

const Appbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar variant="dense">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item className={classes.grow}>
            <Typography variant="h6">Analysis of Local Police Data</Typography>
          </Grid>
          <Hidden only={["xs"]}>
            <Grid item>
              <Tooltip title="Notifications">
                <IconButton color="inherit">
                  <NotificationImportantRounded />
                </IconButton>
              </Tooltip>
              <Tooltip title="Your Profile">
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
              </Tooltip>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
