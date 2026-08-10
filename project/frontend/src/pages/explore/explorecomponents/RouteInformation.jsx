import React from "react";

const RouteInformation = ({ destination }) => {
  if (!destination || !destination.route || !(destination.route.steps || []).length) return null;

  return (
    <div className="p-4 rounded-3 h-100" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
      <h3 className="font-display fw-semibold h5 mb-3"><i className="bi bi-signpost-2 me-2 text-gold-dark"></i>Route Information</h3>
      <p className="font-mono text-stone mb-3" style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
        {destination.route.title || `How to reach ${destination.name}`}
      </p>
      <div className="d-flex flex-column">
        {destination.route.steps.map((step, i) => (
          <div key={step} className="d-flex align-items-center gap-2">
            <div className="d-flex flex-column align-items-center" style={{ width: "20px" }}>
              <i className="bi bi-geo-alt-fill text-gold-dark"></i>
              {i !== destination.route.steps.length - 1 && <div style={{ width: "1px", height: "24px", background: "rgba(28,27,26,0.15)" }}></div>}
            </div>
            <span className="small fw-semibold">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteInformation;
