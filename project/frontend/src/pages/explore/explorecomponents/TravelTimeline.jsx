import React from "react";

const TravelTimeline = ({ destination }) => {
  if (!destination || !destination.timeline) return null;

  return (
    <div className="p-4 rounded-3 h-100" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
      <h3 className="font-display fw-semibold h5 mb-1">
        <i className="bi bi-calendar3 me-2 text-gold-dark"></i>Travel Timeline
      </h3>
      <p className="text-stone small mb-3">A sample {destination.timeline.length}-day plan for {destination.name}.</p>
      <div>
        {destination.timeline.map((stop, i) => (
          <div key={stop.day} className="d-flex gap-3">
            <div className="d-flex flex-column align-items-center">
              <span
                className="d-flex align-items-center justify-content-center font-mono fw-semibold"
                style={{ width: "2.2rem", height: "2.2rem", borderRadius: "50%", background: "var(--gold)", color: "var(--ink)", fontSize: "0.85rem" }}
              >
                {stop.day}
              </span>
              {i < destination.timeline.length - 1 && (
                <span style={{ width: "2px", flexGrow: 1, background: "rgba(28,27,26,0.15)", minHeight: "1.5rem" }} />
              )}
            </div>
            <p className="small mb-3">{stop.plan}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelTimeline;
