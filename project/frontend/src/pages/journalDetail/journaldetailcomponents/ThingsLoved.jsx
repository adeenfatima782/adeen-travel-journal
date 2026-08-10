import React from "react";

const ThingsLoved = ({ things }) => (
  <section className="mb-4">
    <span className="washi-tag mb-3"><i className="bi bi-heart-fill"></i>Things I Loved</span>
    <div className="d-flex flex-wrap gap-2 mt-3">
      {things.map((t, i) => (
        <span
          key={i}
          className="stamp-badge stamp-travel"
          style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (2 + (i % 3))}deg)` }}
        >
          {t}
        </span>
      ))}
    </div>
  </section>
);

export default ThingsLoved;
