import React from "react";
import { Link } from "react-router-dom";

const RecommendedReading = ({ posts }) => {
  if (!posts.length) return null;

  return (
    <section className="mt-5 pt-5 border-top" style={{ borderColor: "rgba(28,27,26,0.1)" }}>
      <p className="font-mono text-gold-dark mb-4" style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        <i className="bi bi-bookmark-star me-1"></i>Recommended Reading
      </p>
      <div className="row g-4">
        {posts.map((post) => (
          <div className="col-sm-6 col-md-4" key={post.id}>
            <Link to={`/post/${post.slug}`} className="d-block text-decoration-none text-reset rounded-3 overflow-hidden shadow-sm" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.08)" }}>
              <div style={{ aspectRatio: "4/3" }}>
                <img src={post.cover} alt={post.title} className="w-100 h-100" style={{ objectFit: "cover" }} />
              </div>
              <div className="p-3">
                <p className="fw-semibold small mb-1" style={{ lineHeight: 1.3 }}>{post.title}</p>
                <p className="font-mono text-stone mb-0" style={{ fontSize: "0.68rem" }}>{post.readingTime} min read</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedReading;
