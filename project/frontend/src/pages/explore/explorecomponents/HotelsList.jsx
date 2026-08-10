import React from "react";

const tierColor = { Luxury: "var(--gold-dark)", "Mid-range": "var(--teal)", Budget: "var(--stone)" };

const HotelsList = ({ destination }) => {
  if (!destination || !destination.hotels) return null;

  return (
    <section className="mb-5">
      <p className="font-mono text-gold-dark mb-3 text-center" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Hotels
      </p>
      <h2 className="font-display fw-semibold h3 mb-4 text-center">Where To Stay In {destination.name}</h2>
      <div className="row g-3">
        {destination.hotels.map((h) => (
          <div className="col-sm-6 col-md-4" key={h.name}>
            <div className="h-100 p-4 rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <i className="bi bi-building text-gold-dark" style={{ fontSize: "1.4rem" }}></i>
                <span
                  className="badge rounded-pill"
                  style={{ background: tierColor[h.tier] || "var(--stone)", color: "#fff", fontSize: "0.65rem" }}
                >
                  {h.tier}
                </span>
              </div>
              <h3 className="h6 font-display fw-semibold mb-1">{h.name}</h3>
              <p className="text-stone small mb-0">{h.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelsList;
