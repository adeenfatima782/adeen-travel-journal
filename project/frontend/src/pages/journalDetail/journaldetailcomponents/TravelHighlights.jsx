import React from "react";

const TravelHighlights = ({ highlights }) => (
  <section className="mb-4 paper-card p-4">
    <span className="washi-tag mb-3"><i className="bi bi-stars"></i>Highlights</span>
    <ul className="list-unstyled mb-0 mt-3">
      {highlights.map((h, i) => (
        <li key={i} className="mb-2 d-flex gap-2">
          <i className="bi bi-check2 text-gold-dark mt-1"></i>
          <span>{h}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default TravelHighlights;
