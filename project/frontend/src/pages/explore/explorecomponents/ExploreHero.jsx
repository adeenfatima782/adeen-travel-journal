import React from "react";

const ExploreHero = ({ query, setQuery }) => (
  <div className="text-center mb-5">
    <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
      Explore
    </p>
    <h1 className="font-display fw-semibold mb-3">Find Your Next Destination</h1>
    <p className="text-stone mx-auto mb-4" style={{ maxWidth: "34rem" }}>
      Every place on this page is somewhere I've actually travelled — search or filter to find
      your next trip.
    </p>
    <div className="mx-auto d-flex" style={{ maxWidth: "26rem" }}>
      <span className="input-group-text bg-white border-end-0" style={{ borderRadius: "999px 0 0 999px", border: "1px solid rgba(28,27,26,0.15)" }}>
        <i className="bi bi-search text-stone"></i>
      </span>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search destinations…"
        className="form-control border-start-0"
        style={{ borderRadius: "0 999px 999px 0", border: "1px solid rgba(28,27,26,0.15)" }}
      />
    </div>
  </div>
);

export default ExploreHero;
