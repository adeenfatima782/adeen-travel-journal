import React from "react";

const difficultyColor = { Easy: "var(--teal)", Medium: "var(--gold-dark)", Hard: "#b0432a" };

const SafetyDifficulty = ({ destination }) => {
  if (!destination) return null;

  return (
    <div className="p-4 rounded-3 h-100" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
      <h3 className="font-display fw-semibold h5 mb-3">
        <i className="bi bi-shield-check me-2 text-gold-dark"></i>Safety & Difficulty
      </h3>

      <div className="mb-3">
        <p className="font-mono text-stone mb-1" style={{ fontSize: "0.72rem", textTransform: "uppercase" }}>Safety Meter</p>
        <div style={{ fontSize: "1.3rem", color: "var(--gold)" }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <i key={i} className={`bi ${i < (destination.safety || 0) ? "bi-star-fill" : "bi-star"} me-1`}></i>
          ))}
        </div>
      </div>

      <div>
        <p className="font-mono text-stone mb-1" style={{ fontSize: "0.72rem", textTransform: "uppercase" }}>Difficulty</p>
        <span
          className="badge rounded-pill px-3 py-2"
          style={{ background: difficultyColor[destination.difficulty] || "var(--stone)", color: "#fff", fontWeight: 600 }}
        >
          {destination.difficulty || "N/A"}
        </span>
      </div>
    </div>
  );
};

export default SafetyDifficulty;
