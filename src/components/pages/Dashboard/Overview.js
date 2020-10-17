import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CustomCard from "../../common/CustomCard";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CustomChart from "../../common/CustomChart";
import { PreLoader } from "../../common/PreLoader";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  marginVertical: {
    marginTop: "10px",
    marginBottom: "10px",
  },
}));

const Overview = ({ offense }) => {
  let overviewContent;
  const classes = useStyles();

  const {
    isLoading,
    totalOffenses,
    totalHomicides,
    totalAggAssault,
    totalNFS,
    NoOfOffnsByYear,
    NoOfOffnsByClearenceGrp,
  } = offense;

  if (isLoading) {
    overviewContent = <PreLoader />;
  } else {
    overviewContent = (
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
          direction="row"
          alignItems="center"
          justify="space-evenly"
          className={classes.marginVertical}
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CustomCard title="Total Offenses" value={totalOffenses} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CustomCard title="Total Homicides" value={totalHomicides} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CustomCard
              title="Total Aggravated Assaults"
              value={totalAggAssault}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CustomCard title="Total Non-Fatal Shootings" value={totalNFS} />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          direction="row"
          alignItems="center"
          justify="flex-start"
          className={classes.marginVertical}
        >
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <CustomChart
              theme="dark2"
              axisXTitle="Years"
              typeOfChart="area"
              xValueFormatString="YYYY"
              inputData={NoOfOffnsByYear}
              axisYTitle="Number of Offences"
              title="Number of Offenses recorded in each Year"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <CustomChart
              theme="dark1"
              typeOfChart="pie"
              showInLegend="true"
              legendText="{label}"
              toolTipContent="{label}: <strong>{y}</strong>"
              indexLabel="{y}"
              indexLabelPlacement="inside"
              title="Clearence Group"
              inputData={NoOfOffnsByClearenceGrp}
            />
          </Grid>
        </Grid>
      </div>
    );
  }

  return overviewContent;
};

Overview.propTypes = {
  offense: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  offense: state.offense,
});

export default connect(mapStateToProps)(Overview);
