import React from "react";
import { Link } from "react-router-dom";
import { journeys } from "../../../data/journeys";

const slugForPlace = (place) => journeys.find((j) => j.place === place)?.slug;
const tilts = [-2, 1.5, -1, 2];

const BestTravelMemories = ({ memories }) => (
  <section className="mb-5">
    <div className="text-center mb-5">
      <span className="washi-label">Diary Highlights</span>
      <h2 className="font-signature mt-2 mb-0" style={{ fontSize: "2.2rem", color: "var(--teal)" }}>Best Travel Memories</h2>
    </div>
    <div className="row g-4">
      {memories.map((m, i) => {
        const slug = slugForPlace(m.place);
        const inner = (
          <div className="diary-entry-card h-100 p-4" style={{ "--tilt": `${tilts[i % tilts.length]}deg` }}>
            <div className="diary-pin"></div>
            <i className={`bi ${m.icon} text-gold-dark`} style={{ fontSize: "1.4rem" }}></i>
            <p className="font-mono text-gold-dark mt-3 mb-1" style={{ fontSize: "0.66rem", textTransform: "uppercase" }}>{m.label}</p>
            <p className="font-signature mb-2" style={{ fontSize: "1.35rem", color: "var(--ink)" }}>{m.value}</p>
            <p className="font-mono text-stone mb-0" style={{ fontSize: "0.68rem" }}>
              <i className="bi bi-geo-alt me-1"></i>{m.place}
            </p>
          </div>
        );
        return (
          <div className="col-sm-6 col-lg-3" key={m.label}>
            {slug ? <Link to={`/journal/${slug}`} className="text-decoration-none text-reset d-block h-100">{inner}</Link> : inner}
          </div>
        );
      })}
    </div>
  </section>
);

export default BestTravelMemories;
