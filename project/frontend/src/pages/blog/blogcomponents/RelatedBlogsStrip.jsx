import React from "react";
import { Link } from "react-router-dom";

const RelatedBlogsStrip = ({ posts }) => (
  <section className="mb-5">
    <p className="font-mono text-gold-dark mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
      You Might Also Like
    </p>
    <div className="row g-3">
      {posts.map((post) => (
        <div className="col-sm-4" key={post.id}>
          <Link to={`/post/${post.slug}`} className="d-flex align-items-center gap-3 text-decoration-none text-reset">
            <div className="rounded-2 overflow-hidden flex-shrink-0" style={{ width: "4rem", aspectRatio: "1/1" }}>
              <img src={post.cover} alt={post.title} className="w-100 h-100" style={{ objectFit: "cover" }} />
            </div>
            <p className="small fw-semibold mb-0" style={{ lineHeight: 1.3 }}>{post.title}</p>
          </Link>
        </div>
      ))}
    </div>
  </section>
);

export default RelatedBlogsStrip;
