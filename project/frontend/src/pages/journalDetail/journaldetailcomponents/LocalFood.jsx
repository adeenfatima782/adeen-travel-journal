import React from "react";

const LocalFood = ({ food }) => (
  <section className="mb-4 paper-card p-4">
    <span className="washi-tag mb-3"><i className="bi bi-cup-hot"></i>Local Food</span>
    <div className="row g-2 mt-1">
      {food.map((f, i) => (
        <div className="col-12" key={i}>
          <p className="fw-semibold small mb-1">{f.name}</p>
          <p className="text-stone small mb-2">{f.note}</p>
        </div>
      ))}
    </div>
  </section>
);

export default LocalFood;
