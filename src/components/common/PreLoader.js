import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";

export const PreLoader = () => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ height: "80vh" }}
    >
      <Grid item>
        <CircularProgress color="secondary" />
      </Grid>
      <Grid item>
        <h3>Loading ...</h3>
      </Grid>
    </Grid>
  );
};
