import React from "react";
import CanvasJSReact from "../../assets/canvasjs.react";

const { CanvasJSChart } = CanvasJSReact;

const CustomChart = ({
  title,
  theme,
  inputData,
  axisYTitle,
  axisXTitle,
  typeOfChart,
  showInLegend,
  legendText,
  indexLabel,
  toolTipContent,
  indexLabelPlacement,
  xValueFormatString,
}) => {
  const options = {
    theme,
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: title,
    },
    axisY: {
      title: axisYTitle,
    },
    axisX: {
      title: axisXTitle,
    },
    data: [
      {
        type: typeOfChart,
        xValueFormatString,
        showInLegend,
        legendText,
        toolTipContent,
        indexLabel,
        indexLabelPlacement,
        dataPoints: inputData,
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default CustomChart;
