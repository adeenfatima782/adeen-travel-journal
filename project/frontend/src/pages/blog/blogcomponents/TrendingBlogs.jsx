import React from "react";
import { Link } from "react-router-dom";

const TrendingBlogs = ({ posts }) => (
  <section className="mb-5">
    <div className="d-flex justify-content-between align-items-end mb-4">
      <div>
        <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          <i className="bi bi-fire me-1"></i>Trending
        </p>
        <h2 className="font-display fw-semibold h3 mb-0">Trending Blogs</h2>
      </div>
    </div>
    <div className="d-flex gap-3 overflow-auto pb-2" style={{ scrollSnapType: "x mandatory" }}>
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/post/${post.slug}`}
          className="text-decoration-none text-reset flex-shrink-0 rounded-3 overflow-hidden"
          style={{ width: "16rem", background: "#fff", border: "1px solid rgba(28,27,26,0.08)", scrollSnapAlign: "start" }}
        >
          <div style={{ aspectRatio: "16/10" }}>
            <img src={post.cover} alt={post.title} className="w-100 h-100" style={{ objectFit: "cover" }} />
          </div>
          <div className="p-3">
            <p className="font-mono text-gold-dark mb-1" style={{ fontSize: "0.68rem", textTransform: "uppercase" }}>{post.category}</p>
            <h3 className="h6 font-display fw-semibold mb-1">{post.title}</h3>
            <p className="font-mono text-stone mb-0" style={{ fontSize: "0.68rem" }}>
              <i className="bi bi-eye me-1"></i>{post.views.toLocaleString()} views
            </p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default TrendingBlogs;
