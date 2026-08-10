import React from "react";
import { Link } from "react-router-dom";

const BehindTheShot = ({ photo }) => (
  <section className="mb-5">
    <div className="text-center mb-4">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        <i className="bi bi-chat-square-quote me-1"></i>Behind The Shot
      </p>
      <h2 className="font-display fw-semibold h3 mb-0">The Story Behind This Photo</h2>
    </div>
    <div className="row g-4 align-items-center rounded-4 overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.08)" }}>
      <div className="col-md-6">
        <img src={photo.src} alt={photo.caption} className="w-100 h-100" style={{ objectFit: "cover", aspectRatio: "4/3" }} />
      </div>
      <div className="col-md-6 p-4 p-md-5">
        <h3 className="h5 font-display fw-semibold mb-3">{photo.caption}</h3>
        <p className="text-stone mb-3">{photo.story}</p>
        <ul className="list-unstyled font-mono text-stone mb-3" style={{ fontSize: "0.78rem" }}>
          <li className="mb-1"><i className="bi bi-geo-alt me-2 text-gold-dark"></i>{photo.location}</li>
          <li className="mb-1"><i className="bi bi-calendar3 me-2 text-gold-dark"></i>{photo.date}</li>
          <li className="mb-1"><i className="bi bi-camera me-2 text-gold-dark"></i>{photo.camera}</li>
          <li className="mb-1"><i className="bi bi-cloud-sun me-2 text-gold-dark"></i>{photo.weather}</li>
        </ul>
        <Link to={`/gallery/album/${photo.albumSlug}/${photo.id}`} className="link-underline font-mono text-stone small">See full photo →</Link>
      </div>
    </div>
  </section>
);

export default BehindTheShot;
