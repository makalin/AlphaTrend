import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "tailwindcss/tailwind.css";
import axios from "axios";

const AlphaTrend = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(null);
  const [chartData, setChartData] = useState(null);

  const fetchFinanceData = async () => {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${searchTerm}&interval=5min&apikey=demo`
      );
      
      const timeSeries = response.data["Time Series (5min)"];
      if (!timeSeries) return;
      
      const labels = Object.keys(timeSeries).slice(0, 10).reverse();
      const prices = labels.map(time => parseFloat(timeSeries[time]["1. open"]));
      
      setChartData({
        labels,
        datasets: [
          {
            label: "Stock Price",
            data: prices,
            borderColor: "#4CAF50",
            backgroundColor: "rgba(76, 175, 80, 0.2)",
          },
        ],
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching finance data", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">AlphaTrend - Finance Search</h1>
      <input
        type="text"
        className="p-2 text-black w-full rounded"
        placeholder="Enter stock symbol (e.g., AAPL)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="bg-blue-500 px-4 py-2 mt-2 rounded"
        onClick={fetchFinanceData}
      >
        Search
      </button>
      {chartData && (
        <div className="mt-4">
          <Line data={chartData} />
        </div>
      )}
    </div>
  );
};

export default AlphaTrend;
