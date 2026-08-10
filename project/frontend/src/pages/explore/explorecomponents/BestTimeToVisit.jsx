import React, { useState } from "react";

const seasons = ["Spring", "Summer", "Winter"];

const BestTimeToVisit = ({ destination }) => {
  const [active, setActive] = useState("Summer");
  if (!destination) return null;

  const note = destination.seasonalGuide?.[active];

  return (
    <section className="mb-5">
      <div className="text-center mb-4">
        <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Plan Around The Weather
        </p>
        <h2 className="font-display fw-semibold h3 mb-0">Best Time To Visit {destination.name}</h2>
        <p className="text-stone small mt-1">Overall best time: {destination.bestTime || "Year-round"}</p>
      </div>
      <div className="d-flex justify-content-center gap-2 mb-4">
        {seasons.map((s) => (
          <button key={s} onClick={() => setActive(s)} className={`btn btn-sm ${active === s ? "btn-gold" : "btn-outline-ink"}`}>
            {s}
          </button>
        ))}
      </div>
      <div className="p-4 rounded-3 text-center" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
        <p className="mb-0 text-stone">
          {note || `No specific ${active} notes added yet for ${destination.name}.`}
        </p>
      </div>
    </section>
  );
};

export default BestTimeToVisit;
