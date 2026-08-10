import React from "react";

const stampClass = {
  "Travel Diaries": "stamp-travel",
  Photography: "stamp-photography",
  Gallery: "stamp-gallery",
};

const CategoryStamp = ({ category, large = false }) => (
  <span className={`stamp-badge ${stampClass[category] || "stamp-gallery"}`} style={large ? { fontSize: "0.8rem", padding: "0.4rem 1.1rem" } : {}}>
    {category}
  </span>
);

export default CategoryStamp;
