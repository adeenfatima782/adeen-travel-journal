import React from "react";
import { Link } from "react-router-dom";

const AlbumPhotoGrid = ({ album }) => (
  <section className="mb-5">
    <p className="font-mono text-gold-dark mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
      <i className="bi bi-grid-3x3-gap me-1"></i>Photo Grid
    </p>
    <div className="row g-3">
      {album.photos.map((photo) => (
        <div className="col-6 col-md-4" key={photo.id}>
          <Link to={`/gallery/album/${album.slug}/${photo.id}`} className="text-decoration-none text-reset d-block">
            <div className="rounded-3 overflow-hidden shadow-sm" style={{ aspectRatio: "4/3" }}>
              <img src={photo.src} alt={photo.caption} className="w-100 h-100" style={{ objectFit: "cover" }} loading="lazy" />
            </div>
            <p className="fw-semibold small mt-2 mb-0">{photo.caption}</p>
            <p className="font-mono text-stone mb-0" style={{ fontSize: "0.7rem" }}>
              <i className="bi bi-heart me-1"></i>{photo.likes}
            </p>
          </Link>
        </div>
      ))}
    </div>
    <p className="text-stone small mt-3 mb-0">
      <i className="bi bi-arrows-fullscreen me-1"></i>Tap any photo for the full-screen view, EXIF details, and the story behind it.
    </p>
  </section>
);

export default AlbumPhotoGrid;
