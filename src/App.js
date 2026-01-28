import React, { useState, useEffect } from "react";
import "./App.css";
import buses from "./mockData";
import BusCard from "./BusCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBuses, setFilteredBuses] = useState(buses);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location obtained:", position.coords);
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Location access denied or unavailable. Please allow location access and try again.");
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

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
        <button onClick={getUserLocation} className="location-btn">
          Update Location
        </button>
      </header>
      <main className="bus-list">
        {filteredBuses.map((bus) => {
          const distance = userLocation
            ? calculateDistance(userLocation.lat, userLocation.lng, bus.lat, bus.lng).toFixed(2)
            : null;
          return <BusCard key={bus.id} bus={bus} distance={distance} />;
        })}
      </main>
    </div>
  );
}

export default App;
