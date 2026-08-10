import React from "react";

const WeatherCard = ({ destination }) => {
  if (!destination || !destination.weather) return null;
  const { condition, high, low, icon } = destination.weather;

  return (
    <div className="p-4 rounded-3 h-100 text-center" style={{ background: "var(--teal)", color: "var(--sand)" }}>
      <p className="font-mono mb-1" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.75 }}>
        Weather · {destination.name}
      </p>
      <i className={`bi ${icon}`} style={{ fontSize: "2.4rem" }}></i>
      <h3 className="font-display fw-semibold h4 my-2">{condition}</h3>
      <p className="mb-0 font-mono" style={{ fontSize: "0.85rem" }}>
        H: {high}°C &nbsp;·&nbsp; L: {low}°C
      </p>
      <p className="mb-0 mt-1" style={{ fontSize: "0.7rem", opacity: 0.7 }}>Sample data — live forecast coming soon.</p>
    </div>
  );
};

export default WeatherCard;
