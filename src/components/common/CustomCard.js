import React from "react";

import {
  Avatar,
  ListItem,
  Typography,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import { WarningRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { deepPurple, grey, deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  listDiv: {
    margin: "15px",
  },
  grow: {
    flexGrow: 1,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[300],
  },
  listItem: {
    height: "100px",
    backgroundColor: grey[100],
    "&:hover": {
      background: deepPurple[50],
    },
    borderRadius: "10px",
    border: `1px solid ${deepPurple.A200}`,
    borderLeft: `5px solid ${deepPurple.A200}`,
  },
}));

export const CustomCard = ({ title, value }) => {
  const classes = useStyles();

  return (
    <div className={classes.listDiv}>
      <ListItem button alignItems="flex-start" className={classes.listItem}>
        <ListItemAvatar>
          <Avatar className={classes.orange}>
            <WarningRounded />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant={"subtitle2"} color="textSecondary">
              {title}
            </Typography>
          }
          secondary={<Typography variant={"h6"}>{value}</Typography>}
        />
      </ListItem>
    </div>
  );
};

export default CustomCard;
