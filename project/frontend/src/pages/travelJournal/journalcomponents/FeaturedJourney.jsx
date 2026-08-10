import React from "react";
import { Link } from "react-router-dom";

const FeaturedJourney = ({ journey }) => (
  <section className="mb-5">
    <div className="text-center mb-4">
      <span className="washi-tag"><i className="bi bi-star-fill"></i>Featured Journey</span>
    </div>
    <div className="postcard-frame rounded-4 overflow-hidden p-3 p-md-4">
      <div className="row g-0 align-items-center">
        <div className="col-md-6">
          <div className="polaroid" style={{ "--tilt": "-2deg" }}>
            <img src={journey.cover} alt={journey.place} />
            <p className="polaroid-cap">{journey.place}</p>
          </div>
        </div>
        <div className="col-md-6 p-4">
          <p className="diary-quote mb-3" style={{ fontSize: "1.3rem" }}>
            "{journey.region} — the trip I still think about most from {journey.year}."
          </p>
          <div className="d-flex flex-wrap gap-3 font-mono text-stone mb-4" style={{ fontSize: "0.78rem" }}>
            <span><i className="bi bi-calendar3 me-1"></i>{journey.date}</span>
            <span><i className="bi bi-clock me-1"></i>{journey.days} {journey.days === 1 ? "day" : "days"}</span>
            <span><i className="bi bi-star text-gold-dark me-1"></i>{journey.rating}</span>
          </div>
          <Link to={`/journal/${journey.slug}`} className="btn btn-gold">Read Story</Link>
        </div>
      </div>
      <div className="postmark" style={{ position: "absolute", top: "1.1rem", right: "1.1rem", transform: "rotate(8deg)" }}>
        <span className="postmark-value">{journey.rating}</span>
        <span className="postmark-label">Rating</span>
      </div>
    </div>
  </section>
);

export default FeaturedJourney;
