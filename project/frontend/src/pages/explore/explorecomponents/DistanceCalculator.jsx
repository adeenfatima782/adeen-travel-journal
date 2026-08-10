import React, { useState } from "react";
import { distanceTable } from "../../../data/samplePosts";

const DistanceCalculator = () => {
  const [selected, setSelected] = useState(distanceTable[0].to);
  const result = distanceTable.find((d) => d.to === selected);

  return (
    <div className="p-4 rounded-3 h-100" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
      <h3 className="font-display fw-semibold h5 mb-3"><i className="bi bi-signpost me-2 text-gold-dark"></i>Distance Calculator</h3>
      <div className="mb-3">
        <label className="form-label font-mono small text-stone">From Islamabad to…</label>
        <select className="form-select form-control-custom" value={selected} onChange={(e) => setSelected(e.target.value)}>
          {distanceTable.map((d) => (
            <option key={d.to} value={d.to}>{d.to}</option>
          ))}
        </select>
      </div>
      <div className="p-3 rounded-3 text-center" style={{ background: "var(--sand-deep)" }}>
        <p className="font-mono text-stone mb-1" style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Distance</p>
        <p className="font-display fw-semibold h3 mb-1 text-gold-dark">{result.distance}</p>
        <p className="text-stone small mb-0">{result.duration}</p>
      </div>
    </div>
  );
};

export default DistanceCalculator;
