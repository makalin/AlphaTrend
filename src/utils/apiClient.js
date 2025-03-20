import axios from "axios";

const API_KEY = "demo"; // Replace with your Alpha Vantage API key
const BASE_URL = "https://www.alphavantage.co/query";

export const fetchFinanceData = async (symbol) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: "TIME_SERIES_INTRADAY",
        symbol,
        interval: "5min",
        apikey: API_KEY,
      },
    });

    const timeSeries = response.data["Time Series (5min)"];
    if (!timeSeries) return null;

    const labels = Object.keys(timeSeries).slice(0, 10).reverse();
    const prices = labels.map((time) => parseFloat(timeSeries[time]["1. open"]));

    return {
      labels,
      datasets: [
        {
          label: "Stock Price",
          data: prices,
          borderColor: "#4CAF50",
          backgroundColor: "rgba(76, 175, 80, 0.2)",
        },
      ],
    };
  } catch (error) {
    console.error("Error fetching finance data", error);
    return null;
  }
};
