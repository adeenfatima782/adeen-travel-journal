import React from "react";

const GalleryQuotes = ({ quotes }) => (
  <section className="mb-5">
    <p className="font-mono text-gold-dark mb-3 text-center" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
      Photography Quotes
    </p>
    <div className="row g-3">
      {quotes.map((q, i) => (
        <div className="col-md-6" key={i}>
          <div className="h-100 p-4 rounded-3" style={{ background: "var(--sand-deep)" }}>
            <i className="bi bi-quote text-gold mb-2 d-block" style={{ fontSize: "1.4rem" }}></i>
            <p className="font-display fst-italic mb-0" style={{ fontSize: "1.05rem", lineHeight: 1.5 }}>{q}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default GalleryQuotes;
