import React from "react";

const TravelExpenses = ({ expenses }) => (
  <section className="mb-4 paper-card p-4">
    <span className="washi-tag mb-3"><i className="bi bi-wallet2"></i>Travel Expenses</span>
    <div className="mt-3">
      {expenses.map((e, i) => (
        <div
          key={i}
          className="d-flex justify-content-between py-2"
          style={{ borderBottom: i < expenses.length - 1 ? "1px dashed rgba(31,75,76,0.25)" : "none" }}
        >
          <span className="small">{e.item}</span>
          <span className="font-mono fw-semibold small">{e.amount}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TravelExpenses;
