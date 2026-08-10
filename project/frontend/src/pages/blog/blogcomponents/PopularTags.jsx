import React from "react";
import { popularTags } from "../../../data/samplePosts";

const PopularTags = ({ onSelect }) => (
  <section className="mb-5 text-center">
    <p className="font-mono text-gold-dark mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
      Popular Tags
    </p>
    <div className="d-flex flex-wrap justify-content-center gap-2">
      {popularTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelect(tag)}
          className="btn btn-sm btn-outline-ink rounded-pill"
        >
          #{tag}
        </button>
      ))}
    </div>
  </section>
);

export default PopularTags;
