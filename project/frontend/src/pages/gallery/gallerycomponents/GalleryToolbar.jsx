import React from "react";

const GalleryToolbar = ({ activeFilter, setActiveFilter, query, setQuery, galleryFilterCategories = [] }) => (
  <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between mb-4">
    <div className="d-flex flex-wrap gap-2">
      <button
        className={`btn btn-sm ${activeFilter === "all" ? "btn-gold" : "btn-outline-ink"}`}
        onClick={() => setActiveFilter("all")}
      >
        All
      </button>
      {galleryFilterCategories.map((cat) => (
        <button
          key={cat}
          className={`btn btn-sm ${activeFilter === cat ? "btn-gold" : "btn-outline-ink"}`}
          onClick={() => setActiveFilter(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
    <input
      type="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search by place, album…"
      className="form-control form-control-custom"
      style={{ maxWidth: "16rem" }}
    />
  </div>
);

export default GalleryToolbar;
