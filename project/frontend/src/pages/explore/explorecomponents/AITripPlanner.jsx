import React, { useState } from "react";
import { destinations } from "../../../data/samplePosts";

const budgets = ["Budget", "Mid-range", "Luxury"];
const travelTypes = ["Solo", "Family", "Adventure", "Photography"];

const budgetRank = { Budget: 0, "Mid-range": 1, Luxury: 2 };

const AITripPlanner = () => {
  const [country, setCountry] = useState("Pakistan");
  const [budget, setBudget] = useState("Mid-range");
  const [days, setDays] = useState(4);
  const [travelType, setTravelType] = useState("Adventure");
  const [result, setResult] = useState(null);

  const planTrip = (e) => {
    e.preventDefault();
    const pool = destinations.filter((d) => d.country === country);
    const byBudget = [...pool].sort(
      (a, b) => Math.abs(budgetRank[a.budget] - budgetRank[budget]) - Math.abs(budgetRank[b.budget] - budgetRank[budget])
    );
    const pick = byBudget[0] || pool[0];
    if (!pick) {
      setResult(null);
      return;
    }
    setResult(pick);
  };

  return (
    <div className="p-4 rounded-3" style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.1)" }}>
      <h3 className="font-display fw-semibold h5 mb-1">
        <i className="bi bi-robot me-2 text-gold-dark"></i>AI Trip Planner
      </h3>
      <p className="text-stone small mb-4">
        Tell it what you're after and it'll suggest a destination from Adeen's own trips — frontend
        preview, not a live model yet.
      </p>

      <form onSubmit={planTrip} className="row g-3 mb-4">
        <div className="col-sm-6">
          <label className="form-label font-mono small text-stone">Country</label>
          <select className="form-select form-control-custom" value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="Pakistan">Pakistan</option>
          </select>
        </div>
        <div className="col-sm-6">
          <label className="form-label font-mono small text-stone">Budget</label>
          <select className="form-select form-control-custom" value={budget} onChange={(e) => setBudget(e.target.value)}>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="col-sm-6">
          <label className="form-label font-mono small text-stone">Days</label>
          <input
            type="number"
            min="1"
            max="14"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="form-control form-control-custom"
          />
        </div>
        <div className="col-sm-6">
          <label className="form-label font-mono small text-stone">Travel Type</label>
          <select className="form-select form-control-custom" value={travelType} onChange={(e) => setTravelType(e.target.value)}>
            {travelTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-gold w-100">
            <i className="bi bi-stars me-2"></i>Plan My Trip
          </button>
        </div>
      </form>

      {result && (
        <div className="p-3 rounded-3" style={{ background: "var(--sand-deep)" }}>
          <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Suggested Destination
          </p>
          <h4 className="font-display fw-semibold h5 mb-2">
            {result.name} · {days} day{Number(days) > 1 ? "s" : ""} · {travelType}
          </h4>
          {result.attractions && (
            <p className="mb-2 small">
              <strong>Must Visit:</strong> {result.attractions.join(", ")}
            </p>
          )}
          {result.hotels && (
            <p className="mb-2 small">
              <strong>Hotels:</strong> {result.hotels.map((h) => h.name).join(", ")}
            </p>
          )}
          {result.photoSpots && (
            <p className="mb-0 small">
              <strong>Photography Spots:</strong> {result.photoSpots.sunrise}, {result.photoSpots.sunset}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AITripPlanner;
