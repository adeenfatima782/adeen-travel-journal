import React from "react";

const TravelGoals = ({ goals }) => (
  <section className="mb-5">
    <div className="text-center mb-5">
      <span className="washi-label">Looking Ahead</span>
      <h2 className="font-signature mt-2 mb-0" style={{ fontSize: "2.2rem", color: "var(--teal)" }}>My Travel Goals</h2>
    </div>
    <div className="row g-3 justify-content-center">
      {goals.map((g) => (
        <div className="col-sm-6 col-lg-4" key={g.label}>
          <div className="d-flex align-items-center gap-3 p-3 rounded-1" style={{ background: "#fffdf8", borderBottom: "2px dashed rgba(31,75,76,0.25)" }}>
            <i className={`bi ${g.icon} text-gold-dark`} style={{ fontSize: "1.2rem" }}></i>
            <p className="font-display fw-medium small mb-0" style={{ fontStyle: "italic" }}>{g.label}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TravelGoals;
