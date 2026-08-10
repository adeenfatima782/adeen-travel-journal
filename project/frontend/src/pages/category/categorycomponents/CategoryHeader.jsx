import React from "react";

const CategoryHeader = ({ name }) => (
  <>
    <p className="font-mono text-gold-dark mb-2" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
      Category
    </p>
    <h1 className="font-display fw-semibold mb-5">{name || "Not found"}</h1>
  </>
);

export default CategoryHeader;
