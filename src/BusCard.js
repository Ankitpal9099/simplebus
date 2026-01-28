import React from "react";
import "./BusCard.css";

const BusCard = ({ bus }) => {
  return (
    <div className="bus-card">
      <h3>Bus {bus.number}</h3>
      <p>Route: {bus.route}</p>
      <div className={`crowd-indicator ${bus.crowdLevel}`}>
        Crowd Level: {bus.crowdLevel.toUpperCase()}
      </div>
    </div>
  );
};

export default BusCard;
