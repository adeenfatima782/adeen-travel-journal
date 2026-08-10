import React from "react";
import { budgetTiers } from "../../../data/samplePosts";

const EstimatedBudget = () => (
  <section className="mb-5">
    <div className="text-center mb-4">
      <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Estimated Budget
      </p>
      <h2 className="font-display fw-semibold h3 mb-0">What A Trip North Roughly Costs</h2>
    </div>
    <div className="row g-3">
      {budgetTiers.map((t) => (
        <div className="col-md-4" key={t.tier}>
          <div className="h-100 p-4 rounded-3 text-center" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
            <i className={`bi ${t.icon} text-gold-dark`} style={{ fontSize: "1.6rem" }}></i>
            <h3 className="h6 font-display fw-semibold mt-3 mb-1">{t.tier}</h3>
            <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.85rem" }}>{t.range}</p>
            <p className="text-stone small mb-0">{t.includes}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EstimatedBudget;
