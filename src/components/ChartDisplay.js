import React from "react";
import { Line } from "react-chartjs-2";

const ChartDisplay = ({ chartData }) => {
  return (
    <div className="mt-4">
      {chartData ? <Line data={chartData} /> : <p>No data available</p>}
    </div>
  );
};

export default ChartDisplay;
