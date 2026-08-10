import React, { useState } from "react";
import { api } from "../../../api/client";

const PhotoExif = ({ photo, albumId }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(photo.likes);

  const toggleLike = async () => {
    const nextLiked = !liked;
    setLiked(nextLiked);
    setLikes((prev) => (nextLiked ? prev + 1 : prev - 1));
    try {
      await api.patch(`/gallery/${albumId}/photos/${photo.id}/like`, { increment: nextLiked });
    } catch (err) {
      setLiked(!nextLiked);
      setLikes((prev) => (nextLiked ? prev - 1 : prev + 1));
    }
  };

  return (
    <div className="mt-4">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        {photo.location}
      </p>
      <h1 className="font-display fw-semibold mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
        {photo.caption}
      </h1>
      <p className="text-stone mb-4" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>{photo.story}</p>

      <div className="row g-3">
        {[
          { icon: "bi-calendar3", label: "Date", value: photo.date },
          { icon: "bi-camera", label: "Camera", value: photo.camera },
          { icon: "bi-camera2", label: "Lens", value: photo.lens },
          { icon: "bi-aspect-ratio", label: "ISO", value: photo.iso },
          { icon: "bi-circle-half", label: "Aperture", value: photo.aperture },
          { icon: "bi-stopwatch", label: "Shutter Speed", value: photo.shutter },
        ].map((item) => (
          <div className="col-6 col-md-4" key={item.label}>
            <div className="p-3 rounded-3" style={{ background: "var(--sand-deep)" }}>
              <i className={`bi ${item.icon} text-gold-dark me-1`}></i>
              <span className="font-mono text-stone" style={{ fontSize: "0.7rem", textTransform: "uppercase" }}>{item.label}</span>
              <p className="fw-semibold mb-0 mt-1" style={{ fontSize: "0.9rem" }}>{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={toggleLike}
        className="d-inline-flex align-items-center gap-2 mt-4 px-3 py-2 rounded-3 border-0"
        style={{ background: liked ? "var(--gold)" : "var(--sand-deep)" }}
      >
        <i className={`bi ${liked ? "bi-heart-fill" : "bi-heart"} text-gold-dark`}></i>
        <span className="font-mono text-stone" style={{ fontSize: "0.78rem" }}>{likes} likes</span>
      </button>
    </div>
  );
};

export default PhotoExif;
