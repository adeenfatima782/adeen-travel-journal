import React, { useState } from "react";

const defaultItems = [
  "Camera + extra batteries",
  "Memory cards",
  "Power bank",
  "Warm jacket",
  "Sunscreen",
  "First aid kit",
  "Reusable water bottle",
  "Cash (small notes)",
  "ID / documents",
  "Comfortable hiking shoes",
];

const PackingChecklist = () => {
  const [checked, setChecked] = useState({});

  const toggle = (item) => setChecked((prev) => ({ ...prev, [item]: !prev[item] }));
  const doneCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="p-4 rounded-3 h-100" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
      <div className="d-flex justify-content-between align-items-center mb-1">
        <h3 className="font-display fw-semibold h5 mb-0"><i className="bi bi-bag-check me-2 text-gold-dark"></i>Packing Checklist</h3>
        <span className="font-mono text-stone small">{doneCount}/{defaultItems.length}</span>
      </div>
      <p className="text-stone small mb-3">Based on what I actually pack for the northern valleys.</p>

      <div className="d-flex flex-column gap-2">
        {defaultItems.map((item) => (
          <label
            key={item}
            className="d-flex align-items-center gap-2 p-2 rounded-2"
            style={{ background: checked[item] ? "var(--sand-deep)" : "transparent", cursor: "pointer" }}
          >
            <input type="checkbox" checked={!!checked[item]} onChange={() => toggle(item)} className="form-check-input mt-0" />
            <span style={{ textDecoration: checked[item] ? "line-through" : "none", color: checked[item] ? "var(--stone)" : "var(--ink)" }}>
              {item}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PackingChecklist;
