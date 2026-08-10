import React from "react";
import { Link } from "react-router-dom";

const FavoriteCollections = ({ collections }) => (
  <section className="mb-5 text-center">
    <p className="font-mono text-gold-dark mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
      Favorite Collections
    </p>
    <div className="d-flex flex-wrap justify-content-center gap-2">
      {collections.map((c) => (
        <Link key={c.name} to={`/gallery/album/${c.albumSlug}`} className="btn btn-sm btn-outline-ink rounded-pill">
          <i className={`bi ${c.icon} me-1`}></i>{c.name}
        </Link>
      ))}
    </div>
  </section>
);

export default FavoriteCollections;
