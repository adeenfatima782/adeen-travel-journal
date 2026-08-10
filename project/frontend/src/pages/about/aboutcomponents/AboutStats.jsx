import React from "react";

const stats = [
  { value: "30+", label: "DESTINATIONS COVERED" },
  { value: "1,000+", label: "PHOTOGRAPHS SHARED" },
  { value: "3", label: "YEARS ON THE ROAD" },
];

const AboutStats = () => (
  <div className="row g-4 text-center">
    {stats.map((s) => (
      <div className="col-md-4" key={s.label}>
        <p className="font-display fw-semibold h3 mb-1">{s.value}</p>
        <p className="text-stone small font-mono">{s.label}</p>
      </div>
    ))}
  </div>
);

export default AboutStats;
