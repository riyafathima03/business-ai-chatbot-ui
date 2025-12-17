import React from "react";

const services = [
  "King and Moffat",
  "Priority-4PS",
  "P6 Primavera6",
  "ACC",
  "Plant",
  "Asta"
];

export default function Sidebar({ activeService, setActiveService }) {
  return (
    <div className="sidebar">
      <h4>Categories</h4>

      {services.map((service) => (
        <div
          key={service}
          className={`sys ${activeService === service ? "active" : ""}`}
          onClick={() => setActiveService(service)}
        >
          {service}
        </div>
      ))}
    </div>
  );
}
