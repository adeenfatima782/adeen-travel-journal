import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: "bi-compass",
    title: "Travel Diaries",
    text: "Slow, honest notes from the northern valleys — where to go, what surprised me, and what I'd do differently.",
    to: "/category/travel-diaries",
  },
  {
    icon: "bi-camera",
    title: "Photography Tips",
    text: "Gear, editing, and the small habits that have actually made a difference in my photographs.",
    to: "/category/photography",
  },
  {
    icon: "bi-images",
    title: "Photo Gallery",
    text: "A visual journal — every frame shot on the road, with the story and settings behind it.",
    to: "/gallery",
  },
];

const FeatureHighlights = () => (
  <section className="py-5">
    <div className="text-center mb-5">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
        What You'll Find Here
      </p>
      <h2 className="font-display fw-semibold">Three ways to wander through this journal</h2>
    </div>
    <div className="row g-4">
      {features.map((f) => (
        <div className="col-md-4" key={f.title}>
          <Link
            to={f.to}
            className="d-block h-100 p-4 rounded-3 text-decoration-none text-reset"
            style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)", transition: "transform 0.25s ease" }}
          >
            <span
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
              style={{ width: "52px", height: "52px", background: "var(--sand-deep)", color: "var(--gold-dark)", fontSize: "1.4rem" }}
            >
              <i className={`bi ${f.icon}`}></i>
            </span>
            <h3 className="font-display fw-semibold h5 mb-2">{f.title}</h3>
            <p className="text-stone small mb-0">{f.text}</p>
          </Link>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureHighlights;
