import React, { useState } from "react";

const BudgetCalculator = () => {
  const [days, setDays] = useState(4);
  const [hotel, setHotel] = useState(4000);
  const [food, setFood] = useState(1500);
  const [transport, setTransport] = useState(2000);

  const total = (Number(days) || 0) * ((Number(hotel) || 0) + (Number(food) || 0)) + (Number(transport) || 0);

  return (
    <div className="p-4 rounded-3 h-100" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
      <h3 className="font-display fw-semibold h5 mb-1"><i className="bi bi-calculator me-2 text-gold-dark"></i>Budget Calculator</h3>
      <p className="text-stone small mb-4">A rough estimate — actual costs vary by season and destination.</p>

      <div className="mb-3">
        <label className="form-label font-mono small text-stone">Number of days</label>
        <input type="number" min="1" value={days} onChange={(e) => setDays(e.target.value)} className="form-control form-control-custom" />
      </div>
      <div className="mb-3">
        <label className="form-label font-mono small text-stone">Hotel / night (PKR)</label>
        <input type="number" min="0" value={hotel} onChange={(e) => setHotel(e.target.value)} className="form-control form-control-custom" />
      </div>
      <div className="mb-3">
        <label className="form-label font-mono small text-stone">Food / day (PKR)</label>
        <input type="number" min="0" value={food} onChange={(e) => setFood(e.target.value)} className="form-control form-control-custom" />
      </div>
      <div className="mb-4">
        <label className="form-label font-mono small text-stone">Transport, total (PKR)</label>
        <input type="number" min="0" value={transport} onChange={(e) => setTransport(e.target.value)} className="form-control form-control-custom" />
      </div>

      <div className="p-3 rounded-3 text-center" style={{ background: "var(--sand-deep)" }}>
        <p className="font-mono text-stone mb-1" style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Estimated Total
        </p>
        <p className="font-display fw-semibold h3 mb-0 text-gold-dark">PKR {total.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default BudgetCalculator;
