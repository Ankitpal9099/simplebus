import React from "react";
import "./BusCard.css";

const BusCard = ({ bus, distance }) => {
  const emptySeats = bus.totalSeats - bus.occupiedSeats;
  const standingAvailable = bus.standingCapacity - bus.occupiedStanding;

  return (
    <div className="bus-card">
      <h3>Bus {bus.number}</h3>
      <p>Route: {bus.route}</p>
      <div className={`crowd-indicator ${bus.crowdLevel}`}>
        Crowd Level: {bus.crowdLevel.toUpperCase()}
      </div>
      {bus.isFull && <div className="full-indicator">Bus Full</div>}
      <p>Empty Seats: {emptySeats}</p>
      <p>Standing Space Available: {standingAvailable > 0 ? standingAvailable : "None"}</p>
      <p>Rush Hour Crowd: {bus.rushHourCrowd.toUpperCase()}</p>
      {distance && <p>Distance: {distance} km</p>}
    </div>
  );
};

export default BusCard;
