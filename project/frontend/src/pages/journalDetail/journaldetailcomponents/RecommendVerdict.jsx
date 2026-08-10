import React from "react";

const RecommendVerdict = ({ recommend }) => (
  <section className="mb-5 postcard-frame rounded-4 p-4 p-md-5 text-center">
    <p className="washi-label mb-3 d-inline-block">Would I Recommend?</p>
    <div className="mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <i key={i} className={`bi ${i < recommend.rating ? "bi-star-fill" : "bi-star"} me-1 text-gold-dark`}></i>
      ))}
    </div>
    <p className="diary-quote mb-0 mx-auto" style={{ maxWidth: "34rem", fontSize: "1.3rem" }}>
      "{recommend.verdict}"
    </p>
  </section>
);

export default RecommendVerdict;
