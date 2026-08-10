import React from "react";

const PakistanBucketList = ({ places }) => (
  <section className="mb-5 text-center">
    <span className="washi-label mb-2 d-inline-block">Not Yet Visited</span>
    <h2 className="font-signature mb-4" style={{ fontSize: "2.2rem", color: "var(--teal)" }}>Pakistan Bucket List</h2>
    <div className="d-flex flex-wrap justify-content-center gap-2">
      {places.map((place, i) => (
        <span key={place} className="stamp-badge stamp-travel" style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (2 + (i % 3))}deg)` }}>{place}</span>
      ))}
    </div>
  </section>
);

export default PakistanBucketList;
