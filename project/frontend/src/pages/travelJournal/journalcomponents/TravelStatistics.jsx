import React from "react";
import AnimatedCounter from "../../home/homecomponents/AnimatedCounter";

const TravelStatistics = ({ stats }) => (
  <section className="mb-5">
    <div className="text-center mb-4">
      <span className="washi-tag"><i className="bi bi-bar-chart"></i>By The Numbers</span>
    </div>
    <div className="row g-3 g-md-4">
      {stats.map((s) => (
        <div className="col-6 col-md-3" key={s.label}>
          <div className="luggage-tag text-center h-100">
            <i className={`bi ${s.icon} text-gold-dark`} style={{ fontSize: "1.3rem" }}></i>
            <p className="font-display fw-semibold h4 mt-2 mb-1">
              <AnimatedCounter value={s.value} />
            </p>
            <p className="font-mono text-stone mb-0" style={{ fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {s.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TravelStatistics;
