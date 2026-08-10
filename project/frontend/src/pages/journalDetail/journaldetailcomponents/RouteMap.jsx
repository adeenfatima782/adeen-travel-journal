import React from "react";

const RouteMap = ({ journey }) => (
  <section className="mb-4">
    <span className="washi-tag mb-3"><i className="bi bi-map"></i>Route Map</span>
    <a
      href={`https://www.google.com/maps?q=${journey.lat},${journey.lng}`}
      target="_blank"
      rel="noreferrer"
      className="d-block paper-card text-decoration-none position-relative mt-3"
      style={{ aspectRatio: "16/6" }}
    >
      <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
        <i className="bi bi-geo-alt-fill text-gold-dark mb-2" style={{ fontSize: "1.8rem" }}></i>
        <p className="font-mono text-ink mb-0" style={{ fontSize: "0.85rem" }}>
          {journey.lat.toFixed(4)}, {journey.lng.toFixed(4)}
        </p>
        <p className="link-underline font-mono text-stone small mt-1 mb-0">Open in Google Maps →</p>
      </div>
    </a>
  </section>
);

export default RouteMap;
