import clsx from "clsx";
import React from "react";
import { useHistory } from "react-router-dom";

import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {
  List,
  Drawer,
  Divider,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    flexShrink: 0,
    width: 250,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: 250,
    background: grey[200],
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shortest,
    }),
  },
  drawerClose: {
    background: grey[200],
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1,
    },
  },
}));

export default function OurDrawer() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Drawer
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <List>
          {open ? (
            <ListItem button key="Close" onClick={handleDrawerClose}>
              <div className={classes.grow}>
                <ListItemIcon>
                  <ChevronLeftIcon />
                </ListItemIcon>
              </div>
              <ListItemText secondary="The Trace and BuzzFeed" />
            </ListItem>
          ) : (
            <ListItem
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </ListItem>
          )}
          <Divider />
          <ListItem button key="Dashboard" onClick={() => history.push("/")}>
            <div className={classes.grow}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
            </div>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button key="Search" onClick={() => history.push("/search")}>
            <div className={classes.grow}>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
            </div>
            <ListItemText primary="Search / Filter" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
