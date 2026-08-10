import React from "react";
import { Link } from "react-router-dom";

const BestShotOfWeek = ({ photo }) => (
  <section className="py-5">
    <p className="font-mono text-gold-dark mb-3 text-center" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
      <i className="bi bi-award me-1"></i>Best Shot of the Week
    </p>
    <div className="position-relative rounded-3 overflow-hidden shadow" style={{ aspectRatio: "16/8" }}>
      <img src={photo.src} alt={photo.title} className="w-100 h-100" style={{ objectFit: "cover" }} />
      <div
        className="position-absolute bottom-0 start-0 end-0 p-4 p-md-5"
        style={{ background: "linear-gradient(to top, rgba(28,27,26,0.85), transparent)" }}
      >
        <h3 className="font-display fw-semibold" style={{ color: "var(--sand)" }}>{photo.title}</h3>
        <p className="mb-2" style={{ color: "rgba(250,246,238,0.85)" }}>{photo.story}</p>
        <p className="font-mono mb-0" style={{ color: "var(--gold)", fontSize: "0.75rem" }}>
          <i className="bi bi-geo-alt me-1"></i>{photo.location} · <i className="bi bi-camera me-1"></i>{photo.camera} · {photo.aperture} · {photo.shutter}
        </p>
      </div>
    </div>
    <div className="text-center mt-3">
      <Link to={`/gallery/album/${photo.albumSlug}/${photo.id}`} className="link-underline font-mono text-stone small">See full photo →</Link>
    </div>
  </section>
);

export default BestShotOfWeek;
