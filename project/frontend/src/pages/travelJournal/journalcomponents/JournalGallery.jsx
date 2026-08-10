import React from "react";
import { Link } from "react-router-dom";

const JournalGallery = ({ photos }) => (
  <section className="mb-5">
    <div className="d-flex justify-content-between align-items-end mb-3">
      <span className="washi-tag"><i className="bi bi-images"></i>Journal Gallery</span>
      <Link to="/gallery" className="link-underline font-mono text-stone small">Full gallery →</Link>
    </div>
    <div className="row g-4 justify-content-center">
      {photos.map((photo, i) => (
        <div className="col-6 col-sm-4 col-md-2" key={i}>
          <Link to={`/journal/${photo.slug}`} className="d-block text-decoration-none">
            <div className="polaroid" style={{ "--tilt": `${(i % 2 === 0 ? -1 : 1) * (1 + (i % 3))}deg` }}>
              <img src={photo.src} alt={photo.caption} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  </section>
);

export default JournalGallery;
