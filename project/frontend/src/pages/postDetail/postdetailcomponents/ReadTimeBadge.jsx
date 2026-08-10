import React from "react";

const ReadTimeBadge = ({ minutes }) => (
  <span
    className="badge rounded-pill d-inline-flex align-items-center gap-1"
    style={{ background: "var(--sand-deep)", color: "var(--gold-dark)", fontWeight: 600, fontSize: "0.75rem" }}
  >
    <i className="bi bi-clock"></i>{minutes} min read
  </span>
);

export default ReadTimeBadge;
