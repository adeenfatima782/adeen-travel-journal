import React from "react";
import { Link } from "react-router-dom";
import CategoryStamp from "../../../components/CategoryStamp";

const FeaturedBlog = ({ post }) => {
  if (!post) return null;

  return (
    <section className="mb-5">
      <p className="font-mono text-gold-dark mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Editor's Choice
      </p>
      <Link
        to={`/post/${post.slug}`}
        className="d-block text-decoration-none text-reset rounded-4 overflow-hidden position-relative"
        style={{ minHeight: "26rem" }}
      >
        <img
          src={post.cover}
          alt={post.title}
          className="w-100 h-100"
          style={{ position: "absolute", inset: 0, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(28,27,26,0.9), rgba(28,27,26,0.1) 65%)",
          }}
        />
        <div className="position-relative p-4 p-md-5 d-flex flex-column justify-content-end" style={{ minHeight: "26rem", color: "var(--sand)" }}>
          <CategoryStamp category={post.category} />
          <h2 className="font-display fw-semibold mt-3" style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", maxWidth: "40rem" }}>
            {post.title}
          </h2>
          <p className="mb-3" style={{ maxWidth: "36rem", opacity: 0.9 }}>{post.excerpt}</p>
          <div className="d-flex flex-wrap gap-3 font-mono" style={{ fontSize: "0.75rem", opacity: 0.85 }}>
            <span><i className="bi bi-person me-1"></i>{post.author}</span>
            <span><i className="bi bi-clock me-1"></i>{post.readingTime} min read</span>
            <span><i className="bi bi-eye me-1"></i>{post.views.toLocaleString()} views</span>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default FeaturedBlog;
