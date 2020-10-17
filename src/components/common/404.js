import React from "react";
import { Grid } from "@material-ui/core";

export default function NotFound() {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ height: "80vh" }}
    >
      <Grid item>
        <h1>404</h1>
      </Grid>
      <Grid item>
        <span>
          Page not found for <code>{window.location.pathname}</code>
        </span>
      </Grid>
    </Grid>
  );
}
