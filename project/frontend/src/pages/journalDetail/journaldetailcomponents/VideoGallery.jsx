import React from "react";

const VideoGallery = ({ videoCount }) => {
  if (!videoCount) return null;
  return (
    <section className="mb-5">
      <span className="washi-tag mb-3"><i className="bi bi-camera-reels"></i>Video Gallery</span>
      <div className="row g-3 mt-1">
        {Array.from({ length: videoCount }).map((_, i) => (
          <div className="col-6 col-md-4" key={i}>
            <div
              className="d-flex align-items-center justify-content-center rounded-3"
              style={{ aspectRatio: "16/9", background: "var(--ink)" }}
            >
              <i className="bi bi-play-circle text-sand" style={{ fontSize: "2rem", color: "var(--sand)" }}></i>
            </div>
            <p className="font-mono text-stone small mt-2 mb-0">Clip {i + 1}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
