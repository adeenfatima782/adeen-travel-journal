import React from "react";
import { Link } from "react-router-dom";

const GalleryStrip = ({ photos }) => (
  <section className="py-5">
    <div className="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-2">
      <div>
        <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
          From the Camera Roll
        </p>
        <h2 className="font-display fw-semibold mb-0">A Glimpse of the Gallery</h2>
      </div>
      <Link to="/gallery" className="link-underline font-mono text-stone small d-none d-sm-block">Explore gallery →</Link>
    </div>
    <div className="d-flex gap-3 overflow-auto pb-3">
      {photos.map((src, i) => (
        <div
          key={i}
          className="flex-shrink-0 rounded-3 overflow-hidden shadow"
          style={{ width: "14rem", height: "18rem", transform: `rotate(${i % 2 === 0 ? "-2deg" : "2deg"})` }}
        >
          <img src={src} alt={`Gallery shot ${i + 1}`} className="w-100 h-100" style={{ objectFit: "cover" }} />
        </div>
      ))}
    </div>
  </section>
);

export default GalleryStrip;
