import React from "react";

const DestinationGrid = ({ destinations, onSelect }) => {
  if (destinations.length === 0) {
    return <p className="text-stone text-center py-5">No destinations match — try a different filter.</p>;
  }

  return (
    <div className="row g-4">
      {destinations.map((d) => (
        <div className="col-sm-6 col-lg-4" key={d.slug}>
          <div className="h-100 rounded-3 overflow-hidden shadow-sm" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.08)" }}>
            <div style={{ aspectRatio: "4/3" }}>
              <img src={d.image} alt={d.name} className="w-100 h-100" style={{ objectFit: "cover" }} />
            </div>
            <div className="p-3">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h3 className="font-display fw-semibold h6 mb-0">{d.name}</h3>
                  <p className="font-mono text-stone mb-0" style={{ fontSize: "0.72rem" }}>{d.country} · {d.type}</p>
                </div>
                <span className="font-mono text-gold-dark small">
                  <i className="bi bi-star-fill me-1"></i>{d.rating}
                </span>
              </div>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge rounded-pill" style={{ background: "var(--sand-deep)", color: "var(--stone)", fontWeight: 500 }}>
                  <i className="bi bi-calendar3 me-1"></i>{d.bestTime}
                </span>
                <span className="badge rounded-pill" style={{ background: "var(--sand-deep)", color: "var(--stone)", fontWeight: 500 }}>
                  <i className="bi bi-wallet2 me-1"></i>{d.budget}
                </span>
              </div>
              <button onClick={() => onSelect(d.slug)} className="btn btn-outline-ink btn-sm w-100">Explore</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DestinationGrid;
