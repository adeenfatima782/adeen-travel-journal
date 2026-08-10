import React from "react";

const PhotoInfo = ({ photo }) => (
  <div className="mt-4">
    <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
      {photo.location}
    </p>
    <h1 className="font-display fw-semibold mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
      {photo.caption}
    </h1>
    <p className="text-stone" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>{photo.story}</p>
    <div className="d-inline-flex align-items-center gap-2 mt-2 px-3 py-2 rounded-3" style={{ background: "var(--sand-deep)" }}>
      <i className="bi bi-camera text-gold-dark"></i>
      <span className="font-mono text-stone" style={{ fontSize: "0.78rem" }}>{photo.camera}</span>
    </div>
  </div>
);

export default PhotoInfo;
