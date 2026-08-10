import React from "react";
import { Link } from "react-router-dom";

const LatestPhotos = ({ photos }) => (
  <section id="photos" className="mb-5 pt-2">
    <div className="text-center mb-4">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        <i className="bi bi-images me-1"></i>Latest Photos
      </p>
      <h2 className="font-display fw-semibold h3 mb-0">From the Field</h2>
    </div>

    {photos.length === 0 ? (
      <p className="text-stone text-center py-5">No photos match that search or filter — try another keyword or category.</p>
    ) : (
      <div className="masonry">
        {photos.map((photo) => (
          <Link
            to={`/gallery/album/${photo.albumSlug}/${photo.id}`}
            className="masonry-item d-block text-decoration-none text-reset"
            key={photo.id}
          >
            <div className="masonry-photo-wrap">
              <img src={photo.src} alt={photo.caption} loading="lazy" />
              <div className="masonry-caption">
                <i className="bi bi-heart me-1"></i>{photo.likes} · <i className="bi bi-camera me-1"></i>{photo.camera}
              </div>
            </div>
            <p className="fw-semibold small mt-2 mb-0">{photo.caption}</p>
            <p className="font-mono text-stone mb-0" style={{ fontSize: "0.7rem" }}>
              <i className="bi bi-geo-alt me-1"></i>{photo.location}
            </p>
          </Link>
        ))}
      </div>
    )}
  </section>
);

export default LatestPhotos;
