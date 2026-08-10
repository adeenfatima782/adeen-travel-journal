import React from "react";
import { localCulture } from "../../../data/samplePosts";

const items = [
  { key: "language", icon: "bi-chat-square-text", label: "Language" },
  { key: "dress", icon: "bi-person-badge", label: "Dress" },
  { key: "customs", icon: "bi-people", label: "Customs" },
];

const LocalCulture = () => (
  <section className="py-5">
    <p className="font-mono text-gold-dark mb-4 text-center" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
      <i className="bi bi-globe-asia-australia me-1"></i>Local Culture
    </p>
    <div className="row g-3">
      {items.map((item) => (
        <div className="col-md-4" key={item.key}>
          <div className="h-100 p-3 rounded-3" style={{ background: "var(--sand-deep)" }}>
            <i className={`bi ${item.icon} text-gold-dark mb-2 d-block`} style={{ fontSize: "1.4rem" }}></i>
            <p className="fw-semibold small mb-1">{item.label}</p>
            <p className="text-stone mb-0" style={{ fontSize: "0.8rem" }}>{localCulture[item.key]}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default LocalCulture;
