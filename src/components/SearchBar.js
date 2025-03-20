import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <div className="flex space-x-2">
      <input
        type="text"
        className="p-2 text-black w-full rounded"
        placeholder="Enter stock symbol (e.g., AAPL)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="bg-blue-500 px-4 py-2 rounded"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
