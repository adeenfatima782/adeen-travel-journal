import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchDestination = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/explore${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto d-flex" style={{ maxWidth: "30rem" }}>
      <span className="input-group-text bg-white border-end-0" style={{ borderRadius: "999px 0 0 999px", border: "1px solid rgba(28,27,26,0.15)" }}>
        <i className="bi bi-search text-stone"></i>
      </span>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search destinations…"
        className="form-control border-start-0 border-end-0"
        style={{ border: "1px solid rgba(28,27,26,0.15)" }}
      />
      <button type="submit" className="btn btn-gold" style={{ borderRadius: "0 999px 999px 0" }}>Search</button>
    </form>
  );
};

export default SearchDestination;
