import React from "react";
import { Link } from "react-router-dom";

const JourneyPrevNext = ({ prev, next }) => {
  if (!prev && !next) return null;
  return (
    <div className="d-flex justify-content-between align-items-center mt-5 pt-4" style={{ borderTop: "2px dashed rgba(31,75,76,0.25)" }}>
      {prev ? (
        <Link to={`/journal/${prev.slug}`} className="link-underline font-mono text-stone small">
          <i className="bi bi-arrow-left me-1"></i>Previous: {prev.place}
        </Link>
      ) : <span />}
      {next ? (
        <Link to={`/journal/${next.slug}`} className="link-underline font-mono text-stone small">
          Next: {next.place}<i className="bi bi-arrow-right ms-1"></i>
        </Link>
      ) : <span />}
    </div>
  );
};

export default JourneyPrevNext;
