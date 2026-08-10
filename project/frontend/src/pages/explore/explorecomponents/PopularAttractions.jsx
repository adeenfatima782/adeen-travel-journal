import React from "react";

const PopularAttractions = ({ destination }) => {
  if (!destination || !destination.attractions) return null;
  return (
    <div className="p-4 rounded-3 h-100" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
      <h3 className="font-display fw-semibold h5 mb-1">
        <i className="bi bi-pin-map me-2 text-gold-dark"></i>Popular Attractions
      </h3>
      <p className="text-stone small mb-3">In and around {destination.name}.</p>
      <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
        {destination.attractions.map((a) => (
          <li key={a} className="d-flex align-items-center gap-2">
            <i className="bi bi-geo-alt-fill text-gold" style={{ fontSize: "0.85rem" }}></i>
            <span>{a}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularAttractions;
