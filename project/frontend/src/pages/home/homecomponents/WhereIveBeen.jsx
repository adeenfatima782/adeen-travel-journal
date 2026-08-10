import React from "react";

const places = [
  "Hunza Valley", "Skardu", "Swat Valley", "Fairy Meadows", "Naltar Valley",
  "Deosai Plains", "Shimshal", "Passu", "Gilgit", "Khunjerab Pass",
];

const WhereIveBeen = () => (
  <section className="py-5">
    <p className="font-mono text-gold-dark mb-3 text-center" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
      <i className="bi bi-geo-alt me-2"></i>Where I've Been
    </p>
    <div className="d-flex flex-wrap justify-content-center gap-2">
      {places.map((place) => (
        <span
          key={place}
          className="px-3 py-2 rounded-pill font-mono text-stone"
          style={{ fontSize: "0.78rem", background: "var(--sand-deep)", border: "1px solid rgba(28,27,26,0.08)" }}
        >
          {place}
        </span>
      ))}
    </div>
  </section>
);

export default WhereIveBeen;
