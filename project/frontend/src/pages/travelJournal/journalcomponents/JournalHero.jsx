import React from "react";
import { Link } from "react-router-dom";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const JournalHero = ({ latestJourney }) => (
  <div className="position-relative mb-5" style={{ paddingTop: "0.5rem" }}>
    <div className="hero-section rounded-4 overflow-hidden" style={{ minHeight: "60vh" }}>
      <img src={latestJourney.cover} alt={latestJourney.place} />
      <div className="hero-overlay"></div>
      <span
        className="washi-label position-absolute"
        style={{ top: "1.5rem", left: "1.5rem", zIndex: 2 }}
      >
        <i className="bi bi-journal-bookmark me-1"></i>Field Diary
      </span>
      <div className="hero-content container text-center mx-auto">
        <h1 className="font-signature mb-2" style={{ fontSize: "clamp(2.6rem, 7vw, 4.2rem)", color: "var(--sand)" }}>
          My Travel Memories
        </h1>
        <p className="diary-quote mx-auto mb-4" style={{ maxWidth: "38rem", fontSize: "1.35rem", color: "rgba(250,246,238,0.92)" }}>
          "Every place I've walked through, in one long diary — the moments, the weather,
          the food, and the notes I'd want to remember years from now."
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Link to={`/journal/${latestJourney.slug}`} className="btn btn-gold">Read Latest Story</Link>
          <button className="btn btn-outline-sand" onClick={() => scrollTo("timeline")}>Explore My Journeys</button>
        </div>
      </div>
    </div>
  </div>
);

export default JournalHero;
