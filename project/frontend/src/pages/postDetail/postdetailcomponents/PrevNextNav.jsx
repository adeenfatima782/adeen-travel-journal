import React from "react";
import { Link } from "react-router-dom";

const PrevNextNav = ({ prevPost, nextPost }) => (
  <section className="mt-5 pt-5 border-top row g-3" style={{ borderColor: "rgba(28,27,26,0.1)" }}>
    <div className="col-md-6">
      {prevPost && (
        <Link to={`/post/${prevPost.slug}`} className="d-block h-100 p-3 rounded-3 text-decoration-none text-reset" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
          <p className="font-mono text-stone mb-2" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            <i className="bi bi-arrow-left me-1"></i>Previous
          </p>
          <p className="fw-semibold mb-0">{prevPost.title}</p>
        </Link>
      )}
    </div>
    <div className="col-md-6">
      {nextPost && (
        <Link to={`/post/${nextPost.slug}`} className="d-block h-100 p-3 rounded-3 text-decoration-none text-reset text-md-end" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
          <p className="font-mono text-stone mb-2" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Next<i className="bi bi-arrow-right ms-1"></i>
          </p>
          <p className="fw-semibold mb-0">{nextPost.title}</p>
        </Link>
      )}
    </div>
  </section>
);

export default PrevNextNav;
