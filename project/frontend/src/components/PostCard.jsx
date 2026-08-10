import React from "react";
import { Link } from "react-router-dom";
import CategoryStamp from "./CategoryStamp";

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const PostCard = ({ post }) => (
  <Link to={`/post/${post.slug}`} className="text-decoration-none text-reset d-block h-100">
    <div className="polaroid" style={{ "--tilt": post.tilt || "-2deg" }}>
      <div className="card-img-wrap" style={{ background: "rgba(28,27,26,0.05)" }}>
        <img src={post.cover} alt={post.title} loading="lazy" />
      </div>
      <p className="polaroid-caption mb-0">
        {post.location ? `${post.location} · ` : ""}
        {formatDate(post.date)}
      </p>
    </div>
    <div className="mt-3 px-1 post-card">
      <CategoryStamp category={post.category} />
      <h3 className="card-title h5 mt-3 mb-2">{post.title}</h3>
      <p className="text-stone small mb-0" style={{
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}>
        {post.excerpt}
      </p>
    </div>
  </Link>
);

export default PostCard;
