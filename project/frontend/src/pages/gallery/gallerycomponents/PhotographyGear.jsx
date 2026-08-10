import React from "react";

const PhotographyGear = ({ gear }) => (
  <section className="mb-5">
    <div className="text-center mb-4">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        <i className="bi bi-camera me-1"></i>What's in the Bag
      </p>
      <h2 className="font-display fw-semibold h3 mb-0">Photography Gear</h2>
    </div>
    <div className="row g-3">
      {gear.map((g) => (
        <div className="col-6 col-md-4 col-lg-3" key={g.category}>
          <div className="d-flex align-items-start gap-3 p-3 rounded-3 h-100" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.08)" }}>
            <i className={`bi ${g.icon} text-gold-dark`} style={{ fontSize: "1.3rem" }}></i>
            <div>
              <p className="font-mono text-stone mb-1" style={{ fontSize: "0.68rem", textTransform: "uppercase" }}>{g.category}</p>
              <p className="fw-semibold small mb-0">{g.item}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PhotographyGear;
