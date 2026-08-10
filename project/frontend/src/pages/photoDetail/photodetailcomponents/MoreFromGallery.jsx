import React from "react";
import { Link } from "react-router-dom";

const MoreFromGallery = ({ photos, currentId }) => {
  const others = photos.filter((p) => p.id !== currentId).slice(0, 6);

  return (
    <section className="mt-5 pt-5 border-top" style={{ borderColor: "rgba(28,27,26,0.1)" }}>
      <div className="d-flex justify-content-between align-items-end mb-4">
        <p className="font-mono text-gold-dark mb-0" style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          More From the Gallery
        </p>
        <Link to="/gallery" className="link-underline font-mono text-stone small">Back to gallery →</Link>
      </div>
      <div className="row g-4">
        {others.map((p) => (
          <div className="col-6 col-md-4" key={p.id}>
            <Link to={`/gallery/${p.id}`} className="text-decoration-none text-reset d-block">
              <div className="rounded-3 overflow-hidden shadow-sm" style={{ aspectRatio: "4/3" }}>
                <img src={p.src} alt={p.caption} className="w-100 h-100" style={{ objectFit: "cover" }} />
              </div>
              <p className="fw-semibold small mt-2 mb-1">{p.caption}</p>
              <p className="font-mono text-stone mb-0" style={{ fontSize: "0.7rem" }}>
                <i className="bi bi-geo-alt me-1"></i>{p.location}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreFromGallery;
