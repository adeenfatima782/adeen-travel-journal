import React from "react";
import { blogCategories } from "../../../data/samplePosts";

const CategoryShowcase = ({ onSelect }) => (
  <section className="mb-5">
    <div className="row g-3">
      {blogCategories.map((cat) => (
        <div className="col-6 col-sm-4 col-lg-3" key={cat.name}>
          <button
            onClick={() => onSelect(cat.keyword)}
            className="w-100 h-100 text-start p-3 rounded-3 border-0"
            style={{ background: "#fff", border: "1px solid rgba(28,27,26,0.08)", cursor: "pointer" }}
          >
            <i className={`bi ${cat.icon} text-gold-dark`} style={{ fontSize: "1.4rem" }}></i>
            <p className="font-display fw-semibold mb-0 mt-2" style={{ fontSize: "0.95rem" }}>{cat.name}</p>
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default CategoryShowcase;
