import React from "react";

const BlogToolbar = ({ activeCategory, setActiveCategory, query, setQuery, categories = [] }) => (
  <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between mb-5">
    <div className="d-flex flex-wrap gap-2">
      <button
        className={`btn btn-sm ${activeCategory === "all" ? "btn-gold" : "btn-outline-ink"}`}
        onClick={() => setActiveCategory("all")}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.slug}
          className={`btn btn-sm ${activeCategory === cat.slug ? "btn-gold" : "btn-outline-ink"}`}
          onClick={() => setActiveCategory(cat.slug)}
        >
          {cat.name}
        </button>
      ))}
    </div>
    <input
      type="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search entries…"
      className="form-control form-control-custom"
      style={{ maxWidth: "16rem" }}
    />
  </div>
);

export default BlogToolbar;
