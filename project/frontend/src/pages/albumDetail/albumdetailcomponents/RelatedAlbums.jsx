import React from "react";
import { Link } from "react-router-dom";

const RelatedAlbums = ({ albums }) => {
  if (albums.length === 0) return null;
  return (
    <section className="mb-5">
      <p className="font-mono text-gold-dark mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Related Albums
      </p>
      <div className="row g-3">
        {albums.map((album) => (
          <div className="col-6 col-md-3" key={album.slug}>
            <Link to={`/gallery/album/${album.slug}`} className="text-decoration-none text-reset d-block">
              <div className="rounded-3 overflow-hidden shadow-sm" style={{ aspectRatio: "4/3" }}>
                <img src={album.cover} alt={album.name} className="w-100 h-100" style={{ objectFit: "cover" }} />
              </div>
              <p className="fw-semibold small mt-2 mb-0">{album.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedAlbums;
