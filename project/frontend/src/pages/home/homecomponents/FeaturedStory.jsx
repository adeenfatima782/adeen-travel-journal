import React from "react";
import { Link } from "react-router-dom";

const FeaturedStory = ({ post }) => (
  <section className="row align-items-center py-4 g-5">
    <div className="col-md-6 order-2 order-md-1">
      <div className="polaroid" style={{ "--tilt": "-3deg" }}>
        <div className="card-img-wrap" style={{ background: "rgba(28,27,26,0.05)" }}>
          <img src={post.cover} alt={post.title} />
        </div>
        <p className="polaroid-caption mb-0">{post.location}</p>
      </div>
    </div>
    <div className="col-md-6 order-1 order-md-2">
      <p className="font-mono text-gold-dark mb-3" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
        Latest Entry
      </p>
      <h2 className="font-display fw-semibold" style={{ fontSize: "2.2rem", lineHeight: 1.15 }}>{post.title}</h2>
      <p className="text-stone mt-3">{post.excerpt}</p>
      <Link
        to={`/post/${post.slug}`}
        className="d-inline-block mt-3 fw-semibold text-reset text-decoration-none"
        style={{ borderBottom: "2px solid var(--gold)", paddingBottom: "4px" }}
      >
        Read the full story →
      </Link>
    </div>
  </section>
);

export default FeaturedStory;
