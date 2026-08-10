import React from "react";
import { journeyYears } from "../../../data/journeys";

const JournalToolbar = ({
  activeCategory,
  setActiveCategory,
  activeYear,
  setActiveYear,
  query,
  setQuery,
  journalCategories = [],
}) => (
  <div className="mb-5">
    <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between mb-3">
      <div className="d-flex flex-wrap gap-2">
        <button
          className={`btn btn-sm ${activeCategory === "all" ? "btn-gold" : "btn-outline-ink"}`}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>
        {journalCategories.map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm ${activeCategory === cat ? "btn-gold" : "btn-outline-ink"}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by place…"
        className="form-control form-control-custom"
        style={{ maxWidth: "16rem" }}
      />
    </div>
    <div className="d-flex flex-wrap gap-2 align-items-center">
      <span className="font-mono text-stone" style={{ fontSize: "0.72rem", textTransform: "uppercase" }}>Year:</span>
      <button
        className={`btn btn-sm ${activeYear === "all" ? "btn-gold" : "btn-outline-ink"}`}
        onClick={() => setActiveYear("all")}
      >
        All
      </button>
      {journeyYears.map((year) => (
        <button
          key={year}
          className={`btn btn-sm ${activeYear === year ? "btn-gold" : "btn-outline-ink"}`}
          onClick={() => setActiveYear(year)}
        >
          {year}
        </button>
      ))}
    </div>
  </div>
);

export default JournalToolbar;
