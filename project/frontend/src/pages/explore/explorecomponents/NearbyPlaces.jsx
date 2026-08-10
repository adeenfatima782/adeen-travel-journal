import React from "react";
import { nearbyPlacesBySlug } from "../../../data/samplePosts";

const NearbyPlaces = ({ destination }) => {
  const places = nearbyPlacesBySlug[destination.slug] || [];
  if (!places.length) return null;

  return (
    <div className="p-4 rounded-3 h-100" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
      <h3 className="font-display fw-semibold h5 mb-3"><i className="bi bi-signpost-split me-2 text-gold-dark"></i>Nearby Places</h3>
      <div className="d-flex flex-column">
        <span className="fw-semibold small mb-2">{destination.name}</span>
        {places.map((p, i) => (
          <div key={p} className="d-flex align-items-center gap-2 ps-2 mb-2">
            <i className="bi bi-arrow-return-right text-gold-dark"></i>
            <span className="small text-stone">{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyPlaces;
