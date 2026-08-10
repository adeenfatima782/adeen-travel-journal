import React from "react";
import { Link } from "react-router-dom";

const PhotoPrevNext = ({ album, prev, next }) => {
  if (!prev && !next) return null;
  return (
    <div className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top" style={{ borderColor: "rgba(28,27,26,0.1)" }}>
      {prev ? (
        <Link to={`/gallery/album/${album.slug}/${prev.id}`} className="link-underline font-mono text-stone small">
          <i className="bi bi-arrow-left me-1"></i>{prev.caption}
        </Link>
      ) : <span />}
      {next ? (
        <Link to={`/gallery/album/${album.slug}/${next.id}`} className="link-underline font-mono text-stone small">
          {next.caption}<i className="bi bi-arrow-right ms-1"></i>
        </Link>
      ) : <span />}
    </div>
  );
};

export default PhotoPrevNext;
