import React, { useEffect, useState } from "react";

// Simple auto-advancing carousel — original lines in Adeen's own voice.
const JournalQuotes = ({ quotes }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 5000);
    return () => clearInterval(id);
  }, [quotes.length]);

  return (
    <section className="mb-5 text-center">
      <span className="washi-tag mb-3">Travel Quotes</span>
      <div className="mx-auto p-4 p-md-5 rounded-3 paper-card" style={{ maxWidth: "40rem", minHeight: "9rem" }}>
        <i className="bi bi-quote text-gold mb-2 d-block" style={{ fontSize: "1.6rem" }}></i>
        <p className="diary-quote mb-0" style={{ fontSize: "1.5rem" }}>{quotes[index]}</p>
      </div>
      <div className="d-flex justify-content-center gap-2 mt-3">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Quote ${i + 1}`}
            className="rounded-circle border-0 p-0"
            style={{ width: "8px", height: "8px", background: i === index ? "var(--gold-dark)" : "rgba(28,27,26,0.2)" }}
          />
        ))}
      </div>
    </section>
  );
};

export default JournalQuotes;
