import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { icon: "bi-signpost-2", value: "30+", label: "Destinations" },
  { icon: "bi-images", value: "1,000+", label: "Photographs" },
  { icon: "bi-calendar3", value: "3", label: "Years Travelling" },
  { icon: "bi-cup-hot", value: "Countless", label: "Cups of Chai" },
];

const StatsBar = () => (
  <section className="py-5 my-3 rounded-4" style={{ background: "var(--teal)" }}>
    <div className="row g-4 text-center px-3">
      {stats.map((s) => (
        <div className="col-6 col-md-3" key={s.label}>
          <i className={`bi ${s.icon} text-gold`} style={{ fontSize: "1.6rem" }}></i>
          <p className="font-display fw-semibold h4 mt-2 mb-1" style={{ color: "var(--sand)" }}>
            <AnimatedCounter value={s.value} />
          </p>
          <p className="font-mono mb-0" style={{ color: "rgba(250,246,238,0.75)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {s.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
