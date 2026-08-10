import React from "react";
import { Link } from "react-router-dom";

const MostLikedPhotos = ({ photos }) => (
  <section className="mb-5">
    <div className="text-center mb-4">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        <i className="bi bi-heart me-1"></i>Top 10
      </p>
      <h2 className="font-display fw-semibold h3 mb-0">Most Liked Photos</h2>
    </div>
    <div className="row g-3">
      {photos.map((photo, i) => (
        <div className="col-6 col-md-3" key={photo.id}>
          <Link to={`/gallery/album/${photo.albumSlug}/${photo.id}`} className="text-decoration-none text-reset d-block position-relative">
            <div className="rounded-3 overflow-hidden shadow-sm" style={{ aspectRatio: "4/3" }}>
              <img src={photo.src} alt={photo.caption} className="w-100 h-100" style={{ objectFit: "cover" }} />
            </div>
            <span
              className="position-absolute top-0 start-0 m-2 px-2 py-1 rounded-pill font-mono fw-semibold"
              style={{ background: "var(--ink)", color: "var(--sand)", fontSize: "0.65rem" }}
            >
              #{i + 1}
            </span>
            <p className="fw-semibold small mt-2 mb-0">{photo.caption}</p>
            <p className="font-mono text-gold-dark mb-0" style={{ fontSize: "0.7rem" }}>
              <i className="bi bi-heart-fill me-1"></i>{photo.likes}
            </p>
          </Link>
        </div>
      ))}
    </div>
  </section>
);

export default MostLikedPhotos;
