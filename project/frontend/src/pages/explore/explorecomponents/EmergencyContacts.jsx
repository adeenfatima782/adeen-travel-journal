import React from "react";
import { emergencyContacts } from "../../../data/samplePosts";

const EmergencyContacts = () => (
  <div className="p-4 rounded-3 h-100" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
    <h3 className="font-display fw-semibold h5 mb-3"><i className="bi bi-telephone me-2 text-gold-dark"></i>Emergency Contacts</h3>
    <p className="text-stone small mb-3">Demo numbers — verify locally before you travel.</p>
    <div className="d-flex flex-column gap-2">
      {emergencyContacts.map((c) => (
        <div key={c.label} className="d-flex justify-content-between align-items-center p-2 rounded-2" style={{ background: "var(--sand-deep)" }}>
          <span className="small fw-semibold"><i className={`bi ${c.icon} me-2 text-gold-dark`}></i>{c.label}</span>
          <span className="font-mono text-gold-dark small">{c.number}</span>
        </div>
      ))}
    </div>
  </div>
);

export default EmergencyContacts;
