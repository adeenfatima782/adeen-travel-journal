import React from "react";
import { Link } from "react-router-dom";

const RecentJourneys = ({ journeys }) => (
  <section className="mb-5">
    <span className="washi-tag mb-3"><i className="bi bi-clock-history"></i>Recent Journeys</span>
    <div className="d-flex gap-4 overflow-auto pb-3 pt-2" style={{ scrollSnapType: "x mandatory" }}>
      {journeys.map((j, i) => (
        <Link
          key={j.slug}
          to={`/journal/${j.slug}`}
          className="text-decoration-none text-reset flex-shrink-0"
          style={{ width: "12rem", scrollSnapAlign: "start" }}
        >
          <div className="polaroid" style={{ "--tilt": `${(i % 2 === 0 ? -1 : 1) * 2}deg` }}>
            <img src={j.cover} alt={j.place} />
            <p className="polaroid-cap mb-0">{j.place}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default RecentJourneys;
