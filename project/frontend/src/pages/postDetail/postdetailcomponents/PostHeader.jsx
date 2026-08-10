import React, { useState } from "react";
import CategoryStamp from "../../../components/CategoryStamp";
import ReadTimeBadge from "./ReadTimeBadge";
import { api } from "../../../api/client";

const PostHeader = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const toggleLike = async () => {
    const nextLiked = !liked;
    setLiked(nextLiked);
    setLikes((prev) => (nextLiked ? prev + 1 : prev - 1));
    try {
      await api.patch(`/posts/${post.id}/like`, { increment: nextLiked });
    } catch (err) {
      setLiked(!nextLiked);
      setLikes((prev) => (nextLiked ? prev - 1 : prev + 1));
    }
  };

  return (
    <>
      <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
        <CategoryStamp category={post.category} />
        <ReadTimeBadge minutes={post.readingTime} />
      </div>
      <h1 className="font-display fw-semibold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }}>
        {post.title}
      </h1>
      <div className="d-flex flex-wrap align-items-center gap-3 mt-3">
        <p className="font-mono text-stone mb-0" style={{ fontSize: "0.8rem" }}>
          {post.location ? `${post.location} · ` : ""}
          {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>
        <span className="text-stone" style={{ fontSize: "0.8rem" }}>·</span>
        <p className="font-mono text-stone mb-0" style={{ fontSize: "0.8rem" }}>Words & photos by {post.author}</p>
      </div>

      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mt-4 pt-3 border-top" style={{ borderColor: "rgba(28,27,26,0.1)" }}>
        <div className="d-flex align-items-center gap-3">
          <button
            onClick={toggleLike}
            className="btn btn-sm d-flex align-items-center gap-2"
            style={liked
              ? { background: "var(--gold)", borderColor: "var(--gold)", color: "var(--ink)", fontWeight: 600 }
              : { background: "transparent", border: "1px solid rgba(28,27,26,0.15)", color: "var(--stone)" }}
          >
            <i className={liked ? "bi bi-heart-fill" : "bi bi-heart"}></i>{likes.toLocaleString()}
          </button>
          <span className="font-mono text-stone" style={{ fontSize: "0.78rem" }}>
            <i className="bi bi-eye me-1"></i>{post.views.toLocaleString()} views
          </span>
        </div>

        <div className="d-flex align-items-center gap-2">
          <span className="font-mono text-stone" style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Share:
          </span>
          {["bi-facebook", "bi-twitter-x", "bi-whatsapp", "bi-link-45deg"].map((icon) => (
            <button key={icon} className="d-flex align-items-center justify-content-center rounded-circle border-0" style={{ width: "34px", height: "34px", background: "var(--sand-deep)", color: "var(--gold-dark)" }}>
              <i className={`bi ${icon}`}></i>
            </button>
          ))}
          <span className="font-mono text-stone ms-1" style={{ fontSize: "0.75rem" }}>{post.shares} Shares</span>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
