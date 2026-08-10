import React from "react";
import { featuredSeries } from "../../../data/samplePosts";

const FeaturedSeries = ({ onSelect }) => (
  <section className="py-5">
    <p className="font-mono text-gold-dark mb-4 text-center" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
      <i className="bi bi-collection me-1"></i>Featured Series
    </p>
    <div className="row g-3">
      {featuredSeries.map((s) => (
        <div className="col-6 col-md-3" key={s.name}>
          <button
            onClick={() => onSelect(s.keyword)}
            className="border-0 p-0 w-100 text-start rounded-3 overflow-hidden position-relative"
            style={{ aspectRatio: "4/3" }}
          >
            <img src={s.cover} alt={s.name} className="w-100 h-100" style={{ objectFit: "cover" }} />
            <div
              className="position-absolute inset-0 d-flex flex-column justify-content-end p-3"
              style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,27,26,0.85), transparent)" }}
            >
              <i className={`bi ${s.icon} mb-1`} style={{ color: "var(--gold)" }}></i>
              <p className="fw-semibold mb-0" style={{ color: "var(--sand)", fontSize: "0.9rem" }}>{s.name}</p>
            </div>
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedSeries;
