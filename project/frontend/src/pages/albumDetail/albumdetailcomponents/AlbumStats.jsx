import React from "react";

const AlbumStats = ({ album }) => (
  <div className="row g-3 mb-4 text-center">
    <div className="col-4">
      <p className="font-display fw-semibold h4 mb-0">{album.photos.length}</p>
      <p className="font-mono text-stone mb-0" style={{ fontSize: "0.7rem", textTransform: "uppercase" }}>Photos</p>
    </div>
    <div className="col-4">
      <p className="font-display fw-semibold h4 mb-0">{album.views.toLocaleString()}</p>
      <p className="font-mono text-stone mb-0" style={{ fontSize: "0.7rem", textTransform: "uppercase" }}>Views</p>
    </div>
    <div className="col-4">
      <p className="font-display fw-semibold h4 mb-0">{album.region}</p>
      <p className="font-mono text-stone mb-0" style={{ fontSize: "0.7rem", textTransform: "uppercase" }}>Region</p>
    </div>
  </div>
);

export default AlbumStats;
