import React from "react";
import { Link } from "react-router-dom";

const FeaturedAlbums = ({ albums }) => (
  <section id="albums" className="mb-5 pt-2">
    <div className="text-center mb-4">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        <i className="bi bi-collection me-1"></i>Featured Albums
      </p>
      <h2 className="font-display fw-semibold h3 mb-0">Browse by Journey</h2>
    </div>
    <div className="row g-4">
      {albums.map((album) => (
        <div className="col-sm-6 col-lg-4" key={album.slug}>
          <Link to={`/gallery/album/${album.slug}`} className="text-decoration-none text-reset d-block h-100">
            <div className="rounded-3 overflow-hidden shadow-sm h-100" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.08)" }}>
              <div className="position-relative" style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                <img src={album.cover} alt={album.name} className="w-100 h-100" style={{ objectFit: "cover" }} />
                <div
                  className="position-absolute bottom-0 start-0 end-0 p-3"
                  style={{ background: "linear-gradient(to top, rgba(28,27,26,0.8), transparent)" }}
                >
                  <h3 className="h5 font-display fw-semibold mb-0" style={{ color: "var(--sand)" }}>{album.name}</h3>
                  <p className="font-mono mb-0" style={{ color: "var(--gold)", fontSize: "0.7rem" }}>
                    {album.photos.length} photos
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedAlbums;
