import React from "react";

const tilts = [-2, 2, -1.5];

// Unique to the Travel Journal page — most of these trips were never solo.
const TravelCompanions = ({ companions }) => (
  <section className="mb-5">
    <div className="text-center mb-5">
      <span className="washi-label">Who Comes Along</span>
      <h2 className="font-signature mt-2 mb-0" style={{ fontSize: "2.2rem", color: "var(--teal)" }}>Travel Companions</h2>
    </div>
    <div className="row g-4 justify-content-center">
      {companions.map((c, i) => (
        <div className="col-sm-4" key={c.role}>
          <div className="diary-entry-card h-100 p-4 text-center" style={{ "--tilt": `${tilts[i % tilts.length]}deg` }}>
            <div className="diary-pin"></div>
            <i className={`bi ${c.icon} text-gold-dark`} style={{ fontSize: "1.5rem" }}></i>
            <h3 className="font-signature mt-2 mb-2" style={{ fontSize: "1.6rem", color: "var(--ink)" }}>{c.role}</h3>
            <p className="text-stone small mb-0">{c.note}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TravelCompanions;
