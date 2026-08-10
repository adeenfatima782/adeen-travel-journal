import React from "react";
import { thingsToAvoid } from "../../../data/samplePosts";

const ThingsToAvoid = () => (
  <section className="py-5">
    <p className="font-mono text-gold-dark mb-4 text-center" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
      <i className="bi bi-exclamation-triangle me-1"></i>Things to Avoid
    </p>
    <div className="row g-3">
      {thingsToAvoid.map((tip, i) => (
        <div className="col-md-6" key={i}>
          <div className="d-flex align-items-start gap-2 p-3 rounded-3" style={{ background: "#fff", border: "1px solid rgba(163,55,47,0.2)" }}>
            <i className="bi bi-x-circle-fill" style={{ color: "#a3372f" }}></i>
            <span className="small text-stone">{tip}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ThingsToAvoid;
