import React from "react";
import { Link } from "react-router-dom";

const excerptOf = (story) => {
  const text = story[0] || "";
  return text.length > 180 ? text.slice(0, 177).trim() + "…" : text;
};

const JourneyCards = ({ journeys }) => {
  if (journeys.length === 0) {
    return <p className="text-stone text-center py-5">No journeys match that search or filter — try another keyword, category, or year.</p>;
  }

  return (
    <div className="d-flex flex-column gap-4">
      {journeys.map((j, i) => (
        <Link key={j.slug} to={`/journal/${j.slug}`} className="text-decoration-none text-reset diary-entry-card">
          <div className="row g-0 align-items-stretch">
            <div className="col-4 col-md-3">
              <div className="polaroid m-0 h-100" style={{ "--tilt": `${(i % 2 === 0 ? -1 : 1) * 2}deg` }}>
                <img src={j.cover} alt={j.place} style={{ height: "8rem" }} />
              </div>
            </div>
            <div className="col-8 col-md-9 p-3 p-md-4 d-flex flex-column justify-content-center">
              <span className="font-signature d-block mb-1" style={{ fontSize: "1.1rem", color: "var(--teal)" }}>
                Entry #{String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="h5 font-display fw-semibold mb-2">{j.place}</h3>
              <div className="d-flex flex-wrap gap-3 font-mono text-stone mb-2" style={{ fontSize: "0.72rem" }}>
                <span><i className="bi bi-calendar3 me-1"></i>{j.date}</span>
                <span><i className="bi bi-clock me-1"></i>{j.days}d</span>
                <span><i className={`bi ${j.weather.icon} me-1`}></i>{j.weather.condition}</span>
                <span><i className="bi bi-star-fill text-gold-dark me-1"></i>{j.rating}</span>
                <span className="washi-tag" style={{ fontSize: "0.62rem", padding: "0.15rem 0.5rem" }}>{j.category[0]}</span>
              </div>
              <p className="text-stone small mb-0 d-none d-sm-block">{excerptOf(j.story)}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default JourneyCards;
