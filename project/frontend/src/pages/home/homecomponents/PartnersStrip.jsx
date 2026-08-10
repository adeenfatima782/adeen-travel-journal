import React from "react";
import { partners } from "../../../data/samplePosts";

const PartnersStrip = () => (
  <section className="py-5 text-center">
    <p className="font-mono text-stone mb-4" style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
      Featured On / Partnered With
    </p>
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {partners.map((p) => (
        <span key={p.name} className="d-flex align-items-center gap-2 text-stone" style={{ opacity: 0.7 }}>
          <i className={`bi ${p.icon}`} style={{ fontSize: "1.2rem" }}></i>
          <span className="small fw-semibold">{p.name}</span>
        </span>
      ))}
    </div>
  </section>
);

export default PartnersStrip;
