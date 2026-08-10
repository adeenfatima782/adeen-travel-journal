import React from "react";

const types = ["All", "Mountains", "Valleys", "Lakes", "Plains"];
const budgets = ["All", "Budget", "Mid-range", "Luxury"];

const DestinationFilters = ({ activeType, setActiveType, activeBudget, setActiveBudget }) => (
  <div className="mb-5">
    <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
      {types.map((t) => (
        <button
          key={t}
          className={`btn btn-sm ${activeType === t ? "btn-gold" : "btn-outline-ink"}`}
          onClick={() => setActiveType(t)}
        >
          {t}
        </button>
      ))}
    </div>
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
      <span className="font-mono text-stone" style={{ fontSize: "0.72rem", textTransform: "uppercase" }}>Budget:</span>
      {budgets.map((b) => (
        <button
          key={b}
          className={`btn btn-sm ${activeBudget === b ? "btn-gold" : "btn-outline-ink"}`}
          onClick={() => setActiveBudget(b)}
        >
          {b}
        </button>
      ))}
    </div>
  </div>
);

export default DestinationFilters;
