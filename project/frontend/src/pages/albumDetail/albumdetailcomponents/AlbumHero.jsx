import React from "react";
import { Link } from "react-router-dom";

const AlbumHero = ({ album }) => (
  <div className="position-relative rounded-4 overflow-hidden mb-4" style={{ aspectRatio: "16/7" }}>
    <img src={album.cover} alt={album.name} className="w-100 h-100" style={{ objectFit: "cover" }} />
    <div
      className="position-absolute bottom-0 start-0 end-0 p-4 p-md-5"
      style={{ background: "linear-gradient(to top, rgba(28,27,26,0.85), transparent)" }}
    >
      <p className="font-mono mb-1" style={{ color: "var(--gold)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        {album.region}
      </p>
      <h1 className="font-display fw-semibold" style={{ color: "var(--sand)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
        {album.name}
      </h1>
    </div>
    <Link
      to="/gallery"
      className="position-absolute top-0 start-0 m-3 btn btn-sm btn-outline-sand"
    >
      <i className="bi bi-arrow-left me-1"></i>Gallery
    </Link>
  </div>
);

export default AlbumHero;
