import React from "react";

const LocalFood = ({ destination }) => {
  if (!destination || !destination.food) return null;

  return (
    <section className="mb-5">
      <p className="font-mono text-gold-dark mb-3 text-center" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Local Food
      </p>
      <h2 className="font-display fw-semibold h3 mb-4 text-center">Worth Trying In {destination.name}</h2>
      <div className="row g-3">
        {destination.food.map((f) => (
          <div className="col-sm-6 col-md-4" key={f.name}>
            <div className="h-100 p-4 rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
              <i className="bi bi-cup-hot text-gold-dark" style={{ fontSize: "1.4rem" }}></i>
              <h3 className="h6 font-display fw-semibold mt-2 mb-1">{f.name}</h3>
              <p className="text-stone small mb-0">{f.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocalFood;
