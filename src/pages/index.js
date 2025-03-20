import React, { useState } from "react";
import AlphaTrend from "../components/AlphaTrend";
import SearchBar from "../components/SearchBar";
import ChartDisplay from "../components/ChartDisplay";
import { fetchFinanceData } from "../utils/apiClient";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [chartData, setChartData] = useState(null);

  const handleSearch = async () => {
    const data = await fetchFinanceData(searchTerm);
    setChartData(data);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">AlphaTrend - Finance Search</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
      <ChartDisplay chartData={chartData} />
    </div>
  );
}
