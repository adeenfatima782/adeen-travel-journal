import React from "react";

const PhotographyCollections = ({ collections, onSelect }) => (
  <section className="mb-5">
    <div className="text-center mb-4">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        <i className="bi bi-grid me-1"></i>Collections
      </p>
      <h2 className="font-display fw-semibold h3 mb-0">Photography Collections</h2>
    </div>
    <div className="row g-3">
      {collections.map((c) => (
        <div className="col-6 col-sm-4 col-lg-3" key={c.name}>
          <button
            onClick={() => onSelect(c.tag)}
            className="w-100 h-100 text-start p-3 rounded-3 border-0"
            style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.08)", cursor: "pointer" }}
          >
            <i className={`bi ${c.icon} text-gold-dark`} style={{ fontSize: "1.4rem" }}></i>
            <p className="font-display fw-semibold mb-0 mt-2" style={{ fontSize: "0.95rem" }}>{c.name}</p>
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default PhotographyCollections;
