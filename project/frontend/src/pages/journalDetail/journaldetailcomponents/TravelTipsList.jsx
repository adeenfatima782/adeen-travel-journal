import React from "react";

const TravelTipsList = ({ tips }) => (
  <section className="mb-4 paper-card p-4">
    <span className="washi-tag mb-3"><i className="bi bi-lightbulb"></i>Travel Tips</span>
    <ul className="list-unstyled mb-0 mt-3">
      {tips.map((t, i) => (
        <li key={i} className="mb-2 d-flex gap-2">
          <i className="bi bi-arrow-right-short text-gold-dark mt-1"></i>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default TravelTipsList;
