import React from "react";

const SpotlightSelector = ({ destinations, activeSlug, onSelect }) => (
  <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
    {destinations.map((d) => (
      <button
        key={d.slug}
        onClick={() => onSelect(d.slug)}
        className={`btn btn-sm ${activeSlug === d.slug ? "btn-gold" : "btn-outline-ink"}`}
      >
        {d.name}
      </button>
    ))}
  </div>
);

export default SpotlightSelector;
