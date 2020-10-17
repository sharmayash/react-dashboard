import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

// actions & other functions
import loadCSVData from "../../../helpers/loadData";
import { loadData } from "../../../redux/actions/offenseActions";

// components
import Overview from "./Overview";
import Appbar from "../../layouts/Appbar";
import OurDrawer from "../../layouts/OurDrawer";

const useStyles = makeStyles(() => ({
  home: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
}));

export const DashBoard = ({ loadData }) => {
  const classes = useStyles();

  useEffect(() => {
    loadCSVData().then((res) => loadData(res));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.home}>
      <OurDrawer />
      <div className={classes.grow}>
        <Appbar />
        <Overview />
      </div>
    </div>
  );
};

DashBoard.propTypes = {
  loadData: PropTypes.func.isRequired,
  // offense: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  // offense: state.offense,
});

const mapDispatchToProps = {
  loadData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
