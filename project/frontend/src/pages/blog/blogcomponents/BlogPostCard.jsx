import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryStamp from "../../../components/CategoryStamp";
import { api } from "../../../api/client";

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const BlogPostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const toggleLike = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const nextLiked = !liked;
    setLiked(nextLiked);
    setLikes((prev) => (nextLiked ? prev + 1 : prev - 1));
    try {
      await api.patch(`/posts/${post.id}/like`, { increment: nextLiked });
    } catch (err) {
      // Restore the previous UI state if the backend request fails
      setLiked(!nextLiked);
      setLikes((prev) => (nextLiked ? prev - 1 : prev + 1));
    }
  };

  return (
    <div className="h-100 rounded-3 overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.08)" }}>
      <Link to={`/post/${post.slug}`} className="text-decoration-none text-reset d-block">
        <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
          <img src={post.cover} alt={post.title} loading="lazy" className="w-100 h-100" style={{ objectFit: "cover" }} />
        </div>
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <CategoryStamp category={post.category} />
            <button
              onClick={toggleLike}
              className="btn btn-sm border-0 d-flex align-items-center gap-1 p-0"
              style={{ color: liked ? "var(--gold-dark)" : "var(--stone)" }}
              aria-label="Like this post"
            >
              <i className={`bi ${liked ? "bi-heart-fill" : "bi-heart"}`}></i>
              <span className="font-mono" style={{ fontSize: "0.72rem" }}>{likes}</span>
            </button>
          </div>
          <h3 className="card-title h5 mt-2 mb-2">{post.title}</h3>
          <p
            className="text-stone small mb-3"
            style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
          >
            {post.excerpt}
          </p>
          <div className="d-flex flex-wrap justify-content-between align-items-center font-mono text-stone" style={{ fontSize: "0.68rem" }}>
            <span>{post.author} · {formatDate(post.date)}</span>
            <span className="d-flex gap-2">
              <span><i className="bi bi-clock me-1"></i>{post.readingTime} min</span>
              <span><i className="bi bi-eye me-1"></i>{post.views.toLocaleString()}</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;
