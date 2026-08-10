import React from "react";
import { Link } from "react-router-dom";

// Sorted by reader likes rather than views — a different cut of the same
// posts than TrendingBlogs/MostRead, so it earns its own spot on the page.
const ReaderFavorites = ({ posts }) => (
  <section className="mb-5">
    <div className="text-center mb-4">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        <i className="bi bi-heart-fill me-1"></i>Reader Favorites
      </p>
      <h2 className="font-display fw-semibold h3 mb-0">Most Loved Stories</h2>
    </div>
    <div className="row g-4">
      {posts.map((post, i) => (
        <div className="col-sm-6 col-lg-3" key={post.id}>
          <Link to={`/post/${post.slug}`} className="text-decoration-none text-reset d-block h-100 position-relative">
            <span
              className="position-absolute top-0 start-0 m-2 px-2 py-1 rounded-pill font-mono fw-semibold"
              style={{ background: "var(--ink)", color: "var(--sand)", fontSize: "0.65rem", zIndex: 1 }}
            >
              #{i + 1}
            </span>
            <div className="rounded-3 overflow-hidden shadow-sm mb-2" style={{ aspectRatio: "4/3" }}>
              <img src={post.cover} alt={post.title} className="w-100 h-100" style={{ objectFit: "cover" }} />
            </div>
            <h3 className="h6 fw-semibold mb-1">{post.title}</h3>
            <p className="font-mono text-gold-dark mb-0" style={{ fontSize: "0.7rem" }}>
              <i className="bi bi-heart-fill me-1"></i>{post.likes.toLocaleString()} likes
            </p>
          </Link>
        </div>
      ))}
    </div>
  </section>
);

export default ReaderFavorites;
