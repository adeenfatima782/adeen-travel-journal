import React from "react";
import { Link } from "react-router-dom";

const JourneyHero = ({ journey }) => (
  <div className="position-relative mb-4">
    <div className="hero-section rounded-4 overflow-hidden" style={{ minHeight: "52vh" }}>
      <img src={journey.cover} alt={journey.place} />
      <div className="hero-overlay"></div>
      <span className="washi-label position-absolute" style={{ top: "1.25rem", left: "1.25rem", zIndex: 2 }}>
        {journey.region}
      </span>
      <Link to="/travel-journal" className="position-absolute top-0 end-0 m-3 btn btn-sm btn-outline-sand" style={{ zIndex: 2 }}>
        Journal<i className="bi bi-arrow-right ms-1"></i>
      </Link>
      <div className="hero-content container mx-auto">
        <h1 className="font-signature mb-3" style={{ fontSize: "clamp(2.4rem, 6vw, 3.6rem)", color: "var(--sand)" }}>
          {journey.place}
        </h1>
        <div className="d-flex flex-wrap gap-3 font-mono" style={{ fontSize: "0.8rem", color: "rgba(250,246,238,0.9)" }}>
          <span><i className="bi bi-calendar3 me-1"></i>{journey.date}</span>
          <span><i className="bi bi-clock me-1"></i>{journey.days} {journey.days === 1 ? "day" : "days"}</span>
          <span><i className={`bi ${journey.weather.icon} me-1`}></i>{journey.weather.condition}, {journey.weather.high}°/{journey.weather.low}°</span>
        </div>
      </div>
      <div className="postmark" style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", zIndex: 2, transform: "rotate(8deg)" }}>
        <span className="postmark-value">{journey.rating}</span>
        <span className="postmark-label">Rating</span>
      </div>
    </div>
  </div>
);

export default JourneyHero;
