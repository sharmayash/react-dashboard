import * as d3 from "d3";
import data from "../assets/offenses-standardized.csv";

const loadCSVData = async () => {
  const offenses = await d3.csv(data);
  const totalNoOfOffns = await offenses.length;

  // Aggravated Assault

  const GunAggAssault = await offenses.filter(
    (o) => o["offense_group"] === "Agg Assault - Gun"
  ).length;
  const OtherAggAssault = await offenses.filter(
    (o) => o["offense_group"] === "Agg Assault - Other Weapon"
  ).length;
  const totalAggAssault = GunAggAssault + OtherAggAssault;

  // Homicides

  const GunHomicides = await offenses.filter(
    (o) => o["offense_group"] === "Homicide - Gun"
  ).length;
  const OtherHomicides = await offenses.filter(
    (o) => o["offense_group"] === "Homicide - Other Weapon"
  ).length;
  const totalHomicides = GunHomicides + OtherHomicides;

  // Non-Fatal Shooting

  const totalNFS = await offenses.filter(
    (o) => o["offense_group"] === "Non-Fatal Shooting"
  ).length;

  // Get no. of offenses by year

  let groupYearWithNoOfOffns = await offenses.reduce((acc, obj) => {
    let key = obj["occurred_date"].slice(0, 4);

    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key] += 1;

    return acc;
  }, {});

  const convertToArr = await Object.keys(groupYearWithNoOfOffns).map((el) => ({
    x: new Date(el),
    y: groupYearWithNoOfOffns[el],
  }));

  // Get no. of offenses by clearence categories

  let noOfOffnsByclearenceGrp = await offenses.reduce((acc, currObj) => {
    let key = currObj["clearance_group"];

    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key] += 1;

    return acc;
  }, {});

  const convertToArr2 = await Object.keys(noOfOffnsByclearenceGrp).map(
    (el) => ({
      label: el,
      y: noOfOffnsByclearenceGrp[el],
    })
  );

  return {
    totalNFS,
    convertToArr,
    convertToArr2,
    totalNoOfOffns,
    totalHomicides,
    totalAggAssault,
  };
};

export default loadCSVData;
