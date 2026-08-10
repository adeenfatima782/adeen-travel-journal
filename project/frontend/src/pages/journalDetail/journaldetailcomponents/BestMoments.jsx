import React from "react";

const BestMoments = ({ moments }) => (
  <section className="mb-4 paper-card p-4">
    <span className="washi-tag mb-3"><i className="bi bi-emoji-smile"></i>Best Moments</span>
    <ul className="list-unstyled mb-0 mt-3">
      {moments.map((m, i) => (
        <li key={i} className="mb-2 d-flex gap-2">
          <i className="bi bi-heart text-gold-dark mt-1"></i>
          <span>{m}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default BestMoments;
