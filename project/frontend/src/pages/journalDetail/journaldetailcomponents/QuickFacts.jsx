import React from "react";

const QuickFacts = ({ facts }) => (
  <section className="mb-5">
    <span className="washi-tag mb-3"><i className="bi bi-info-circle"></i>Quick Facts</span>
    <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-md-start mt-3">
      {[
        { icon: "bi-arrow-up", label: "Altitude", value: facts.altitude },
        { icon: "bi-signpost-2", label: "Distance", value: facts.distance },
        { icon: "bi-graph-up", label: "Difficulty", value: facts.difficulty },
        { icon: "bi-calendar3", label: "Best Time", value: facts.bestTime },
      ].map((f, i) => (
        <div
          key={f.label}
          className="postmark"
          style={{ position: "relative", top: 0, right: "auto", transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 6}deg)`, width: "6rem", height: "6rem" }}
        >
          <i className={`bi ${f.icon}`} style={{ fontSize: "0.9rem" }}></i>
          <span className="postmark-value" style={{ fontSize: "0.72rem", textAlign: "center", lineHeight: 1.1 }}>{f.value}</span>
          <span className="postmark-label">{f.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default QuickFacts;
