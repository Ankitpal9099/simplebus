import React, { useState } from "react";
import "./App.css";
import buses from "./mockData";
import BusCard from "./BusCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBuses, setFilteredBuses] = useState(buses);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = buses.filter(
      (bus) =>
        bus.number.toLowerCase().includes(term) ||
        bus.route.toLowerCase().includes(term),
    );
    setFilteredBuses(filtered);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Public Bus Crowd Visibility</h1>
        <p>Check bus crowd levels before boarding</p>
        <input
          type="text"
          placeholder="Search by bus number or route..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </header>
      <main className="bus-list">
        {filteredBuses.map((bus) => (
          <BusCard key={bus.id} bus={bus} />
        ))}
      </main>
    </div>
  );
}

export default App;
