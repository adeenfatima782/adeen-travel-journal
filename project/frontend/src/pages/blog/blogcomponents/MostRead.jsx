import React from "react";
import { Link } from "react-router-dom";

const MostRead = ({ posts }) => (
  <section className="mb-5 p-4 p-md-5 rounded-4" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.08)" }}>
    <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
      Top 5
    </p>
    <h2 className="font-display fw-semibold h3 mb-4">Most Read</h2>
    <div className="d-flex flex-column gap-3">
      {posts.slice(0, 5).map((post, i) => (
        <Link
          key={post.id}
          to={`/post/${post.slug}`}
          className="d-flex align-items-center gap-3 text-decoration-none text-reset pb-3"
          style={{ borderBottom: i < 4 ? "1px solid rgba(28,27,26,0.08)" : "none" }}
        >
          <span className="font-display fw-semibold text-gold-dark" style={{ fontSize: "1.8rem", width: "2.5rem" }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="rounded-2 overflow-hidden flex-shrink-0" style={{ width: "4.5rem", aspectRatio: "1/1" }}>
            <img src={post.cover} alt={post.title} className="w-100 h-100" style={{ objectFit: "cover" }} />
          </div>
          <div className="flex-grow-1">
            <h3 className="h6 font-display fw-semibold mb-1">{post.title}</h3>
            <p className="font-mono text-stone mb-0" style={{ fontSize: "0.68rem" }}>
              {post.views.toLocaleString()} views · {post.readingTime} min read
            </p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default MostRead;
