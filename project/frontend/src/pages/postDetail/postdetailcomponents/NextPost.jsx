import React from "react";
import { Link } from "react-router-dom";

const NextPost = ({ post }) => {
  if (!post) return null;

  return (
    <section className="mt-5 pt-5 border-top" style={{ borderColor: "rgba(28,27,26,0.1)" }}>
      <p className="font-mono text-gold-dark mb-3" style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Up Next
      </p>
      <Link
        to={`/post/${post.slug}`}
        className="d-flex flex-column flex-sm-row align-items-sm-center gap-4 text-decoration-none text-reset p-3 rounded-3"
        style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}
      >
        <div className="rounded-3 overflow-hidden flex-shrink-0" style={{ width: "100%", maxWidth: "220px", aspectRatio: "4/3" }}>
          <img src={post.cover} alt={post.title} className="w-100 h-100" style={{ objectFit: "cover" }} />
        </div>
        <div>
          <p className="font-mono text-stone mb-1" style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            {post.category}
          </p>
          <h3 className="font-display fw-semibold h4 mb-2">{post.title}</h3>
          <span className="fw-semibold" style={{ borderBottom: "2px solid var(--gold)", paddingBottom: "2px" }}>
            Continue reading →
          </span>
        </div>
      </Link>
    </section>
  );
};

export default NextPost;
